import React from 'react';
import * as d3 from 'd3';
import { rgb } from 'd3';

var durationTime = 1000;

var buttonStyle = {
  margin: '10px 10px 10px 10px',
};

class BubbleSort extends React.Component {
  async bubbleSort() {
    const data = this.props.data;
    for (var j = data.length; j > 0; j--)
      for (var i = 0; i < j; i++) {
        if (data[i] > data[i + 1]) {
          var temp = data[i];
          data[i] = data[i + 1];
          data[i + 1] = temp;
          // call function here for swap animation...
          await this.swapAnimation(data[i], i, data[i + 1], i + 1); // did not work
        }
      }
    return console.log(data);
  }
  swapAnimation(d, i, d1, i1) {
    //Select index positions of the two rectangles and text being compared
    var sel = `rect#rect${i}`,
      sel1 = `rect#rect${i1}`;

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

      //Swap indexes of rect
      d3.select(sel1).attr('id', 'rect' + i),
      d3.select(sel).attr('id', 'rect' + i1),

      //Swap indexes of text labels
      d3.select(selText1).attr('id', 'text' + i),
      d3.select(selText).attr('id', 'text' + i1),
    ]);
  }

  render() {
    return (
      <div>
        <button
          className="ui primary button"
          style={buttonStyle}
          onClick={() => this.bubbleSort()}
        >
          Bubble Sortz
        </button>
      </div>
    );
  }
}

export default BubbleSort;
