import React, {
  Component
} from 'react'
import * as d3 from 'd3'

class Bubbles extends Component {
  constructor(props) {
    super(props)
    this.createBubbles = this.createBubbles.bind(this)
  }
  componentDidMount() {
    if (this.props.data) {
      this.createBubbles()
    }
  }
  componentDidUpdate() {
    d3.select(".bubbles").selectAll("*").remove()
    if (this.props.data) {
      this.createBubbles()
    }
  }

  componentWillUnmount() {
    d3.select(".bubbles").selectAll("*").remove()
  }

  createBubbles = () => {

    var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00", "#ffbf00", "#bfb8d6"])

    var dataset = {children: this.props.data}
    var bubble = d3.pack(dataset)
      // .sort(null)
      .size([700, 700])
      .padding(1.5);

    var svg = d3.select(".bubbles")
        .append("svg")
        .attr("width", 700)
        .attr("height", 700)
        .attr("class", "svgbubble");

    var nodes = d3.hierarchy(dataset)
      .sum(function(d) { return d.count })

    var node = svg.selectAll(".node")
      .data(bubble(nodes).descendants())
      .enter()
      .filter(function(d){
        return !d.children
      })
      .append("g")
      .attr("class", "node")
      .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")"
      });

    node.append("title")
      .text(function(d) {
        return d.data.hash + ": " + d.data.count
      });

    node.append("circle")
      .attr("r", function(d) {
          return d.r;
      })
      .attr("fill", function(d) {
          return color(d.data.count);
      });

    node.append("text")
      .attr("dy", ".3em")
      .style("text-anchor", "middle")
      .text(function(d) {
        return d.data.hash;
      });
  }

  render() {
    return <div className = "bubbles"></div>
  }
}
export default Bubbles
