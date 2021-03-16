import React from 'react';
import SortAnimation from '../../Animations/SortAnimation';

class InsertionSort extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  async insertionSort() {
    const data = this.props.data;
    let length = data.length;

    for (var i = 1; i < length; i++) {
      let key = data[i];
      let j = i - 1;
      while (j >= 0 && data[j] > key) {
        data[j + 1] = data[j];
        j = j - 1;
      }
      data[j + 1] = key;

      // call function here for swap animation...
      await this.child.current.swapAnimation(data[j], key, data[j - 1], j - 1);
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
          onClick={() => this.insertionSort()}
        >
          Insertion Sort
        </button>
      </div>
    );
  }
}

export default InsertionSort;
