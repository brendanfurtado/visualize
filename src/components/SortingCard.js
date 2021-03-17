import React from 'react';
import chart from './images/chart2.png';
class SortingCard extends React.Component {
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
            <a className="header">Sorting Algorithms</a>
            {/* <div class="meta">
            <span class="date">Joined in 2013</span>
          </div> */}
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
