+++
title = "Bootstrapping essentials in python"
type = "blog"
date = 2017-10-31T21:28:43Z
image = "/img/blogs/pic10.jpg"
math = true
unlisted = true
+++

<ul>
<li><a href="https://en.wikipedia.org/wiki/Sampling_distribution">https://en.wikipedia.org/wiki/Sampling_distribution</a>
Bootstrapping helps estimating confidence intervals for any static of interest directly from the data sample. In this post we will show how to do your first bootstrap and -more importantly- how to get a feeling of the whole process.</li>
</ul>
<h2 id="well-known-things-first-confidence-intervals-for-the-mean">Well-known things first: confidence intervals for the mean</h2>
<p>Let&rsquo;s say you are presented with some data about people heights and want to know the mean height for male and females at 95% confidence level.</p>
<p>The central limit theorem tells us that the mean $^{x}$ of a random variable &ldquo;height&rdquo; is normally distributed even if the random variable itself is not normally distributed and allows us to express the confidence interval (CI) as:</p>
<p>$$[^{x}-1.96 \frac{s}{\sqrt(n)}, ^{x}+1.96 \frac{s}{\sqrt(n)}]$$.</p>
<p>Where $s$ is the population standard deviation and $n$ the size of your sample<sup id="fnref:1"><a href="#fn:1" class="footnote-ref" role="doc-noteref">1</a></sup>. Where does the &lsquo;1.96&rsquo; come from? That number is a function of the desired <a href="https://openstax.org/books/introductory-business-statistics/pages/8-1-a-confidence-interval-for-a-population-standard-deviation-known-or-large-sample-size">confidence level</a> (95% in this case), which should be chosen before the analysis.</p>
<p>Basically we are recalling here that -if you were to sample multiple times from the population-, you would estimate a mean that falls within <em>that</em> CI 95% of the time. The width of such interval is determined by the desired confidence level, by the number $n$ of samples drawn and by the standard deviation of your data $s$.</p>
<p>This also helps you in estimating the size of $n$ necessary to achieve a given level of confidence: collecting 100 times more samples gives you a CI 10 times narrower.</p>
<h2 id="confidence-interval-for-child-heights">Confidence interval for child heights</h2>
<p>&hellip;</p>
<h2 id="naively-bootstrapping-cis-percentile-method">Naively bootstrapping CIs (percentile method)</h2>
<p>&hellip;</p>
<h2 id="bootstrapping-a-better-way-empirical-method">Bootstrapping: a better way (empirical method)</h2>
<p>..</p>
<h2 id="when-the-clt-does-not-help">When the CLT does not help</h2>
<p>..</p>
<h2 id="notes">Notes</h2>
<ul>
<li>It the difference in the child&rsquo;s means statistically significant?</li>
</ul>
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
<p>let&rsquo;s say $n&gt;30$, more <a href="https://openstax.org/books/introductory-business-statistics/pages/8-2-a-confidence-interval-for-a-population-standard-deviation-unknown-small-sample-case">here</a>
to know more.&#160;<a href="#fnref:1" class="footnote-backref" role="doc-backlink">&#x21a9;&#xfe0e;</a></p>
</li>
</ol>
</div>
