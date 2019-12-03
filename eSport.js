var ePromise = d3.csv("thisIsaMess.csv")

ePromise.then(function(data){
    console.log("boom", data)
    setup(data);
},
function(yikes){
    console.log("bigYikes", yikes);
})

var screen = {width: 1280, height: 720};
var margins = {top: 30, right: 50, bottom: 50, left: 50};

var fifa = function(d){
    d3.select("body")
      .append("button")
      .attr("id", "fifa")
      .text("FIFA Revenue")
      .on("click", function(){
    
    var svg = d3.select("svg");
        
    svg.append("circle")
      .attr("class", "circle")
      .attr("cx", 287)
      .attr("cy", 642)
      .attr("r", 5)
      .attr("fill", "black")
      .on("mouseover", function(d) {
        d3.select("#tooltip")
          .style("left", (d3.event.pageX + 20) + "px")
          .style("top", (d3.event.pageY - 20) + "px")
          .select("p")
          .text("Huge Decrease in revenue due to the scandals within the FIFA organization and scams within Brazil itself");
        d3.select("#tooltip")
          .classed("hidden", false)
         })
      .on("mouseout", function(){
        d3.select("#tooltip")
          .classed("hidden", true)
    });

    svg.append("circle")
        .attr("class", "circle")
        .attr("cx", 760)
        .attr("cy", 630)
        .attr("r", 5)
        .attr("fill", "black")
        .on("mouseover", function(d) {
        d3.select("#tooltip")
            .style("left", (d3.event.pageX + 20) + "px")
            .style("top", (d3.event.pageY - 20) + "px")
            .select("p")
            .text("New president began reforming FIFA from the inside and sponsors want to support them");
         d3.select("#tooltip")
           .classed("hidden", false)
         })
        .on("mouseout", function(){
            d3.select("#tooltip")
              .classed("hidden", true)
        });
    
    svg.append("circle")
        .attr("class", "circle")
        .attr("cx", 992)
        .attr("cy", 435)
        .attr("r", 5)
        .attr("fill", "black")
        .on("mouseover", function() {
        d3.select("#tooltip")
            .style("left", (d3.event.pageX + 20) + "px")
            .style("top", (d3.event.pageY - 20) + "px")
            .select("p")
            .text("World Cup Sponsorships return with the news of new president and begins to return back with FIFA organization");
         d3.select("#tooltip")
           .classed("hidden", false)
         })
        .on("mouseout", function(){
            d3.select("#tooltip")
              .classed("hidden", true)
        });
      }    
)}

var totalV = function(tot){
    d3.select("body")
      .append("button")
      .attr("id", "total")
      .text("Total Viewer")
      .on("click", function(){
        d3.selectAll("circle").remove();
        var svg = d3.select("svg");
        
        svg.append("circle")
            .attr("class", "circle")
            .attr("cx", 760)
            .attr("cy", 430)
            .attr("r", 5)
            .attr("fill", "red")
            .on("mouseover", function() {
                d3.select("#tooltip")
                  .style("left", (d3.event.pageX + 20) + "px")
                  .style("top", (d3.event.pageY - 20) + "px")
                  .select("p")
                  .text("Ninja Collabed with Drake and Travis Scott in Fortnite");
            
            d3.select("#tooltip")
              .classed("hidden", false)
         })
        .on("mouseout", function(){
            d3.select("#tooltip")
              .classed("hidden", true)
        });
}
          )
}

var setup = function(array5D)
{
    var svg = d3.select("svg")
    .attr("width", screen.width)
    .attr("height", screen.height);
    
    svg.append("g")
    .attr("id", "graph")
    .attr("transform", "translate("+margins.left+ "," +margins.top+")");
    
    var width = screen.width - margins.left - margins.right;
    var height = screen.height - margins.top - margins.bottom;
    
    var xScale = d3.scaleLinear()
        .domain([2014, 2019])
        .range([0, width]);
    
    var yScale = d3.scaleLinear()
        .domain([-100, 500])
        .range([height, 0]);
    
    fifa(array5D);
    totalV(array5D);

    var cScale = d3.scaleOrdinal(d3.schemeTableau10)
    
    var xAxis = d3.axisBottom(xScale).ticks(5)
    var yAxis = d3.axisLeft(yScale)
    
    d3.select("svg")
        .append("g")
        .classed("axis", true);
    
    d3.select(".axis")
        .append("g")
        .attr("id", "xAxis")
        .attr("transform", "translate("+margins.left+","+(margins.top+height)+")")
        .call(xAxis);
    
    d3.select(".axis")
        .append("g")
        .attr("id", "yAxis")
        .attr("transform","translate(30,"+margins.top+")")
        .call(yAxis);
    drawLegend(array5D, cScale);
    drawValue1(array5D, xScale, yScale, cScale);
    drawValue2(array5D, xScale, yScale, cScale);
    drawValue3(array5D, xScale, yScale, cScale);
    drawValue4(array5D, xScale, yScale, cScale);
    drawValue5(array5D, xScale, yScale, cScale);
    
    
    svg.append("circle")
        .attr("class", "circle")
        .attr("cx", 50)
        .attr("cy", 562)
        .attr("r", 5)
        .attr("fill", "purple");
        
}

var drawLegend = function(array5D, cScale){
    d3.select("svg")
      .append("g")
      .attr("id", "legend")
      .attr("transform", "translate(" +(screen.width-1200)+"," + (margins.top)+")");
    
    var gs = d3.select("#legend")
        .selectAll("g")
        .data(spo)
        .enter()
        .append("g")
        .attr("fill", function(ar){
            return ar.color
        })
        .attr("transform", function(ar, i){
            return "translate(0,"+(i*14)+")";
        })
    
    gs.append("rect")
      .attr("width", 10)
      .attr("height", 10);
    
    gs.append("text")
      .text(function(ar){
        return ar.name;
    })
      .attr("x", 15)
      .attr("y", 10)
      .attr("fill", "black")
}

var drawValue1 = function(array5D, xScale, yScale, cScale){
    d3.select("#graph")
        .append("path")
        .datum(array5D)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(function(d){
            return xScale(d.Year)
    })
        .y(function(d) {
        var num = parseInt(d.FIFA_Revenue)
        return yScale(num);
    }))
}

var drawValue2 = function(array5D, xScale, yScale, cScale){
    d3.select("#graph")
        .append("path")
        .datum(array5D)
      /*.on("click", function(data){
            setup2(data);
        })*/
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(function(d){
            return xScale(d.Year)
    })
        .y(function(d) {
        var view = parseInt(d.Total_Viewers)
        return yScale(view);
    }))
}

var drawValue3 = function(array5D, xScale, yScale, cScale){
    d3.select("#graph")
        .append("path")
        .datum(array5D)
        .attr("fill", "none")
        .attr("stroke", "purple")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(function(d){
            return xScale(d.Year)
    })
        .y(function(d) {
        var pool = parseInt(d.International_Prize_Pool)
        return yScale(pool);
    }))
}

var drawValue4 = function(array5D, xScale, yScale, cScale){
    d3.select("#graph")
        .append("path")
        .datum(array5D)
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(function(d){
            return xScale(d.Year)
    })
        .y(function(d) {
        var eSports = parseInt(d.eSports_Global_Revenue)
        return yScale(eSports);
    }))
}

var drawValue5 = function(array5D, xScale, yScale, cScale){
    d3.select("#graph")
        .append("path")
        .datum(array5D)
        .attr("fill", "none")
        .attr("stroke", "hotpink")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(function(d){
            return xScale(d.Year)
        })
        .y(function(d) {
        var sport = parseInt(d.Sports_Sponsorship_Revenue)
        return yScale(sport);
    }))
}


var spo = [{name: "FIFA Revenue", color:"steelBlue"}, {name: "Total Viewers", color:"red"}, {name: "International Prize Pool", color:"purple"}, {name: "eSports Global Revenue", color:"green"}, {name: "Sports Sponsorship Revenue", color:"hotpink"}];