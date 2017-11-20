import React, { Component } from 'react'
const d3 = require('d3');
// import { scaleLinear } from 'd3-scale’
// import { max } from 'd3-array'
// import { select } from 'd3-selection'

const Data2Chart = () => {

   // constructor(props){
   //    super(props)
   //    this.renderPieChart = this.renderPieChart.bind(this)
   // }
   // componentDidMount() {
   //    this.renderPieChart()
   //
   // }
   // componentDidUpdate() {
   //    this.renderPieChart()
   // }


     const dataset = [
       { label: 'Abulia', count: 10 },
       { label: 'Betelgeuse', count: 20 },
       { label: 'Cantaloupe', count: 30 },
       { label: 'Dijkstra', count: 40 }
     ];

     var width = 360;
     var height = 360;
     var radius = Math.min(width, height) / 2;
     var color = d3.scaleOrdinal(d3.schemeCategory20b);
     var color = d3.scaleOrdinal()
       .range(['#A60F2B', '#648C85', '#B3F2C9', '#528C18', '#C3F25C']);

     var svg = d3.select('#chart')
       .append('svg')
       .attr('width', width)
       .attr('height', height)
       .append('g')
       .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')');

     var arc = d3.arc()
       .innerRadius(0)
       .outerRadius(radius);

     var pie = d3.pie()
       .value(function(d) { return d.count; })
       .sort(null);

     var path = svg.selectAll('path')
       .data(pie(dataset))
       .enter()
       .append('path')
       .attr('d', arc)
       .attr('fill', function(d, i) {
         return color(d.data.label);
       });



      return (
        <div>
          <g transform={translate}>
            {pie.map((d, i) => (
                <LabeledArc key={`arc-${i}`}
                            data={dataset}
                            innerRadius={innerRadius}
                            outerRadius={outerRadius}
                            color={colors(i)} />))}
        </g>
        </div>
      )

}

export default Data2Chart
