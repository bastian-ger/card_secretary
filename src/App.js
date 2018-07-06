import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Footer from './components/Footer/Footer';
import Games from './components/Games/Games';
import MauMau from './containers/MauMau/MauMau';
import Play_MauMau from './containers/Play_MauMau/Play_MauMau';

class App extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <Switch>
          <Route path="/play/maumau" component={Play_MauMau}/>
          <Route path="/games" component={Games}/>
          <Route path="/maumau" component={MauMau}/>
          <Route path="/" component={Welcome}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
