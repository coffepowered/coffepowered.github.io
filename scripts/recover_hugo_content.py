#!/usr/bin/env python3
"""Recover Hugo content from the currently published, generated HTML.

The repository historically tracked the rendered site on ``main`` while the
original Hugo sources stopped being updated on another branch.  This script
turns the rendered article bodies back into Hugo content files without trying
to rewrite the author's prose.  The recovered bodies intentionally remain raw
HTML; new posts can be written normally in Markdown.
"""

from __future__ import annotations

import email.utils
import html
import json
import re
import xml.etree.ElementTree as ET
from collections import defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content"
def toml_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def clean_text(value: str) -> str:
    value = re.sub(r"<[^>]+>", " ", value)
    return re.sub(r"\s+", " ", html.unescape(value)).strip()


def slug_from_url(value: str) -> str | None:
    match = re.search(r"/blogs/([^/]+)/?", value)
    return match.group(1) if match else None


def rss_metadata() -> dict[str, dict[str, str]]:
    result: dict[str, dict[str, str]] = {}
    tree = ET.parse(ROOT / "index.xml")
    for item in tree.findall("./channel/item"):
        link = item.findtext("link", "")
        slug = slug_from_url(link)
        if not slug:
            continue
        parsed = email.utils.parsedate_to_datetime(item.findtext("pubDate", ""))
        result[slug] = {
            "title": item.findtext("title", "").strip(),
            "date": parsed.isoformat(),
        }
    return result


def listing_summaries() -> dict[str, str]:
    source = (ROOT / "blogs" / "index.html").read_text(encoding="utf-8")
    result: dict[str, str] = {}
    pattern = re.compile(
        r'<section>\s*<a href="(?P<url>[^"]+)" class="image">.*?'
        r'<h3>.*?</h3>\s*</header>\s*<p>(?P<summary>.*?)</p>',
        re.DOTALL,
    )
    for match in pattern.finditer(source):
        slug = slug_from_url(match.group("url"))
        if slug:
            result[slug] = clean_text(match.group("summary"))
    return result


def taxonomy_memberships(kind: str) -> dict[str, set[str]]:
    result: dict[str, set[str]] = defaultdict(set)
    base = ROOT / kind
    if not base.exists():
        return result
    for index in sorted(base.glob("*/index.html")):
        term = index.parent.name
        source = index.read_text(encoding="utf-8")
        for url in re.findall(r'href="(?:https://coffepowered\.github\.io)?/blogs/[^"#?]+', source):
            slug = slug_from_url(url)
            if slug:
                result[slug].add(term)
    return result


def extract_article(path: Path) -> tuple[str, str, str]:
    source = path.read_text(encoding="utf-8")
    match = re.search(
        r'<div class="inner">\s*'
        r'<header class="major">\s*<h1>(?P<title>.*?)</h1>\s*</header>\s*'
        r'(?P<rest>.*?)\s*</div>\s*</section>\s*<!-- Disqus Inject -->',
        source,
        re.DOTALL,
    )
    if not match:
        raise RuntimeError(f"Could not find article body in {path}")

    rest = match.group("rest").strip()
    image = ""
    image_match = re.match(
        r'<span class="image main"><img src="(?P<src>[^"]+)"[^>]*></span>\s*',
        rest,
        re.DOTALL,
    )
    if image_match:
        image = image_match.group("src")
        rest = rest[image_match.end() :].strip()

    # The theme loads Twitter's widget script once per page when required.
    rest = re.sub(
        r'<script\s+async\s+src="https://platform\.twitter\.com/widgets\.js"[^>]*></script>',
        "",
        rest,
        flags=re.IGNORECASE,
    ).strip()
    # Literal double braces inside rendered code samples would otherwise be
    # interpreted as Hugo template/shortcode delimiters on the next build.
    rest = rest.replace("{{", "&#123;&#123;").replace("}}", "&#125;&#125;")
    return clean_text(match.group("title")), image, rest


def write_article(
    path: Path,
    metadata: dict[str, dict[str, str]],
    summaries: dict[str, str],
    tags: dict[str, set[str]],
    categories: dict[str, set[str]],
) -> None:
    slug = path.parent.name
    source = path.read_text(encoding="utf-8")
    title, image, body = extract_article(path)
    published = metadata.get(slug)

    date = published["date"] if published else "2017-10-31T21:28:43Z"
    if published:
        title = published["title"] or title

    frontmatter = [
        "+++",
        f"title = {toml_string(title)}",
        'type = "blog"',
        f"date = {date}",
    ]
    if summaries.get(slug):
        frontmatter.append(f"description = {toml_string(summaries[slug])}")
    if image:
        frontmatter.append(f"image = {toml_string(image)}")
    if tags.get(slug):
        frontmatter.append(f"tags = {toml_string(sorted(tags[slug]))}")
    if categories.get(slug):
        frontmatter.append(f"categories = {toml_string(sorted(categories[slug]))}")
    if "katex" in source.lower():
        frontmatter.append("math = true")
    if re.search(r"(?:d3\.v\d|d3@\d|\bd3\.)", source):
        frontmatter.append("d3 = true")
    if "twitter-tweet" in source:
        frontmatter.append("twitter = true")
    if not published:
        # Keep old experiment URLs alive without putting them in the new archive.
        frontmatter.append("unlisted = true")
    frontmatter.append("+++")

    destination = CONTENT / "blogs" / f"{slug}.md"
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text("\n".join(frontmatter) + "\n\n" + body + "\n", encoding="utf-8")


def write_about() -> None:
    title, image, body = extract_article(ROOT / "su-questo-sito" / "index.html")
    lines = [
        "+++",
        f"title = {toml_string(title)}",
        "date = 2017-10-31T21:28:43Z",
        f"image = {toml_string(image)}",
        "hideDate = true",
        "+++",
        body,
        "",
    ]
    (CONTENT / "su-questo-sito.md").write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    CONTENT.mkdir(exist_ok=True)
    metadata = rss_metadata()
    summaries = listing_summaries()
    tags = taxonomy_memberships("tags")
    categories = taxonomy_memberships("categories")

    for path in sorted((ROOT / "blogs").glob("*/index.html")):
        write_article(path, metadata, summaries, tags, categories)

    write_about()
    print(f"Recovered {len(list((CONTENT / 'blogs').glob('*.md')))} blog pages and the about page")


if __name__ == "__main__":
    main()
