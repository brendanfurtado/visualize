import React from 'react';
import NavBar from '../components/NavBar';
import SortingCard from '../components/SortingCard';

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <SortingCard />
      </div>
    );
  }
}

export default Home;
