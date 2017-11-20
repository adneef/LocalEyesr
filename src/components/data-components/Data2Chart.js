import React from 'react'
import Pie from './Pie'
// const d3 = require('d3');

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


    let data=[5, 2, 7, 1, 1, 3, 4, 9]
     let width = window.innerWidth;
    let height = window.innerHeight;
    let minViewportSize = Math.min(width, height);
    // This sets the radius of the pie chart to fit within
    // the current window size, with some additional padding
    let radius = (minViewportSize * .9) / 2;
    // Centers the pie chart
    let x = width / 2;
    let y = height / 2;



      return (
        <svg width="100%" height="100%">
        {/* We'll create this component in a minute */}
        <Pie x={x} y={y} radius={radius} data={data} />
      </svg>
      )

}

export default Data2Chart
