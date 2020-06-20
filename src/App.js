import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import User from './components/user';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            goto /user/:id
          </Route>
          <Route exact path="/user/:id" component={User}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
