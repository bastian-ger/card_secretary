import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css';
import * as authActions from '../../store/actions/auth';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';

class Auth extends Component  {
  state = {
    email: '',
    password: '',
    isSignUpMode: true
  }

  render()  {
    let form = <div>
        <Input
          inputElementType="input"
          type="email"
          placeholder="john@doe.bla"
          required
          value={this.state.email}
          id="email"
          changed={this.emailChangedHandler}
          label="email address"
        />
        <Input
          inputElementType="input"
          type="password"
          minLength={8}
          placeholder="Enter your password"
          required
          value={this.state.password}
          id="password"
          changed={this.passwordChangedHandler}
          label="password"
          pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
        />
        <small>1 upper & 1 lower case letter, one number or special character,
          at least 8 characters</small>
    </div>

    if (this.props.authLoading || this.props.namesLoading ) {
      form = <Spinner />;
    }

    let authRedirect = null;

    let authRedirectPath = '/';
    if (this.state.isSignUpMode) {
      authRedirectPath = '/account';
    }

    if (this.props.isLoggedIn && !this.props.namesLoading) {
      authRedirect = <Redirect to={authRedirectPath} />
    }

    return (
      <section className={classes.Auth}>
        {authRedirect}
        <h1>{this.state.isSignUpMode ? 'SIGN UP' : 'SIGN IN'}</h1>
        <form
          onSubmit={this.submitHandler}>
          {form}
          {this.props.authError ? <p>Error: {this.props.authError.message}</p> : null}
          <Button
            buttonType="Green"
            small
            >
              SUBMIT
            </Button>
        </form>
        <Button
          buttonType="Red"
          small
          clicked={this.switchAuthModeHandler}>
          SWITCH TO {this.state.isSignUpMode ? 'SIGN IN': 'SIGN UP'}
        </Button>
      </section>
    );
  }
  emailChangedHandler = (event) =>  {
    this.setState({
      email: event.target.value
    });
  }
  passwordChangedHandler = (event) =>  {
    this.setState({
      password: event.target.value
    });
  }
  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.email, this.state.password, this.state.isSignUpMode);
  }
  switchAuthModeHandler = () =>  {
    this.setState(prevState => {
      return {isSignUpMode: !prevState.isSignUpMode};
    });
  }
}

const mapStateToProps = state => {
  return {
    authLoading: state.auth.loading,
    authError: state.auth.error,
    isLoggedIn: state.auth.token !== null,
    namesLoading: state.names.namesPatchLoading,
    namesError: state.names.namesPatchError
  };
};

const mapDispatchToProps = dispatch =>  {
  return  {
    onAuth: (email, password, isSignUpMode) => dispatch(authActions.auth(email, password, isSignUpMode))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
