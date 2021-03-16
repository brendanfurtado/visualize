import React from 'react';
import BarChart from './charts/BarChart';
// data: [12, 13, 2, 20, 7, 10],
//[3, 38, 5, 44, 15, 36, 26, 27, 2, 46]
//[12, 14, 13, 12, 2, 20, 7, 10]
class App extends React.Component {
  state = {
    data: [3, 38, 5, 44, 15, 36, 26, 27, 2, 46],
    width: 700,
    height: 500,
    id: 'root',
  };
  rerender() {
    this.setState({ state: this.state });
    window.location.reload();
  }

  render() {
    const headerStyle = {
      backgroundColor: 'DodgerBlue',
      padding: '10px',
    };

    return (
      <div className="App" style={headerStyle}>
        <h2 style={{ color: 'white', textAlign: 'center' }}>
          Algorithm Visualization in React
        </h2>
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

export default App;
