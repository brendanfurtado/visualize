import React from 'react';
// import BarChart from './charts/BarChart';
import NavBar from './components/NavBar';
import SortingCard from './components/SortingCard';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SortingPage from './Views/SortingPage';
import About from './Views/About';
import Navigation from './Navigation';
import Home from './Views/Home';
// data: [12, 13, 2, 20, 7, 10],
//[3, 38, 5, 44, 15, 36, 26, 27, 2, 46]
//[12, 14, 13, 12, 2, 20, 7, 10]
class App extends React.Component {
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
    // const headerStyle = {
    //   backgroundColor: 'DodgerBlue',
    //   padding: '10px',
    // };

    return (
      <div className="App">
        {/* <NavBar /> */}

        {/* <div class="ui stackable four column grid"> */}
        {/* <div class="column"> */}

        {/* <BrowserRouter>
          <div>
            <Navigation />

            <Switch>
              <Route path="/sorting" component={SortingPage} exact></Route>
            </Switch>
          </div>
        </BrowserRouter> */}
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Router>

        {/* </div> */}
        {/* <div class="column"></div>
          <div class="column"></div>
          <div class="column"></div> */}
        {/* </div> */}
        {/* <BarChart
          data={this.state.data}
          width={this.state.width}
          height={this.state.height}
        />
        <button className="ui primary button" onClick={() => this.rerender()}>
          Reset
        </button> */}
      </div>
    );
  }
}

export default App;
