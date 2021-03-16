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

    for (var i = 0; i < length; i++) {
      for (var j = i; j > 0; j--) {
        if (data[j] < data[j - 1]) {
          var temp = data[j];
          data[j] = data[j - 1];
          data[j - 1] = temp;
          await this.child.current.swapAnimation(
            data[j],
            j,
            data[j - 1],
            j - 1
          );
          //Delete else?
        } else {
          break;
        }
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
          onClick={() => this.insertionSort()}
        >
          Insertion Sort
        </button>
      </div>
    );
  }
}

export default InsertionSort;
