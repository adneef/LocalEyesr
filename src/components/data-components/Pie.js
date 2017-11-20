import React from 'react'
import Slice from './Slice'
const d3 = require('d3');


class Pie extends React.Component {

  constructor(props) {
    super(props);
    // https://github.com/d3/d3/wiki/Ordinal-Scales#category10
    this.colorScale = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00", "#ffbf00", "#bfb8d6"]);
    this.renderSlice = this.renderSlice.bind(this);
  }

  render() {
    let {x, y, data} = this.props;
    // https://github.com/d3/d3/wiki/Pie-Layout
    let pie = d3.layout.pie();
    return (
      <g transform={`translate(${x}, ${y})`}>
        {/* Render a slice for each data point */}
        {pie(data).map(this.renderSlice)}
      </g>
    );
  }

  renderSlice(value, i) {
    // We'll create this component in a minute
    return (
      <Slice key={i}
             outerRadius={this.props.radius}
             value={value}
             fill={this.colorScale(i)} />
    );
  }
}

export default Pie
