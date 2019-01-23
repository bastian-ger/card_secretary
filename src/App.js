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
import About from './components/About/About';
import Auth from './containers/Auth/Auth';
import Account from './containers/Account/Account';
import ChangePassword from './containers/ChangePassword/ChangePassword';
import DeleteAccount from './containers/DeleteAccount/DeleteAccount';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
          <Route path="/about" component={About}/>
          <Route path="/auth" component={Auth}/>
          {this.props.isLoggedIn ? <Route path="/changePassword" component={ChangePassword}/> : null}
          {this.props.isLoggedIn ? <Route path="/deleteAccount" component={DeleteAccount}/> : null}
          {this.props.isLoggedIn ? <Route path="/account" component={Account}/> : null}
          <Route path="/" exact component={Welcome}/>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.token !== null
  };
};

// Switch only works here with connect() when there is withRouter before it!
// See: https://reacttraining.com/react-router/web/guides/redux-integration
export default withRouter(connect(mapStateToProps)(App));
