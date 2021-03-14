import React from 'react';
import * as d3 from 'd3';
import { rgb } from 'd3';
var durationTime = 1000;

var buttonStyle = {
  margin: '10px 10px 10px 10px',
};
//Child component for Sorting algorithms
// var data = this.props.data;
class SortAnimation extends React.Component {
  swapAnimation(d, i, d1, i1) {
    console.log(this.props.data);
    var sel = `rect#rect${d}`,
      sel1 = `rect#rect${d1}`;

    var selText = `text#text${d}`,
      selText1 = `text#text${d1}`;

    var x1 = d3.select(sel1).attr('x');
    var x = d3.select(sel).attr('x');
    // d3.select(sel1).transition().duration(1000).style('fill', 'blue').end();
    d3.select(sel1).transition().duration(0).style('fill', 'green');
    d3.select(sel).transition().duration(0).style('fill', 'green');

    return Promise.all([
      d3.select(sel).transition().duration(durationTime).attr('x', x1).end(),
      //Move text
      d3
        .select(selText)
        .transition()
        .duration(durationTime)
        .attr('x', x1)
        .end(),

      d3.select(sel1).transition().duration(durationTime).attr('x', x).end(),
      //Move text
      d3
        .select(selText1)
        .transition()
        .duration(durationTime)
        .attr('x', x)
        .end(),

      d3
        .select(sel1)
        .transition()
        .delay(1000)
        .duration(0)
        .style('fill', rgb(173, 216, 230))
        .end(),

      d3
        .select(sel)
        .transition()
        .delay(1000)
        .duration(0)
        .style('fill', rgb(173, 216, 230))
        .end(),
    ]);
  }

  render() {
    return <div></div>;
  }
}

export default SortAnimation;
