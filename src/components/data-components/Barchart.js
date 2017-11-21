import React, {Component} from 'react'
// import '../../../index.css'
import * as d3 from 'd3'

class Barchart extends Component {
  constructor(props) {
    super(props)
    this.createBarChart = this.createBarChart.bind(this)
  }
  componentDidMount() {
    if (this.props.data) {
      this.createBarChart()
    }
  }
  componentDidUpdate() {
    if (this.props.data) {
      d3.select(".barchart").selectAll("*").remove()
      this.createBarChart()
    }
  }
  componentWillUnmount() {
    d3.select(".barchart").selectAll("*").remove()
  }

  createBarChart() {
    var bar = d3.select(".barchart").append("svg")
      .attr("width", "1000")
      .attr("height", "1000")

    bar.selectAll("rect")
      .data(this.props.data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("width", function(d, i) {return ((d.count) * 100)})
      .attr("height", function(d, i) {return (500 / 30)})
      .attr("y", function(d, i) {return (i * 20)})
      .attr("x", "200")
      .attr("stroke", "black")
      .attr("stroke-width", "2")
      .attr("fill", "orange")

    bar.selectAll("text")
      .data(this.props.data)
      .enter().append("text")
      .text(function(d) {
        return d.hash
      })
      .attr("y", function(d, i) {
        return (i * 20) + 15
      })
      .attr("x", "20")
      .attr("stroke", "black")
  }

  render() {
    return <div className = "barchart"></div>
  }
}
export default Barchart
