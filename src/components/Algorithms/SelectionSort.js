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
      for (var j = i + 1; j < data.length; j++) {
        // var sel = `rect#rect${data[i]}`,
        //   sel1 = `rect#rect${data[min]}`;
        // d3.select(sel1).transition().duration(0).style('fill', 'green');
        // d3.select(sel).transition().duration(0).style('fill', 'green');
        if (data[j] < data[min]) {
          min = j;
        }
      }
      //Swap
      if (min !== i) {
        let temp = data[i];
        data[i] = data[min];
        data[min] = temp;
        // call function here for swap animation...
        await this.child.current.swapAnimation(data[i], i, data[min], min);
      }
    }
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
