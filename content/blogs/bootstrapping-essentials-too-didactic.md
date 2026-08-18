+++
title = "Bootstrapping essentials in python"
type = "blog"
date = 2017-10-31T21:28:43Z
image = "/img/blogs/pic10.jpg"
math = true
unlisted = true
+++

<p>I am not a statistician by training<sup id="fnref:1"><a href="#fn:1" class="footnote-ref" role="doc-noteref">1</a></sup> but rather and engineer appreciating statistics and enjoying building data products. No surprise something as practical as <em>bootstrapping</em> fascinates me. Bootstrapping is a statistical technique that helps estimating the uncertainty associated to any population statistic of interest (mean, median&hellip;).</p>
<p>So, what can bootstrapping do for you? It allows to determine confidence interval in a a very general way. If you need deep concetration to describe what a &ldquo;confidence interval&rdquo;<sup id="fnref:2"><a href="#fn:2" class="footnote-ref" role="doc-noteref">2</a></sup> is, keep reading on: knowing bootstrapping also improves the grasp of this concept.</p>
<p>What bootstrapping can&rsquo;t do is improving your point estimate of the statistic. Let&rsquo;s suppose you need to estimate the median of a population and you have 101 datapoints at hand. The median point estimate is obtained by ordering your data -ascending for instance- and get the 50th item in the list. By using bootstrapping, you can supplement your point estimate with uncertainties statement. Your number won&rsquo;t be $^{x}$ anymore but somwhere between $[^{x}-s_1, ^{x}+s_1]$ with a given confidence level $c$, say 95%<sup id="fnref:3"><a href="#fn:3" class="footnote-ref" role="doc-noteref">3</a></sup>.</p>
<h2 id="a-motivating-example">A motivating example</h2>
<p>Mario pushed his model to production yesterday &hellip;.</p>
<h2 id="the-core-idea">The core idea</h2>
<p>The bootstrap core idea is that the we can estimate the dispersion a given statistic by running multiple experiments on a data sample.</p>
<h2 id="good-stuff">Good stuff</h2>
<ol>
<li><a href="https://speakerdeck.com/jakevdp/statistics-for-hackers?slide=138">https://speakerdeck.com/jakevdp/statistics-for-hackers?slide=138</a></li>
<li><a href="https://yanirseroussi.com/2019/01/08/hackers-beware-bootstrap-sampling-may-be-harmful/">https://yanirseroussi.com/2019/01/08/hackers-beware-bootstrap-sampling-may-be-harmful/</a></li>
<li><a href="https://yanirseroussi.com/2020/08/24/many-is-not-enough-counting-simulations-to-bootstrap-the-right-way/">https://yanirseroussi.com/2020/08/24/many-is-not-enough-counting-simulations-to-bootstrap-the-right-way/</a></li>
<li><a href="https://erikbern.com/2018/10/08/the-hackers-guide-to-uncertainty-estimates.html">https://erikbern.com/2018/10/08/the-hackers-guide-to-uncertainty-estimates.html</a></li>
</ol>
<div class="footnotes" role="doc-endnotes">
<hr>
<ol>
<li id="fn:1">
<p>is it possible to become one?&#160;<a href="#fnref:1" class="footnote-backref" role="doc-backlink">&#x21a9;&#xfe0e;</a></p>
</li>
<li id="fn:2">
<p>I am highly confident almost everybody struggles with this&#160;<a href="#fnref:2" class="footnote-backref" role="doc-backlink">&#x21a9;&#xfe0e;</a></p>
</li>
<li id="fn:3">
<p>why choosing 95% confidence? In common practice 95% and 90% and 67% are often used, but this is just conventional. Use whatever is most appropriate to your application, just don&rsquo;t tune it after looking at the results. Also notice that the confidence level $c$ is the complimentary of the significance level $\alpha=1-c$&#160;<a href="#fnref:3" class="footnote-backref" role="doc-backlink">&#x21a9;&#xfe0e;</a></p>
</li>
</ol>
</div>
