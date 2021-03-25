import React from 'react';
import BarChart from '../components/charts/BarChart';

// data: [12, 13, 2, 20, 7, 10],
//[3, 38, 5, 44, 15, 36, 26, 27, 2, 46]
//[12, 14, 13, 12, 2, 20, 7, 10]
class SortingPage extends React.Component {
  state = {
    data: [12, 14, 13, 12, 2, 20, 7, 10],
    width: 700,
    height: 500,
    id: 'root',
  };

  rerender() {
    this.setState({ state: this.state });
    window.location.reload();
  }

  render() {
    return (
      <div className="SortingPage">
        <BarChart
          data={this.state.data}
          width={this.state.width}
          height={this.state.height}
        />
        <button className="ui primary button" onClick={() => this.rerender()}>
          Reset
        </button>
      </div>
    );
  }
}

export default SortingPage;
