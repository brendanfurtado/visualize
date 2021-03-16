import React from 'react';
import SortAnimation from '../../Animations/SortAnimation';
import * as d3 from 'd3';
import { rgb } from 'd3';

class SelectionSort extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  async selectionSort() {
    const data = this.props.data;

    for (var i = 0; i < data.length; i++) {
      var min = i;
      var prev_min = min;
      //   await this.child.current.highlightAnimation(min);
      d3.select(`rect#rect${min}`)
        .transition()
        .duration(0)
        .style('fill', 'green');

      for (var j = i + 1; j < data.length; j++) {
        await this.child.current.highlightAnimation(j);
        if (data[j] < data[min]) {
          prev_min = min;
          //Found a new min, so de-highlight the previous min rectangle
          if (i !== prev_min) {
            d3.select(`rect#rect${prev_min}`)
              .transition()
              .duration(0)
              .style('fill', rgb(173, 216, 230));
          }

          min = j;
          d3.select(`rect#rect${min}`)
            .transition()
            .duration(100)
            .style('fill', 'blue');
        }
      }
      d3.select(`rect#rect${prev_min}`)
        .transition()
        .duration(0)
        .style('fill', rgb(173, 216, 230));
      //Swap
      if (min !== i) {
        d3.select(`rect#rect${prev_min}`)
          .transition()
          .duration(0)
          .style('fill', rgb(173, 216, 230));
        let temp = data[i];
        data[i] = data[min];
        data[min] = temp;
        // call function here for swap animation...
        // console.log('Swapping index: ' + i + ' with minimum at index: ' + min);
        await this.child.current.swapAnimation(data[i], i, data[min], min);
      }
    }
    console.log(data);
  }
  render() {
    const buttonStyle = {
      margin: '10px 10px 10px 10px',
    };
    return (
      <div>
        <SortAnimation ref={this.child} />
        <button
          className="ui primary button"
          style={buttonStyle}
          onClick={() => this.selectionSort()}
        >
          Selection Sort
        </button>
      </div>
    );
  }
}

export default SelectionSort;
