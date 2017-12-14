import React, { Component } from 'react'
import * as d3 from "d3";


class Data2Chart extends Component {

  constructor(props) {
    super(props)
    this.createPieChart = this.createPieChart.bind(this)
  }

  componentDidMount() {
    if (this.props.data) {
      this.createPieChart()
    }
  }

  componentDidUpdate() {
    if (this.props.data) {
      this.createPieChart()
    }
  }

  createPieChart() {
    var svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height"),
      radius = Math.min(width, height) / 2,
      g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

    var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00", "#ffbf00", "#bfb8d6"])

    var pie = d3.pie()
        .sort(null)
        .value(function(d) { return d.tweets; })

    var path = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    var label = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    var arc = g.selectAll(".arc")
      .data(pie(this.props.data))
      .enter().append("g")
        .attr("class", "arc")

    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return color(d.data.name) })

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")" })
        .attr("dy", "0.35em")
        .text(function(d) { return d.data.name; })
  }

  render() {
    return(
      <div>
        <svg width="700" height="700" className="data-image"></svg>
      </div>
    )
  }
}

export default Data2Chart
