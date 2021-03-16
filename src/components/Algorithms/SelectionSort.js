import React from 'react';
import SortAnimation from '../../Animations/SortAnimation';

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
        console.log('Swapping index: ' + i + ' with minimum at index: ' + min);
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
