import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SortingPage from './Views/SortingPage';
import About from './Views/About';
import Navigation from './Navigation';
import Home from './Views/Home';

class App extends React.Component {
  render() {
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
          <Switch>
            {/* <Navigation /> */}
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/sorting" exact component={SortingPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
