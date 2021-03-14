import React from 'react';
import BarChart from './charts/BarChart';
// data: [12, 13, 2, 20, 7, 10],
//[3, 38, 5, 44, 15, 36, 26, 27, 2, 46]
class App extends React.Component {
  state = {
    data: [12, 13, 2, 20, 7, 10],
    width: 700,
    height: 500,
    id: 'root',
  };

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
      </div>
    );
  }
}

export default App;
