// import React, {Component} from 'react'
// // import '../../../index.css'
// import * as d3 from 'd3'
//
// class Bubbles extends Component {
//   constructor(props) {
//     super(props)
//     this.createBubbles = this.createBubbles.bind(this)
//   }
//   componentDidMount() {
//     if (this.props.data) {
//       this.createBubbles()
//     }
//   }
//   componentDidUpdate() {
//     if (this.props.data) {
//       d3.select(".bubbles").selectAll("*").remove()
//       this.createBubbles()
//     }
//   }
//   componentWillUnmount() {
//     d3.select(".bubbles").selectAll("*").remove()
//   }
//
//
//   this.scales.y = d3.scaleBand()
//       .range([0, 1000])
//       .padding(0.3);
//   }
//
//   this.scales.x = d3.scalePoint()
//       .range([0, 1000])
//       .padding(0.5);
//
//
//   buildSqrtScaleValueToRadius = (data) => {
//     var maxValue, maxCircleRadius;
//
//     maxValue = d3.max(data);
//     maxCircleRadius = d3.min([this.scales.y.bandwidth(), this.scales.x.step()]) / 2;
//
//     return d3.scalePow().exponent(0.5)
//       .domain([0, maxValue])
//       .range([0, maxCircleRadius]);
//   }
// 
//
//
//   render() {
//     return <div className = "bubbles"></div>
//   }
// }
//
// export default Bubbles
