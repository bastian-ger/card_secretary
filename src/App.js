import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Footer from './components/Footer/Footer';
import Games from './components/Games/Games';

class App extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <Switch>
          <Route path="/games" component={Games}/>
          <Route path="/" component={Welcome}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
