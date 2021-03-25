import React from 'react';
import chart from './images/chart2.png';

class SortingCard extends React.Component {
  handleSearch() {
    window.location.assign('/sorting');
  }

  render() {
    const panelStyle = {
      paddingTop: '100px',
    };

    return (
      <div className="Panel" style={panelStyle}>
        <div className="ui centered card" style={{ minWidth: '400px' }}>
          <div className="image">
            <img src={chart} alt="" />
          </div>
          <div className="content">
            <a onClick={this.handleSearch} className="header">
              Sorting Algorithms
            </a>

            <div className="description">Visualize Sorting Algorithms!.</div>
          </div>
          <div className="extra content">
            <p>
              <i className="ellipsis vertical icon"></i>
              Bubble Sort, Selection Sort, etc.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SortingCard;
