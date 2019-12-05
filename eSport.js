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
   d3.select("#button")
      .append("button")
      .attr("id", "fifa")
      .text("FIFA Revenue")
      .on("click", function(){
    
        d3.selectAll("circle").remove();
        var svg = d3.select("svg");
        
        svg.append("circle") //2015
           .attr("class", "circle")
           .attr("cx", 287)
           .attr("cy", 642)
           .attr("r", 6)
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

    svg.append("circle") //2017
        .attr("class", "circle")
        .attr("cx", 760)
        .attr("cy", 630)
        .attr("r", 6)
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
    
    svg.append("circle") //2018
        .attr("class", "circle")
        .attr("cx", 992)
        .attr("cy", 435)
        .attr("r", 6)
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

var inter = function(po){
    d3.select("#button")
      .append("button")
      .attr("id", "inter")
      .text("International Tournament Pool")
      .on("click", function(){
    
        d3.selectAll("circle").remove();
        var svg = d3.select("svg");
        
        svg.append("circle")
            .attr("class", "circle")
            .attr("cx", 54)
            .attr("cy", 562)
            .attr("r", 6)
            .attr("fill", "purple")
            .on("mouseover", function() {
                d3.select("#tooltip")
                  .style("left", (d3.event.pageX + 20) + "px")
                  .style("top", (d3.event.pageY - 20) + "px")
                  .select("p")
                  .text("Quick note this year International pool increased from 2.8m to 10.8m");
            
            d3.select("#tooltip")
              .classed("hidden", false)
         })
        .on("mouseout", function(){
            d3.select("#tooltip")
              .classed("hidden", true)
        });
        
        svg.append("circle")
            .attr("class", "circle")
            .attr("cx", 287)
            .attr("cy", 490)
            .attr("r", 6)
            .attr("fill", "purple")
            .on("mouseover", function() {
                d3.select("#tooltip")
                  .style("left", (d3.event.pageX + 20) + "px")
                  .style("top", (d3.event.pageY - 20) + "px")
                  .select("p")
                  .text("Another Jump of 8m in the pool");
            
            d3.select("#tooltip")
              .classed("hidden", false)
         })
        .on("mouseout", function(){
            d3.select("#tooltip")
              .classed("hidden", true)
        });
        
        svg.append("circle")
            .attr("class", "circle")
            .attr("cx", 1230)
            .attr("cy", 335)
            .attr("r", 6)
            .attr("fill", "purple")
            .on("mouseover", function() {
                d3.select("#tooltip")
                  .style("left", (d3.event.pageX - 200) + "px")
                  .style("top", (d3.event.pageY + 20) + "px")
                  .select("p")
                  .text("Notice how the gap doubled in revenue due to to popularity of tournaments!");
            
            d3.select("#tooltip")
              .classed("hidden", false)
         })
        .on("mouseout", function(){
            d3.select("#tooltip")
              .classed("hidden", true)
        });
    })
}

        
var totalV = function(tot){
    d3.select("#button")
      .append("button")
      .attr("id", "total")
      .text("Total Viewer")
      .on("click", function(){
        d3.selectAll("circle").remove();
        var svg = d3.select("svg");
        
        svg.append("circle")
            .attr("class", "circle")
            .attr("cx", 760)
            .attr("cy", 495)
            .attr("r", 6)
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

var eSpo = function(e){
    d3.select("#button")
      .append("button")
      .attr("id", "eSpo")
      .text("eSports Global Revenue")
      .on("click", function(){
        d3.selectAll("circle").remove();
        var svg = d3.select("svg");
        
        svg.append("circle")
            .attr("class", "circle")
            .attr("cx", 287)
            .attr("cy", 490)
            .attr("r", 6)
            .attr("fill", "green")
            .on("mouseover", function() {
                d3.select("#tooltip")
                  .style("left", (d3.event.pageX + 20) + "px")
                  .style("top", (d3.event.pageY - 20) + "px")
                  .select("p")
                  .text("Approximate increase of 100%");
            
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
            .attr("cy", 310)
            .attr("r", 6)
            .attr("fill", "green")
            .on("mouseover", function() {
                d3.select("#tooltip")
                  .style("left", (d3.event.pageX + 20) + "px")
                  .style("top", (d3.event.pageY - 20) + "px")
                  .select("p")
                  .text("As years go by growth slope increases");
            
            d3.select("#tooltip")
              .classed("hidden", false)
         })
        .on("mouseout", function(){
            d3.select("#tooltip")
              .classed("hidden", true)
        });
        
        svg.append("circle")
            .attr("class", "circle")
            .attr("cx", 1230)
            .attr("cy", 70)
            .attr("r", 6)
            .attr("fill", "green")
            .on("mouseover", function() {
                d3.select("#tooltip")
                  .style("left", (d3.event.pageX - 220) + "px")
                  .style("top", (d3.event.pageY + 15) + "px")
                  .select("p")
                  .text("From 2014 to 2019 has jumped to 469% increase!");
            
            d3.select("#tooltip")
              .classed("hidden", false)
         })
        .on("mouseout", function(){
            d3.select("#tooltip")
              .classed("hidden", true)
        });
    })
          
}

var spot = function(sp){
    d3.select("#button")
      .append("button")
      .attr("id", "spot")
      .text("NA Sports Sponsorship")
      .on("click", function(){
        d3.selectAll("circle").remove();
        var svg = d3.select("svg");
        
        svg.append("circle")
            .attr("class", "circle")
            .attr("cx", 1230)
            .attr("cy", 541)
            .attr("r", 6)
            .attr("fill", "hotpink")
            .on("mouseover", function() {
                d3.select("#tooltip")
                  .style("left", (d3.event.pageX - 200) + "px")
                  .style("top", (d3.event.pageY + 20) + "px")
                  .select("p")
                  .text("Only a 22% increase");
            
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
    d3.selectAll("#buttons *").remove();
    d3.selectAll("p *").remove();
    
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
    inter(array5D);
    eSpo(array5D);
    spot(array5D);

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
}

var setup2 = function(array5D){
    d3.select("body")
      .append("p")
      .attr("id", "p")
      .text("Here is the change in FIFA Revenue through the years in Millions");
    
    d3.select("#tooltip")
      .classed("hidden", true);
    d3.selectAll("#button *").remove();
    d3.selectAll("p *").remove();
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
        .domain([0, 5000])
        .range([height, 0]);
    
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
        .attr("transform","translate(40,"+margins.top+")")
        .call(yAxis);
    
    drawFifa(array5D, xScale, yScale, cScale);
    
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
        .on("click", function(data){
            d3.selectAll("svg *").remove();
            setup2(data);
        })
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 5)
        .attr("d", d3.line()
          .x(function(d){
            return xScale(d.Year)
    })
        .y(function(d) {
        var num = parseInt(d.FIFA_Revenue)
        return yScale(num);
    }))
        .on("mouseover", function() {
                d3.select("#tooltip")
                  .style("left", (d3.event.pageX + 20) + "px")
                  .style("top", (d3.event.pageY - 20) + "px")
                  .select("p")
                  .text("Click here for more info");
            
            d3.select("#tooltip")
              .classed("hidden", false)
         })
        .on("mouseout", function(){
            d3.select("#tooltip")
              .classed("hidden", true)
        });
}

var drawValue2 = function(array5D, xScale, yScale, cScale){
    d3.select("#graph")
        .append("path")
        .datum(array5D)
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 5)
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
        .attr("stroke-width", 5)
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
        .attr("stroke-width", 5)
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
        .attr("stroke-width", 5)
        .attr("d", d3.line()
          .x(function(d){
            return xScale(d.Year)
        })
        .y(function(d) {
        var sport = parseInt(d.Sports_Sponsorship_Revenue)
        return yScale(sport);
    }))
}

var drawFifa = function(array5D, xScale, yScale, cScale){
    
    d3.selectAll("#button *").remove();
    d3.select("#button")
      .append("button")
      .attr("id", "return")
      .text("Return")
      .on("click", function(data){
        d3.selectAll("svg *").remove();
        d3.select("#return").remove();
        d3.selectAll("#p").remove();
        setup(array5D);
   })
    d3.select("#graph")
        .append("path")
        .datum(array5D)
        .attr("fill", "none")
        .attr("stroke", "hotpink")
        .attr("stroke-width", 5)
        .attr("d", d3.line()
          .x(function(d){
            return xScale(d.Year)
        })
        .y(function(d) {
        var sport = parseFloat(d.Fifa);
        console.log(sport);
        return yScale(sport);
    }))
}

var spo = [{name: "FIFA Revenue", color:"steelBlue"}, {name: "Total Viewers", color:"red"}, {name: "International Prize Pool", color:"purple"}, {name: "eSports Global Revenue", color:"green"}, {name: "Sports Sponsorship Revenue", color:"hotpink"}];