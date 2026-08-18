+++
title = "CODE EXAMPLES"
type = "blog"
date = 2017-10-31T21:28:43-05:00
image = "/img/blogs/INTERNAL-code-samples.png"
d3 = true
unlisted = true
+++

<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
<h2 id="title-2">Title 2</h2>
<p>Ciao ciao ciao come stai? Ciao ciao ciao come stai?</p>
<h2 id="a-sample-code-block">A sample code block</h2>
<div class="highlight"><div style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;display:grid;">
<table style="border-spacing:0;padding:0;margin:0;border:0;"><tr><td style="vertical-align:top;padding:0;margin:0;border:0;">
<pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;display:grid;"><code><span style="white-space:pre;-webkit-user-select:none;user-select:none;margin-right:0.4em;padding:0 0.4em 0 0.4em;color:#7f7f7f">199
</span><span style="background-color:#3c3d38"><span style="white-space:pre;-webkit-user-select:none;user-select:none;margin-right:0.4em;padding:0 0.4em 0 0.4em;color:#7f7f7f">200
</span></span><span style="background-color:#3c3d38"><span style="white-space:pre;-webkit-user-select:none;user-select:none;margin-right:0.4em;padding:0 0.4em 0 0.4em;color:#7f7f7f">201
</span></span><span style="background-color:#3c3d38"><span style="white-space:pre;-webkit-user-select:none;user-select:none;margin-right:0.4em;padding:0 0.4em 0 0.4em;color:#7f7f7f">202
</span></span><span style="background-color:#3c3d38"><span style="white-space:pre;-webkit-user-select:none;user-select:none;margin-right:0.4em;padding:0 0.4em 0 0.4em;color:#7f7f7f">203
</span></span><span style="white-space:pre;-webkit-user-select:none;user-select:none;margin-right:0.4em;padding:0 0.4em 0 0.4em;color:#7f7f7f">204
</span><span style="white-space:pre;-webkit-user-select:none;user-select:none;margin-right:0.4em;padding:0 0.4em 0 0.4em;color:#7f7f7f">205
</span><span style="background-color:#3c3d38"><span style="white-space:pre;-webkit-user-select:none;user-select:none;margin-right:0.4em;padding:0 0.4em 0 0.4em;color:#7f7f7f">206
</span></span><span style="white-space:pre;-webkit-user-select:none;user-select:none;margin-right:0.4em;padding:0 0.4em 0 0.4em;color:#7f7f7f">207
</span></code></pre></td>
<td style="vertical-align:top;padding:0;margin:0;border:0;;width:100%">
<pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;display:grid;"><code class="language-py" data-lang="py"><span style="display:flex;"><span><span style="color:#75715e"># ... code</span>
</span></span><span style="display:flex; background-color:#3c3d38"><span><span style="color:#66d9ef">for</span> i <span style="color:#f92672">in</span> range(<span style="color:#ae81ff">1</span>,<span style="color:#ae81ff">5</span>):
</span></span><span style="display:flex; background-color:#3c3d38"><span>    print(i)
</span></span><span style="display:flex; background-color:#3c3d38"><span>
</span></span><span style="display:flex; background-color:#3c3d38"><span>logger<span style="color:#f92672">.</span>log(<span style="color:#e6db74">&#34;Writing in python&#34;</span>)
</span></span><span style="display:flex;"><span>df <span style="color:#f92672">=</span> pd<span style="color:#f92672">.</span>DataFrame
</span></span><span style="display:flex;"><span>logger<span style="color:#f92672">.</span>log(<span style="color:#e6db74">&#34;Writing in python&#34;</span>)
</span></span><span style="display:flex; background-color:#3c3d38"><span>
</span></span><span style="display:flex;"><span>logger<span style="color:#f92672">.</span>log(<span style="color:#e6db74">&#34;Writing in python&#34;</span>)
</span></span></code></pre></td></tr></table>
</div>
</div><h2 id="try-injecting-js">Try injecting js</h2>
<p>DO NOT DELETE THIS EXAMPLE.</p>
<p>The following approach is inspired by <a href="https://hongtaoh.com/en/2021/05/17/d3-in-hugo/">mr Hongtao</a>, complemented by <a href="https://xa1.at/hugo-include-html/">this</a> and <a href="https://cborchers.com/2020/12/08/how-to-include-javascript-in-your-hugo-website-or-blog-for-cool-applications/">this for js embedding in static</a></p>


<p>Hello, I am a stupid html</p>
<p><b>Hello, again.</b></p>
<!-- https://xa1.at/hugo-include-html/ -->



<p>Embedding js in html.</p>
<div id="andreaDiv">
</div>

<script>
    const svg = d3.select("#andreaDiv")
                  .append("svg")
                  .attr("width", "550")
                  .attr("height", "100")
                  .style("background-color", "red")
                  .attr("id", "demo1")
 
    let rect = d3.select("#demo1")
                 .append("rect")
                 .attr("x", "200")
                 .attr("y", "20")
                 .attr("width", "100")
                 .attr("height", "70")
                 .attr("fill", "orange")
                 .attr("stroke", "blue")
                 .attr("stroke-width", "3px")
    let text = d3.select("#demo1").append("text")
                 .attr("x", "250")
                 .attr("y", "50")
                 .attr("font-size", "20px")
                 .attr("fill", "black")
                 .text("Hello Andrea!")
 </script>


<h2 id="inject-js-again-better">Inject js again, better</h2>


<p>Embedding js in html, from an ext file.</p>
<div id="andreaDiv2">
</div>

<script src="/js/jsinfile.js"></script> <!-- put in static folder -->
