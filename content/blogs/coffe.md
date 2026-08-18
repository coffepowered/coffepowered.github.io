+++
title = "Drawing a coffee plot, with LLMs ep0"
type = "blog"
date = 2025-05-10T21:28:43-05:00
description = "the time it takes to drink a coffee, in Italy at least."
image = "/img/blogs/llm-assisted-draw.png"
tags = ["experiment", "llm"]
categories = ["daily"]
math = true
d3 = true
+++

<h1 id="llm-assisted-work">LLM-assisted work?</h1>
<p>Will the LLM take over us? Yes, no. Maybe.</p>
<p>The only thing I&rsquo;m sure about is that those cool stuff are not able to assess the certainty of text (&ldquo;opinions?&rdquo;) they generate.</p>
<p>Moreover, In my humanly-limited experience, I have yet to see LLMs to meaningful contribute to any asset, i.e. to add valuable and extensive contribution to non-throaway code. All of this may seem strong, but hey, this does not mean productivity cannot be positively impacted.</p>
<p>Today, I&rsquo;ll be impersonating a journalist or blogger, dealing with a niche site generator as a contraint [^1].
I need to re-elaborate some data from EFSA about coffee in 5 minutes.</p>
<h2 id="rules-of-the-game-for-today">Rules of the game, for today</h2>
<p>Here are the rules of the game I&rsquo;ll start with:</p>
<ul>
<li>On the D3.js part, I&rsquo;ll be as &ldquo;clean hands&rdquo; as possible, avoiding any major code contribution</li>
<li>As anticipated, the site generator works as a &ldquo;constraint&rdquo;, i.e. the plot has to be integrated with an existing system (this blog)</li>
<li>The initial idea of the design is provided very clearly (a pre-made plot, from EFSA),</li>
<li>I am evaluating only the &ldquo;graphic&rdquo; capabilities, for the time being.</li>
</ul>
<p>You can see below how it went, with actual reference, actually it took more than 5 minutes (about 15).</p>
<h2 id="day-0-result">Day 0: result</h2>


<div id="caffeineChart"></div>

<script>
  // Data for caffeine content
  const caffeineData = [
    { name: "Un tazza di caffè americano (200 ml)", value: 95, icon: "☕" },
    { name: "Una normale lattina di \"bevanda energetica\" (250ml)", value: 80, icon: "🥫" },
    { name: "Un espresso (60ml)", value: 80, icon: "☕" },
    { name: "Un tazza di tè (220ml)", value: 47, icon: "🍵" },
    { name: "Una normale lattina di cocacola (355ml)", value: 40, icon: "🥤" },
    { name: "Una barretta di cioccolato fondente (50g)", value: 23, icon: "🍫" },
    { name: "Una barretta di cioccolato al latte (50g)", value: 10, icon: "🍫" }
  ];

  // Chart dimensions
  const width = 400;
  const height = 400;
  const margin = { top: 20, right: 20, bottom: 30, left: 220 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const textColor = "lightgray";
  // Create SVG
  const svg = d3.select("#caffeineChart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", `0 0 ${width} ${height}`);
    
  // Add title to the plot
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", margin.top / 2)
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("fill", "white")
    .text("Caffeine Content in Common Items");

  // Create chart group
  const chart = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
  
  // X scale
  const xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, chartWidth]);
  
  // Y scale
  const yScale = d3.scaleBand()
    .domain(caffeineData.map(d => d.name))
    .range([0, chartHeight])
    .padding(0.3);
  
  // Create gradient for bars
  const defs = svg.append("defs");
  const gradient = defs.append("linearGradient")
    .attr("id", "caffeine-gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "0%");
    
  gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#ffffff");
    
  gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#ff0000");
  
  // Add the bars
  chart.selectAll(".bar")
    .data(caffeineData)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", 0)
    .attr("y", d => yScale(d.name))
    .attr("width", d => xScale(d.value))
    .attr("height", yScale.bandwidth())
    .attr("fill", "url(#caffeine-gradient)");
  
  // Add x-axis
  chart.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(d3.axisBottom(xScale)
      .tickValues([0, 20, 40, 60, 80, 100])
      .tickSize(-chartHeight)
    )
    .call(g => g.select(".domain").remove())
    .call(g => g.selectAll(".tick line")
      .attr("stroke", "#ddd")
      .attr("stroke-dasharray", "2,2"))
    .call(g => g.selectAll(".tick text")
      .attr("font-size", "10px")
      .attr("fill", textColor)); // Updated color to textColor
      
  // Add "mg" labels
  chart.append("text")
    .attr("x", 0)
    .attr("y", chartHeight + 25)
    .attr("text-anchor", "middle")
    .attr("font-size", "10px")
    .text("0 mg");
    
  chart.append("text")
    .attr("x", chartWidth)
    .attr("y", chartHeight + 25)
    .attr("text-anchor", "middle")
    .attr("font-size", "10px")
    .text("100 mg");
  
  // Add item labels and icons
  const labels = svg.append("g")
    .attr("transform", `translate(0, ${margin.top})`);
    
  caffeineData.forEach((d, i) => {
    const y = yScale(d.name) + yScale.bandwidth() / 2;
    
    // Add text
    labels.append("text")
      .attr("x", margin.left - 10)
      .attr("y", y)
      .attr("text-anchor", "end")
      .attr("dominant-baseline", "middle")
      .attr("font-size", "10px")
      .text(d.name)
      .attr("fill", textColor);
      
    // Add icon images
    labels.append("text")
      .attr("x", margin.left - 5)
      .attr("y", y)
      .attr("dominant-baseline", "middle")
      .attr("font-size", "18px")
      .text(d.icon);
  });
</script>
<p>Done with</p>
<ul>
<li><a href="https://claude.ai/public/artifacts/35b4af1f-4016-4604-a885-2865937864d1">Claude chat</a></li>
<li>github copilot edit</li>
</ul>
<p>Honestly, it is good, but it took about 3x what I wanted to. Let&rsquo;s see what can be achieved with anoter round.
After all, estimation is a long-standing issue in software development.</p>
<p>[^1] it&rsquo;s called Hugo. I like it actually, but for the sake of the exercise it a &ldquo;contraint&rdquo; applied on top of the LLM</p>
