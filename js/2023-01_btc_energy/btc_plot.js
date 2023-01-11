window.addEventListener("load", plot);

var dataStore = {};
function plot(){
    loadData().then(showData)
}

function loadData(){
    
    let promise = Promise.all([d3.csv("/blogs/on-the-btc-energy-toll/data.csv")])

    return promise.then(rawData => {
        dataStore.data = rawData[0];
    })
}

function getConfig(){
    let width = 750; height = 600;
    

    let margin = {top: 55, right: 30, bottom: 120, left: 60}

    let plot = {}
    plot.background_color = "#525f9c";
    plot.w = width - margin.left - margin.right;
    plot.h = height - margin.top - margin.bottom;

    plot.y_ax_style = {fontSize: 16, fontColor: "#EBEBEB"}
    plot.x_ax_style = {fontSize: 13, fontColor: "#EBEBEB"}
    return {width, height, margin, plot}
}

// https://observablehq.com/@d3/bar-chart
// https://d3-graph-gallery.com/graph/barplot_button_data_csv.html
function showData(){
    config = getConfig()
    
    data = dataStore.data;
    var plotData = data; // make a copy

    //d3.select("body").append("div").attr("id","BarDiv");
    let svg = d3.select("#BarDiv")
                .append("svg")
                .attr("width", config.width)
                .attr("height", config.height)
                .style("background-color", config.plot.background_color)
    // draw axes
    svg.append("text")
       .attr("x", config.plot.w +  config.margin.left)
       .attr("y", config.margin.top * 0.9)
       .attr("font-size", 22)
       .attr("class", "font_b")
       .text("The energy toll of BTC")
       .style("text-anchor","end")
    
    var quantity = "TWh"
    svg.append("text").attr("id", "legend_quantity")
        .attr("x", config.margin.left)
        .attr("y", config.margin.top * 1.1)
        .attr("font-size", 14)
        .attr("class", "font_a")
        .text(quantity)
        .style("text-anchor","start")
    

    d3.select("#legend_quantity")
       .on("click",function(d){
            quantity == "TWh" ? quantity = "proportion_to_BTC" : quantity="TWh"
            d3.select("#legend_quantity").text(quantity)
            updateAxes(); // order IS important.
            upd(xScale, yScale);
        })

    let xScale = d3.scaleBand()
                .domain( data.map(d=>d.item) )
                .paddingInner(0.05)
                .range([config.plot.w/30, config.plot.w])
                
    let xAx = svg.append("g").call(d3.axisBottom(xScale))
                .attr("transform", `translate(${config.margin.left}, ${config.margin.top + config.plot.h})`)
    xAx.selectAll("text").style("text-anchor","end").attr("transform", "rotate(-40)")
    xAx.select(".domain").remove() // removes the base line https://stackoverflow.com/questions/11252753/rotate-x-axis-text-in-d3
    
    // y axis
    
    
    let yAx = svg.append("g") // https://observablehq.com/@d3/styled-axes
                .attr("class", "y_ax_font") // http://www.d3noob.org/2016/08/changing-text-size-for-axes-in-d3js-v4.html
                .attr("transform", `translate(${config.margin.left}, ${config.margin.top})`)

    var maxY = Math.round( d3.max( plotData.map(d=>+d[quantity]) ) * 1.1 );
    let yScale = d3.scaleLinear()
                .domain([0, maxY])
                .range([config.plot.h, 0]);     
    
    //[xScale, yScale] = updateAxes(data);
    function updateAxes(maxY){
        xScale.domain( plotData.map(d=>d.item) )
        xAx.call( d3.axisBottom(xScale) )
           .call(g=> g.selectAll(".tick text").attr("color", config.plot.x_ax_style.fontColor));

        maxY = Math.round( d3.max( plotData.map(d=>+d[quantity]) ) * 1.1 );
        yScale = yScale.domain([0, maxY])

        yAx.call(d3.axisLeft(yScale).tickSize(-config.plot.w))
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick:not(:first-of-type) line")
            .attr("stroke-opacity", 0.5)
            .attr("stroke-dasharray", "2,2"))
        .call(g => g.selectAll(".tick text")
            .attr("font-size", config.plot.y_ax_style.fontSize)
            .attr("color",config.plot.y_ax_style.fontColor)
            .attr("x", 4)
            .attr("dy", -4))
            
    }
    updateAxes()
    let categories = Array.from(new Set( data.map(d=> d.category ) ));
    let colorScale = d3.scaleOrdinal(d3.schemeCategory10)
                       .domain(categories);
  
    // proper way to draw gridlines?
    // option 2: https://stackoverflow.com/questions/15580300/proper-way-to-draw-gridlines?answertab=scoredesc#tab-top
    let g = svg.append("g")
       .attr("transform", `translate(${config.margin.left},${config.margin.top})`)
    
    // Nice references for D3's new join pattern (way more intuitive)
    // https://www.createwithdata.com/enter-exit-with-d3-join/
    // https://observablehq.com/@d3/selection-join
    function upd(xScale, yScale){
        g.selectAll("rect")
        .data(plotData, d=>d.item)
        .join(
                function(enter){
                    return enter.append("rect")
                            .attr("x", d => xScale(d.item) )
                            .attr("y", d => yScale(d[quantity]) )
                            .attr("width", xScale.bandwidth() )
                            .attr("height", d => yScale(0) - yScale(d[quantity]) )
                            .attr("fill", function(d){
                                    if(d.item=='BTC'){
                                        return "black"
                                    }
                                    return colorScale(d.category)
                                })
                    },
                function update(update){
                    return update.transition().duration(1400).attr("x", d => xScale(d.item) )
                                 .attr("y", d => yScale(d[quantity]) )
                                 .attr("width", xScale.bandwidth() )
                                 .attr("height", d => yScale(0) - yScale(d[quantity]) )
                  },
                function exit(exit){
                    return exit.transition().duration(100).remove()//.attr("fill","blue")
                  },
            )
            .on("click", function(d){
                    let clickedData = d3.select(this).data()[0]; // https://stackoverflow.com/questions/29575151/d3-selectall-data-just-returns-data-in-first-element-why
                    let index = plotData.findIndex(v=>v.item==clickedData.item);
                    plotData.splice(index, 1);
                    
                    updateAxes(); // order IS important.
                    upd(xScale, yScale);
                    //xAx.call( d3.axisBottom( xScale.domain( plotData.map(d=>d.item) )) )
                    
                    })
    }
    upd(xScale, yScale)
    console.log("--- done ---");


    svg.append("text")
        .attr("y",config.plot.h + config.margin.top + config.margin.bottom*2/3)
        .attr("x", config.margin.left)
        .style("text-anchor", "start")
        .attr("fill", "grey")
        .attr("opacity", .8)
        .attr("font-size", 10)
        .text(`@bernardo_xdata | #60DaysOfD3js`); 
  

}