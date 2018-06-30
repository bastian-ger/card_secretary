import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Welcome}/>
      </Switch>
    );
  }
}

export default App;
