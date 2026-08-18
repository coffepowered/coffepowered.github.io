+++
title = "Test & Feature Showcase: All Systems Operational"
date = 2026-08-18T11:00:00+02:00
description = "Comprehensive test blog post verifying all ported website features: X/Twitter embeds, D3 interactive plots, KaTeX math typesetting, syntax highlighting, footnotes, tables, and media."
image = "/img/blogs/INTERNAL-code-samples.png"
tags = ["test", "viz", "math", "python", "experiment"]
categories = ["showcase", "meta"]
math = true
d3 = true
twitter = true
type = "blog"
+++

This is a comprehensive test post created to verify that all editorial features, data visualizations, mathematical typography, interactive widgets, and integrations work seamlessly after porting the site to Hugo.

## Feature Verification Checklist

- [x] **KaTeX Mathematical Typesetting** (inline & display equations, matrices, Greek symbols)
- [x] **D3.js Data Visualizations** (dynamic SVG generation, animations, tooltips)
- [x] **X / Twitter Embeds** (Hugo shortcode & native blockquotes)
- [x] **Code Highlighting & Fences** (Python, JavaScript, Shell, SQL with line numbering)
- [x] **Collapsible Details Blocks** (`<details>` & `<summary>`)
- [x] **Footnotes** (single, multi-paragraph, with code references)
- [x] **Markdown Tables** (formatted with text & numeric alignments)
- [x] **Blockquotes & Citations**
- [x] **Media & Images** (cover image, inline responsive figures with captions)
- [x] **Static Asset Links** (CSV / data file downloads)
- [x] **Taxonomies & Meta** (tags, categories, date, reading time)
- [x] **Post Navigation & Disqus Comments**

---

## 1. Mathematical Typesetting (KaTeX)

Mathematical equations are rendered client-side using KaTeX with `math = true` enabled in the front matter.

### Inline Formulas
We can express the standard sigmoid activation function as $\sigma(z) = \frac{1}{1 + e^{-z}}$, the Gaussian density with mean $\mu$ and variance $\sigma^2$ as $\mathcal{N}(x \mid \mu, \sigma^2)$, and algorithmic time complexity such as $\mathcal{O}(N \log N)$.

### Block Display Equations

The normal distribution integral (Euler-Poisson integral):

$$\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}$$

The Mean Squared Error (MSE) loss with $L_2$ regularization:

$$\mathcal{L}_{\text{total}}(\mathbf{w}) = \frac{1}{N} \sum_{i=1}^{N} \left( y_i - \mathbf{w}^T \mathbf{x}_i \right)^2 + \lambda \|\mathbf{w}\|_2^2$$

Covariance Matrix formulation:

$$\mathbf{\Sigma} = \begin{pmatrix} \operatorname{Var}(X_1) & \operatorname{Cov}(X_1, X_2) \\ \operatorname{Cov}(X_2, X_1) & \operatorname{Var}(X_2) \end{pmatrix} = \begin{pmatrix} \sigma_1^2 & \rho \sigma_1 \sigma_2 \\ \rho \sigma_1 \sigma_2 & \sigma_2^2 \end{pmatrix}$$

---

## 2. Interactive Plots & Visualizations (D3.js)

With `d3 = true` enabled, D3.js v7 is automatically injected into the page header, allowing direct SVG manipulation and reactive charts.

Here is a live, interactive bar chart rendered directly into the page:

<div id="test-d3-chart" style="margin: 1.5rem 0; padding: 1rem; background: var(--panel-color); border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
  <h4 style="margin-top: 0; color: var(--heading-color); font-size: 1.05rem;">📊 Daily Processing Throughput (Records / sec)</h4>
  <div id="d3-canvas"></div>
  <small style="color: var(--muted-color); display: block; margin-top: 0.5rem;">Hover over bars to inspect values.</small>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const dataset = [
    { day: "Mon", value: 1420 },
    { day: "Tue", value: 2180 },
    { day: "Wed", value: 1890 },
    { day: "Thu", value: 2750 },
    { day: "Fri", value: 3120 },
    { day: "Sat", value: 980 },
    { day: "Sun", value: 820 }
  ];

  const margin = { top: 20, right: 20, bottom: 40, left: 55 };
  const width = Math.min(680, document.getElementById("test-d3-chart").clientWidth - 32) - margin.left - margin.right;
  const height = 240 - margin.top - margin.bottom;

  const svg = d3.select("#d3-canvas")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleBand()
    .range([0, width])
    .domain(dataset.map(d => d.day))
    .padding(0.3);

  const y = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d.value) * 1.15])
    .range([height, 0]);

  // X Axis
  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .attr("color", "var(--muted-color)")
    .style("font-size", "12px");

  // Y Axis
  svg.append("g")
    .call(d3.axisLeft(y).ticks(5))
    .attr("color", "var(--muted-color)")
    .style("font-size", "12px");

  // Bars
  svg.selectAll("rect.bar")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d.day))
    .attr("y", d => y(d.value))
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d.value))
    .attr("fill", "var(--tag-color)")
    .attr("rx", 4)
    .style("cursor", "pointer")
    .style("transition", "fill 0.2s ease")
    .on("mouseover", function(event, d) {
      d3.select(this).attr("fill", "var(--tag-hover-color)");
    })
    .on("mouseout", function() {
      d3.select(this).attr("fill", "var(--tag-color)");
    });

  // Value labels
  svg.selectAll("text.label")
    .data(dataset)
    .enter()
    .append("text")
    .attr("class", "label")
    .attr("x", d => x(d.day) + x.bandwidth() / 2)
    .attr("y", d => y(d.value) - 6)
    .attr("text-anchor", "middle")
    .attr("fill", "var(--text-color)")
    .style("font-size", "11px")
    .text(d => d.value);
});
</script>

---

## 3. X / Twitter Embeds

Twitter embeds can be included either with the custom `{{</* tweet user="..." id="..." */>}}` shortcode or using standard Twitter embed markup.

### Embedded Tweet via Hugo Shortcode

{{< tweet user="LukeBornn" id="864856335191388162" >}}

### Embedded Tweet via Standard Blockquote

<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">A reminder of why radar plots are misleading. Eye focuses on area, not length. <a href="https://t.co/Dk3gcn1GD1">pic.twitter.com/Dk3gcn1GD1</a></p>&mdash; Luke Bornn (@LukeBornn) <a href="https://twitter.com/LukeBornn/status/864856335191388162?ref_src=twsrc%5Etfw">May 17, 2017</a>
</blockquote>

---

## 4. Code Blocks & Syntax Highlighting

Code syntax highlighting uses the built-in Chroma highlighter styled with dark themes and line numbers.

### Python

```python
from dataclasses import dataclass
from typing import List, Optional
import pandas as pd

@dataclass
class ExperimentResult:
    run_id: str
    loss: float
    accuracy: float
    tags: List[str]
    notes: Optional[str] = None

def compute_summary(df: pd.DataFrame) -> pd.DataFrame:
    """Calculates aggregate metrics across experiment runs."""
    return (
        df.groupby("category")
        .agg(mean_loss=("loss", "mean"), max_acc=("accuracy", "max"))
        .sort_values(by="max_acc", ascending=False)
    )

# Execution test
print("Pipeline initialized successfully.")
```

### Modern JavaScript

```javascript
async function fetchMetrics(endpoint, options = {}) {
  try {
    const response = await fetch(endpoint, {
      headers: { "Content-Type": "application/json" },
      ...options
    });
    if (!response.ok) throw new Error(`HTTP Error ${response.status}`);
    return await response.json();
  } catch (err) {
    console.error("Failed to retrieve metrics:", err.message);
    return null;
  }
}
```

### SQL & Shell

```sql
SELECT 
    user_id,
    COUNT(order_id) AS total_orders,
    SUM(amount_eur) AS revenue,
    AVG(duration_mins) AS avg_session
FROM analytics.user_sessions
WHERE created_at >= '2026-01-01'
GROUP BY 1
HAVING total_orders > 5
ORDER BY revenue DESC
LIMIT 100;
```

```bash
# Build the Hugo site in production mode
hugo --minify --gc

# Start local development server with draft previews
hugo server --buildDrafts --disableFastRender
```

---

## 5. Collapsible Sections (`<details>` & `<summary>`)

<details>
  <summary><strong>🔍 Click to expand detailed debugging output</strong></summary>
  
  <p>Inside a collapsible block, standard Markdown elements continue to function smoothly:</p>

  ```json
  {
    "status": "success",
    "server": "hugo-0.165.0",
    "theme": "hugo-bearblog",
    "features_verified": ["math", "d3", "twitter", "code", "tables", "footnotes"]
  }
  ```

  Math formulas also render inside collapsible blocks: $\sum_{i=1}^n i = \frac{n(n+1)}{2}$.
</details>

---

## 6. Footnotes

Footnotes are fully supported[^1] with back-references to jump effortlessly back and forth[^2]. Even multi-paragraph footnotes containing formatted text and code blocks are handled cleanly[^3].

---

## 7. Data Tables

| Feature Area | Technology | Status | Integration Mode |
| :--- | :--- | :---: | ---: |
| **Maths** | KaTeX 0.18.4 | ✅ Working | `math = true` (CDN) |
| **Plots & Charts** | D3.js v7.9.0 | ✅ Working | `d3 = true` (CDN) |
| **Social Embeds** | X / Twitter Widgets | ✅ Working | `twitter = true` / shortcode |
| **Code Syntax** | Chroma (`github-dark`) | ✅ Working | Hugo native markup |
| **Comments** | Disqus | ✅ Working | `disqusShortname` config |
| **Taxonomies** | Tags & Categories | ✅ Working | Hugo taxonomies |

---

## 8. Blockquotes & Formatting

> "Simplicity is prerequisite for reliability."
> — Edsger W. Dijkstra

> > Nested blockquotes are also properly indented and styled with muted border accents and clean typography.

Text styling checklist:
- **Bold text** and *italicized text*
- ~~Strikethrough text~~
- Inline code like `numpy.ndarray` and `d3.scaleLinear()`
- External links such as [Official Hugo Documentation](https://gohugo.io/)

---

## 9. Images & Visual Assets

### Inline Figure with Caption

<figure>
  <img src="/img/blogs/radar-chart.png" alt="Radar Chart Visualization Example" style="border-radius: 6px; width: 100%; max-height: 400px; object-fit: cover;">
  <figcaption style="font-size: 0.88rem; color: var(--muted-color); margin-top: 0.5rem; text-align: center;">Figure 1: Sample multivariate radar chart visualization from the archive.</figcaption>
</figure>

---

## 10. File Downloads & Static Asset Mounts

- 📥 [Download sample dataset (CSV)](/blogs/on-the-btc-energy-toll/data.csv)
- 📥 [Download sample dataset (Excel XLSX)](/blogs/on-the-btc-energy-toll/data.xlsx)

---

[^1]: This is the first verified footnote test.
[^2]: Second footnote reference verifying bidirectional navigation back to source.
[^3]: Multi-paragraph footnote:
    
    Here is a second paragraph within the footnote detailing execution context.
    
    `console.log("Footnote code block test passed");`
