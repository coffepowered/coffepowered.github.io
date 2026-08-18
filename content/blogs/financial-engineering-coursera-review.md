+++
title = "Financial engineering and Risk management (Coursera)"
type = "blog"
date = 2017-10-31T21:28:43Z
image = "/img/blogs/pic07.jpg"
tags = ["financial-engineering"]
unlisted = true
+++

<h2 id="a-somewhat-detailed-review-mixed-with-notes-spoiler-alert">A somewhat detailed review mixed with notes (spoiler alert)</h2>
<p>I am writing this review since in my <a href="https://www.google.com/search?client=firefox-b-d&amp;q=financial+engineering+coursera+review">google bubble</a> a find a mostly unsatisfying results and when I started the course I&rsquo;d have loved having more first-hand experience knowing what to expect for the course<sup id="fnref:1"><a href="#fn:1" class="footnote-ref" role="doc-noteref">1</a></sup>.</p>
<p>Online courses are targeted at wide and eterogeneous audiences, so consider this a totally subjective review as your background and sensibility may vary. A very short intro about me, so that you can try putting yourself into my shoes and weight my words: I am not a finance, economics or math graduate. I am an engineer and attended the course both for fun and professional development (my employer supports us with Coursera Plus suscription).</p>
<p>Moreover, I do Machine Learning for living, and was searching for a foundational course on Financial Enginering topics to widen my horizons.</p>
<p>The review is divided into sections grouping one or more weeks together and has been written progressively while attending at the course.</p>
<h2 id="weeks-2-3">Weeks 2-3</h2>
<p>Week 1 is there just to warm-up, so nothing..</p>
<h2 id="week-4">Week 4</h2>
<p>The thing gets juicy here. The <strong>multi-period binomial model</strong> is
a satisfying (from my learner perspective) extension of the single-period one: the theory is surprising, results are of practical interest and the instructor does a really good job at explaining it and at showing numerical examples.</p>
<p>As a non-finance guy you may still be surprised by the fact that option price does not depend on the probability on an upmove but only on $R, d$ (interest rates, ****). There is an excel(-ent) sheet provided that is very helpful in understanding the mechanics of the model.</p>
<p>Lectures on dividends, expected price for forward and futures are fast and finally give a sense of accomplishement since the theoretical framework studied so far accomodates them easily.</p>
<p>Once again, on a lerner perspective, reinforcing the learning with quizzes inside the lectures would have been provided a superior learning experience. I have to say however that this module is better than the previous ones in this regards, as the exercises by Scott are really focused on the topic and relevant for the final quiz.</p>
<p>I was expecting for a <strong>large</strong> lecture on the Black Scholes model, but the author decided to skip on most of the theory and give info about the calibration method. I guess the choice is questionable in general, but I found it particularly appropriate for an online course whose objective is getting the framework to understand and expand things. If you really have to do with options, you should plan to devote additional time to theoretical details and the concept of implied volatility.</p>
<p>Rivedere questo:</p>
<blockquote>
<p>Given the Underlying price at initial time $$S_0$$, interest rate $$r$$, underlying dividend $$c$$, option expiration $$T$$ and strike $$K$$, a model for the option price $$C_0$$ can be written as $$C_0 = C_0(S_0,r,c,T,K,\sigma)$$, where the last argument is the <em>implied volatility</em>. If the option is liquid, and $C_0$ is known, such model is used to determined the <em>implied volatility</em>, otherwise can be used to hedge options or price illiquid ones.</p>
</blockquote>
<p>All in all, no important thing is left unmentioned (Dynamic Portfolio Replication, Law of Iterated expectations etc.): some things are covered, some are left on the appendix, some are to be covered on your own, if you really want to.</p>
<div class="footnotes" role="doc-endnotes">
<hr>
<ol>
<li id="fn:1">
<p>e.g. <a href="http://theartofchanging.blogspot.com/2013/05/coursera-review-financial-engineering.html">this</a> is as far as I could get&#160;<a href="#fnref:1" class="footnote-backref" role="doc-backlink">&#x21a9;&#xfe0e;</a></p>
</li>
</ol>
</div>
