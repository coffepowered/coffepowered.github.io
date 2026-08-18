+++
title = "A (reasonably) complex radar chart"
type = "blog"
date = 2022-03-11T21:28:43-05:00
description = "Displaying multivariate data in Python: radar chart caveats, scaling, and a custom matplotlib recipe."
image = "/img/blogs/radar-chart.png"
tags = ["python", "data-viz", "matplotlib"]
categories = ["gist", "python"]
twitter = true
+++

<p>A radar (or spider) chart is a convenient method of displaying multivariate data in a form of 2-dimensional chart.</p>
<p>When I say convenient, I mean it is particularly well-accepted by people and gives a good intuition when comparing different items/subjects.</p>
<p>Think about comparing 2 (or more) football players in terms of dribbling, running speed, shots and pressure. Even with only four variables bar plot would become cumbersome to deal with and not immediate to perceive. That&rsquo;s why they are particularly <a href="https://statsbomb.com/articles/soccer/revisiting-radars/">popular in sports analytics</a>.</p>
<h3 id="incoveniences">Incoveniences</h3>
<p>However, radar charts come with their own incoveniences:</p>
<ul>
<li>eye tends to focus on area, so order of the variables must be chosen widely (see below)</li>
<li>it&rsquo;s extremely simple to <strong>perceive</strong> differences, but harder to examinate trade-offs and understand what they mean</li>
<li><a href="https://en.wikipedia.org/wiki/Radar_chart#cite_note-NIST03-5">and more minor stuff</a>.</li>
</ul>
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A reminder, blatantly plagiarized from <a href="https://twitter.com/stat_sam?ref_src=twsrc%5Etfw">@stat_sam</a>, of why radar plots are misleading. Eye focuses on area, not length. <a href="https://t.co/Dk3gcn1GD1">pic.twitter.com/Dk3gcn1GD1</a></p>&mdash; Luke Bornn (@LukeBornn) <a href="https://twitter.com/LukeBornn/status/864856335191388162?ref_src=twsrc%5Etfw">May 17, 2017</a></blockquote>



<p>Oh and most importantly to this post, I found no &ldquo;satisfactory&rdquo; implementation of radar charts for Python.</p>
<h3 id="python-implementations">Python implementations</h3>
<p>Actually, mplsoccer (a library for soccer viz) has pretty good one, but that&rsquo;s way more complicated than I needed (and requires a <a href="https://github.com/andrewRowlinson/mplsoccer/tree/master/examples">new dependency</a>, which I cannot introduce).</p>
<p>Good results may be achieved with <a href="https://matplotlib.org/3.5.1/gallery/specialty_plots/radar_chart.html">matplotlib</a>, but essential features, like the ability to represent quantities on different scales, are to be manually implemented.</p>
<p><a href="https://datascience.stackexchange.com/questions/6084/how-do-i-create-a-complex-radar-chart">Stackexchange</a> came to the rescue once again. Unfortunately, that did not work perfectly out-of-the-box: I suspect that is due to incompatibility with matplotlib version (running on <code>3.3.4</code>).</p>
<p>You may find the modified gist below, which keeps the essential set of functionalities and fixes a couple of issues which made the result poorly readable:</p>
<ul>
<li>added method <code>adjust_labels()</code>: labels are fixed (and readable&hellip;)</li>
<li>ordering of grid labels is fixed</li>
</ul>
<h3 id="get-full-gist">Get full gist</h3>
<script src="https://gist.github.com/coffepowered/2e3829e2211219ea8736d421b05382bd.js"></script>
