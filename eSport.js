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

    var cScale = d3.scaleOrdinal(d3.schemeTableau10)
    
    var xAxis = d3.axisBottom(xScale)
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
    
    drawValue1(array5D, xScale, yScale, cScale)
    drawValue2(array5D, xScale, yScale, cScale)
    drawValue3(array5D, xScale, yScale, cScale)
    drawValue4(array5D, xScale, yScale, cScale)
    drawValue5(array5D, xScale, yScale, cScale)
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