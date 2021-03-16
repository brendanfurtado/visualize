import React from 'react';
import * as d3 from 'd3';
import { rgb } from 'd3';
var durationTime = 1000;

var buttonStyle = {
  margin: '10px 10px 10px 10px',
};
//Child component for Sorting algorithms
class SortAnimation extends React.Component {
  swapAnimation(d, i, d1, i1) {
    //Select index positions of the two rectangles and text being compared
    var sel = `rect#rect${i}`,
      sel1 = `rect#rect${i1}`;

    //i = 0 , i1 = 8
    // console.log('Swapping index: ' + i + ' with minimum at index: ' + i1);
    // console.log(sel); //38 i = 0
    // console.log(sel1); //3 i1 = 8

    var selText = `text#text${i}`,
      selText1 = `text#text${i1}`;

    //Select the x position for the two selections
    var x1 = d3.select(sel1).attr('x');
    var x = d3.select(sel).attr('x');
    //Highlight them
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

      //Ending highlight of swap
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
      this.swapIndexes(i, i1),
    ]);
  }

  swapIndexes(i, i1) {
    var sel = `rect#rect${i}`,
      sel1 = `rect#rect${i1}`;
    var selText = `text#text${i}`,
      selText1 = `text#text${i1}`;

    var svg_sel = d3.select(sel);
    var svg_sel1 = d3.select(sel1);

    var svg_text = d3.select(selText);
    var svg_text1 = d3.select(selText1);

    //Swap indexes of rect
    // if (
    //   d3.select(sel1).attr('id') === 'rect' + i ||
    //   d3.select(sel1).attr('id') === 'rect' + i1
    // ) {
    // d3.select(sel1).append('rect').attr('id', `rect${i}`);
    // d3.select(sel).append('rect').attr('id', `rect${i1}`);
    svg_sel.attr('id', `rect${i1}`);
    svg_sel1.attr('id', `rect${i}`);
    // }

    //Swap indexes of text labels
    svg_text.attr('id', `text${i1}`);
    svg_text1.attr('id', `text${i}`);
  }

  render() {
    return <div></div>;
  }
}

export default SortAnimation;
