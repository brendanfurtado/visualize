import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    const headerStyle = {
      color: 'white',
      textAlign: 'center',
      backgroundColor: 'DodgerBlue',
      padding: '10px',
      margin: '0 auto',
    };
    return (
      <div>
        <h2 style={headerStyle}>
          Algorithm Visualization in React
          <div
            className="ui three item menu"
            style={{ margin: '10px 10px 10px 10px' }}
          >
            <a className="item">Home</a>
            <a className="item">About</a>
            <a className="item">Log In</a>
          </div>
        </h2>
      </div>
    );
  }
}

export default NavBar;
