import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css';
import * as authActions from '../../store/actions/auth';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';
import DisplayErrors from '../../components/DisplayErrors/DisplayErrors';

class Auth extends Component  {
  state = {
    email: '',
    password: '',
    isSignUpMode: false
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

    if (this.props.authLoading || this.props.namesPatchLoading ) {
      form = <Spinner />;
    }

    let authRedirect = null;

    if (this.props.isLoggedIn && !this.props.namesPatchLoading) {
      authRedirect = <Redirect to="/account" />
    }

    return (
      <section className={classes.Auth}>
        {authRedirect}
        <h1>SIGN IN</h1>
        <p>Sign Up is deactivated. This area of the website is only accessible
          for invited people!</p>
        <form
          onSubmit={this.submitHandler}>
          {form}
          <DisplayErrors errors={[this.props.authError, this.props.namesPatchError]}/>
          <Button
            buttonType="Green"
            small
            >
              SUBMIT
            </Button>
        </form>
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
}

const mapStateToProps = state => {
  return {
    authLoading: state.auth.loading,
    authError: state.auth.error,
    isLoggedIn: state.auth.token !== null,
    namesPatchLoading: state.names.namesPatchLoading,
    namesPatchError: state.names.namesPatchError
  };
};

const mapDispatchToProps = dispatch =>  {
  return  {
    onAuth: (email, password, isSignUpMode) => dispatch(authActions.auth(email, password, isSignUpMode))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
