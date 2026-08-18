+++
title = "Short notes on namedtuples, NamedTuples and Data classes"
type = "blog"
date = 2021-01-11T21:28:43-05:00
description = "Datatypes for... data"
image = "/img/blogs/namedtuples-pexels-pixabay.jpg"
tags = ["python", "data-structures", "best-practices"]
categories = ["python"]
+++

<p>Both dataclasses and tuples are based on the <a href="https://www.attrs.org/en/stable/">attrs</a> project, the one Python Library <a href="https://glyph.twistedmatrix.com/2016/08/attrs.html">everybody needs</a> and are fast object types (<a href="https://refactoring.guru/design-patterns/factory-method">factory methods</a>) designed to simplify and reduce code.</p>
<h2 id="namedtuple-and-namedtuple">namedtuple and NamedTuple</h2>
<ul>
<li>Both <code>immutable</code></li>
<li>Tuple-based (hence fast) but far <a href="https://www.attrs.org/en/stable/why.html">better</a> than tuples</li>
<li><strong>NamedTuple</strong> is the typed version of <strong>namedtuple</strong></li>
<li>immutable, iterable, hashable, unpackable</li>
<li>backward-compatible with <strong>tuple</strong> (e.g you can access a namedtuple by index)</li>
<li>default arguments supported from Python 3.7+</li>
<li>fast! C-based</li>
<li>example <sup id="fnref:1"><a href="#fn:1" class="footnote-ref" role="doc-noteref">1</a></sup></li>
</ul>
<div class="highlight"><pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-py" data-lang="py"><span style="display:flex;"><span>Point <span style="color:#f92672">=</span> namedtuple(<span style="color:#e6db74">&#39;Point&#39;</span>, <span style="color:#e6db74">&#39;x y&#39;</span>)
</span></span><span style="display:flex;"><span>pt1 <span style="color:#f92672">=</span> Point(<span style="color:#ae81ff">1.0</span>, <span style="color:#ae81ff">5.0</span>)
</span></span><span style="display:flex;"><span>pt2 <span style="color:#f92672">=</span> Point(<span style="color:#ae81ff">2.5</span>, <span style="color:#ae81ff">1.5</span>)
</span></span><span style="display:flex;"><span>
</span></span><span style="display:flex;"><span><span style="color:#f92672">from</span> math <span style="color:#f92672">import</span> sqrt
</span></span><span style="display:flex;"><span><span style="color:#75715e"># use index referencing</span>
</span></span><span style="display:flex;"><span>line_length <span style="color:#f92672">=</span> sqrt((pt1[<span style="color:#ae81ff">0</span>]<span style="color:#f92672">-</span>pt2[<span style="color:#ae81ff">0</span>])<span style="color:#f92672">**</span><span style="color:#ae81ff">2</span> <span style="color:#f92672">+</span> (pt1[<span style="color:#ae81ff">1</span>]<span style="color:#f92672">-</span>pt2[<span style="color:#ae81ff">1</span>])<span style="color:#f92672">**</span><span style="color:#ae81ff">2</span>)
</span></span><span style="display:flex;"><span> <span style="color:#75715e"># use tuple unpacking</span>
</span></span><span style="display:flex;"><span>x1, y1 <span style="color:#f92672">=</span> pt1
</span></span></code></pre></div><h2 id="dataclasses">Dataclasses</h2>
<ul>
<li>Are <code>mutable</code></li>
<li><a href="https://docs.python.org/3/library/dataclasses.html">post-init processing</a> can be used to create fields depending on other fields or even to perform input validation<sup id="fnref:2"><a href="#fn:2" class="footnote-ref" role="doc-noteref">2</a></sup></li>
<li>all implementation is written in Python, so <a href="https://stackoverflow.com/questions/51671699/data-classes-vs-typing-namedtuple-primary-use-cases">slower</a> wrt tuple-based data types</li>
<li>Validation of types at runtime not supported natively (or <a href="https://stackoverflow.com/questions/50563546/validating-detailed-types-in-python-dataclasses">cumbersome</a>) but easy with decorator <a href="https://pypi.org/project/enforce-typing/">@enforce_typing</a></li>
<li>from Python 3.7</li>
<li>are just regular Classes (e.g. inheritance) withot writing boilerplate code</li>
<li><a href="https://www.python.org/dev/peps/pep-0557/#why-not-just-use-namedtuple">inappropriate</a> when API compatibility with tuples or dicts is requested</li>
<li><a href="https://www.youtube.com/watch?v=T-TwcmT6Rcw&amp;t=1390">bonus</a> PyCon talk, if you have time</li>
<li>example<sup id="fnref:3"><a href="#fn:3" class="footnote-ref" role="doc-noteref">3</a></sup></li>
</ul>
<div class="highlight"><pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-py" data-lang="py"><span style="display:flex;"><span><span style="color:#f92672">from</span> dataclasses <span style="color:#f92672">import</span> dataclass
</span></span><span style="display:flex;"><span>
</span></span><span style="display:flex;"><span><span style="color:#a6e22e">@dataclass</span>(unsafe_hash<span style="color:#f92672">=</span><span style="color:#66d9ef">True</span>)
</span></span><span style="display:flex;"><span><span style="color:#66d9ef">class</span> <span style="color:#a6e22e">InventoryItem</span>:
</span></span><span style="display:flex;"><span>    <span style="color:#e6db74">&#39;&#39;&#39;Class for keeping track of an item in inventory.&#39;&#39;&#39;</span>
</span></span><span style="display:flex;"><span>    name: str
</span></span><span style="display:flex;"><span>    unit_price: float
</span></span><span style="display:flex;"><span>    quantity_on_hand: int <span style="color:#f92672">=</span> <span style="color:#ae81ff">0</span>
</span></span><span style="display:flex;"><span>
</span></span><span style="display:flex;"><span>    <span style="color:#66d9ef">def</span> <span style="color:#a6e22e">total_cost</span>(self) <span style="color:#f92672">-&gt;</span> float:
</span></span><span style="display:flex;"><span>        <span style="color:#66d9ef">return</span> self<span style="color:#f92672">.</span>unit_price <span style="color:#f92672">*</span> self<span style="color:#f92672">.</span>quantity_on_hand
</span></span></code></pre></div><h2 id="other-fancy-data-types-not-from-the-stdlib">Other fancy data types (not from the stdlib)</h2>
<ul>
<li><a href="https://pydantic-docs.helpmanual.io/">pydantic</a>: enforces type hints at runtime providing user-readable errors when data is invalid. Seems relatively popular.</li>
</ul>
<div class="highlight"><pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-py" data-lang="py"><span style="display:flex;"><span><span style="color:#75715e"># sample input val via Regexp</span>
</span></span><span style="display:flex;"><span><span style="color:#f92672">from</span> dataclasses <span style="color:#f92672">import</span> dataclass
</span></span><span style="display:flex;"><span><span style="color:#f92672">import</span> re
</span></span><span style="display:flex;"><span><span style="color:#a6e22e">@dataclass</span>
</span></span><span style="display:flex;"><span><span style="color:#66d9ef">class</span> <span style="color:#a6e22e">Widget</span>:
</span></span><span style="display:flex;"><span>    id: int
</span></span><span style="display:flex;"><span>    <span style="color:#66d9ef">def</span> <span style="color:#a6e22e">__post_init__</span>(self):
</span></span><span style="display:flex;"><span>        id_condition <span style="color:#f92672">=</span> re<span style="color:#f92672">.</span><span style="color:#66d9ef">match</span>(<span style="color:#e6db74">r</span><span style="color:#e6db74">&#34;[0-9]</span><span style="color:#e6db74">{4}</span><span style="color:#e6db74">&#34;</span>, str(self<span style="color:#f92672">.</span>id))
</span></span><span style="display:flex;"><span>        <span style="color:#66d9ef">if</span> <span style="color:#f92672">not</span> id_condition:
</span></span><span style="display:flex;"><span>            print(<span style="color:#e6db74">f</span><span style="color:#e6db74">&#34;</span><span style="color:#e6db74">{</span>self<span style="color:#f92672">.</span>id<span style="color:#e6db74">}</span><span style="color:#e6db74"> doesn&#39;t follow pattern [0-9]</span><span style="color:#ae81ff">&#123;&#123;</span><span style="color:#e6db74">4</span><span style="color:#ae81ff">&#125;&#125;</span><span style="color:#e6db74">&#34;</span>)
</span></span><span style="display:flex;"><span>            <span style="color:#66d9ef">raise</span> CustomException
</span></span></code></pre></div><div class="footnotes" role="doc-endnotes">
<hr>
<ol>
<li id="fn:1">
<p><a href="https://stackoverflow.com/questions/2970608/what-are-named-tuples-in-python">brief</a> explanation on stackoverlow&#160;<a href="#fnref:1" class="footnote-backref" role="doc-backlink">&#x21a9;&#xfe0e;</a></p>
</li>
<li id="fn:2">
<p>(<a href="https://www.reddit.com/r/learnpython/comments/bopmu8/use_input_validation_with_dataclasses/">source</a>)&#160;<a href="#fnref:2" class="footnote-backref" role="doc-backlink">&#x21a9;&#xfe0e;</a></p>
</li>
<li id="fn:3">
<p><a href="https://stackoverflow.com/questions/47955263/what-are-data-classes-and-how-are-they-different-from-common-classes">source</a>&#160;<a href="#fnref:3" class="footnote-backref" role="doc-backlink">&#x21a9;&#xfe0e;</a></p>
</li>
</ol>
</div>
