import React from 'react';
import * as d3 from 'd3';
import { rgb } from 'd3';
import SortAnimation from '../Animations/SortAnimation';

var buttonStyle = {
  margin: '10px 10px 10px 10px',
};
class SelectionSort extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  async selectionSort() {
    const data = this.props.data;

    for (var j = data.length; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (data[i] > data[i + 1]) {
          let temp = data[i];
          data[i] = data[i + 1];
          data[i + 1] = temp;
          // call function here for swap animation...
          await this.child.current.swapAnimation(
            data[i],
            i,
            data[i + 1],
            i + 1
          );
        }
      }
    }
    console.log('Hello');
  }
  render() {
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
