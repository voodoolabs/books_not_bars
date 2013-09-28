// function donutChart() 
  
//   var radius = 74;
//   var padding = 10;

//   var color = d3.scale.ordinal()
//       .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

//   var arc = d3.svg.arc()
//       .outerRadius(radius)
//       .innerRadius(radius - 30);

//   var pie = d3.layout.pie()
//       .sort(null)
//       .value(function(d) { return d.population; });

//   d3.csv("test_data.csv", function(error, data) {
//     color.domain(d3.keys(data[0]).filter(function(key) { return key !== "State"; }));

//     data.forEach(function(d) {
//       d.ages = color.domain().map(function(name) {
//         return {name: name, population: +d[name]};
//       });
//     });

//     var legend = d3.select("#donut_hoolder").append("svg")
//         .attr("class", "legend")
//         .attr("width", radius * 2)
//         .attr("height", radius * 2)
//       .selectAll("g")
//         .data(color.domain().slice().reverse())
//       .enter().append("g")
//         .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

//     legend.append("rect")
//         .attr("width", 18)
//         .attr("height", 18)
//         .style("fill", color);

//     legend.append("text")
//         .attr("x", 24)
//         .attr("y", 9)
//         .attr("dy", ".35em")
//         .text(function(d) { return d; });

//     var svg = d3.select("#donut_hoolder").selectAll(".pie")
//         .data(data)
//       .enter().append("svg")
//         .attr("class", "pie")
//         .attr("width", radius * 2)
//         .attr("height", radius * 2)
//       .append("g")
//         .attr("transform", "translate(" + radius + "," + radius + ")");

//     svg.selectAll(".arc")
//         .data(function(d) { return pie(d.ages); })
//       .enter().append("path")
//         .attr("class", "arc")
//         .attr("d", arc)
//         .style("fill", function(d) { return color(d.data.name); });

//     svg.append("text")
//         .attr("dy", ".35em")
//         .style("text-anchor", "middle")
//         .text(function(d) { return d.State; });

//   });