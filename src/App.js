import React, { Component } from 'react';
import classes from './App.css';
import { Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Footer from './components/Footer/Footer';
import Games from './components/Games/Games';
import MauMau from './containers/MauMau/MauMau';
import Play_Type1 from './containers/Play_Type1/Play_Type1';
import Rummy from './containers/Rummy/Rummy';
import NotFound from './components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <MyNavbar />
        <Switch>
          <Route path="/play/type1" component={Play_Type1}/>
          <Route path="/games" component={Games}/>
          <Route path="/maumau" component={MauMau}/>
          <Route path="/rummy" component={Rummy}/>
          <Route path="/" exact component={Welcome}/>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
