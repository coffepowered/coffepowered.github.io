+++
title = "1 - Movie sentiment review"
type = "blog"
date = 2017-10-31T21:28:43Z
image = "/img/blogs/pic10.jpg"
categories = ["project"]
math = true
unlisted = true
+++

<h2 id="intro-feel-free-to-skip-this">Intro (feel free to skip this)</h2>
<p>I feel like we are living in the golden age of Natural Language Processing (NLP). The <a href="https://ruder.io/a-review-of-the-recent-history-of-nlp/index.html#20018multitasklearning">last 20 years</a> have seen the rise of Neural Language models, the creation and subsequent vast application of Word Embeddings and innovative Network architectures for Sequence Modeling and, last but not least, transformers.</p>
<p>If you did not get the detail of the previous paragraph, please bear with me. The motivation of this post is showing how a non-specialist (like me) can <em>today</em> build effective software that is able to &ldquo;use&rdquo; or interpret text written by humans. To our grandparents, <a href="https://en.wikipedia.org/wiki/Georgetown%E2%80%93IBM_experiment">google would look like magic</a>.</p>
<p>Here, I just scratch the surface of NLP models, by commenting <a href="https://colab.research.google.com/drive/19r9OS9SoBJMXM9GqAXgu6UEZSLwAqoM1?usp=sharing">my colab notebook which demostrates</a> how to build a sentiment movie review app from the ground up exploiting Keras&rsquo; TextVectorization.</p>
<h2 id="code">Code</h2>
<div class="highlight"><pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-py" data-lang="py"><span style="display:flex;"><span><span style="color:#66d9ef">for</span> i <span style="color:#f92672">in</span> range(<span style="color:#ae81ff">3</span>):
</span></span><span style="display:flex;"><span>    print(i)
</span></span><span style="display:flex;"><span>
</span></span><span style="display:flex;"><span>
</span></span><span style="display:flex;"><span>
</span></span><span style="display:flex;"><span>
</span></span><span style="display:flex;"><span>print(<span style="color:#e6db74">&#34;hello&#34;</span>)
</span></span></code></pre></div><h3 id="code-below">Code below</h3>

<details>
    <summary>CLICK ME &hellip; code below</summary>
    <p>This text will be hidden</p>
<h2 id="yes-even-hidden-code-blocks-seems-like-bold-title-dont-work-here-too">yes, even hidden code blocks! (seems like bold title dont work here too)</h2>
<div class="highlight"><pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-python" data-lang="python"><span style="display:flex;"><span>print(<span style="color:#e6db74">&#34;hello world!&#34;</span>)
</span></span></code></pre></div>
  </details>
<h2 id="footnotes-how-to">Footnotes how to</h2>
<p>$$\int_{a}^{b} x^2 dx$$</p>
<p>Here&rsquo;s a simple footnote,<sup id="fnref:1"><a href="#fn:1" class="footnote-ref" role="doc-noteref">1</a></sup> and here&rsquo;s a longer one.<sup id="fnref:2"><a href="#fn:2" class="footnote-ref" role="doc-noteref">2</a></sup>.
Here another one with a mismatched numbering <sup id="fnref:3"><a href="#fn:3" class="footnote-ref" role="doc-noteref">3</a></sup></p>
<h3 id="inline-eqn">Inline eqn</h3>
<p>The following is an inline equation $$\int x^3 dx$$</p>
<h3 id="other-publications">Other publications</h3>
<ul>
<li><a href="https://studios.disneyresearch.com/2017/08/06/dynamic-word-embeddings/">Dynamic Word Embeddings</a></li>
</ul>
<div class="footnotes" role="doc-endnotes">
<hr>
<ol>
<li id="fn:1">
<p>This is the first footnote.&#160;<a href="#fnref:1" class="footnote-backref" role="doc-backlink">&#x21a9;&#xfe0e;</a></p>
</li>
<li id="fn:2">
<p>Here&rsquo;s one with multiple paragraphs and code.</p>
<p>Indent paragraphs to include them in the footnote.</p>
<p><code>{ my code }</code></p>
<p>Add as many paragraphs as you like.&#160;<a href="#fnref:2" class="footnote-backref" role="doc-backlink">&#x21a9;&#xfe0e;</a></p>
</li>
<li id="fn:3">
<p>This is a randome one&#160;<a href="#fnref:3" class="footnote-backref" role="doc-backlink">&#x21a9;&#xfe0e;</a></p>
</li>
</ol>
</div>
