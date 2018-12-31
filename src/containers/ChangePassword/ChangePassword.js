import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './ChangePassword.css';
import * as authActions from '../../store/actions/auth';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import DisplayErrors from '../../components/DisplayErrors/DisplayErrors';

class ChangePassword extends Component  {
  state = {
    newPassword: ''
  };
  render() {
    let form = <form>
      <Input
        inputElementType="input"
        type="password"
        minLength={8}
        placeholder="Enter new password"
        required
        value={this.state.newPassword}
        id="password"
        changed={this.passwordChangedHandler}
        label="password"
        pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
        />
      <small>1 upper & 1 lower case letter, one number or special character,
        at least 8 characters</small>
      <Button
        buttonType="Red"
        small
        clicked={this.submitHandler}
        >
        change password now
      </Button>
    </form>;

    if (this.props.changePasswordError | this.props.changePasswordSuccess) {
      form = null;
    }

    if (this.props.changePasswordLoading) {
      form = <Spinner />;
    }

    let confirmationOfSuccess = null;

    if (this.props.changePasswordSuccess) {
      confirmationOfSuccess = <p>Your password was changed successfully!</p>;
    }

    return (
      <main className={classes.ChangePassword}>
        <h1>Change your password</h1>
        {form}
        {confirmationOfSuccess}
        <DisplayErrors errors={[this.props.changePasswordError]} />
        {this.props.changePasswordError | this.props.changePasswordSuccess
          ? <Button
            buttonType="Purple"
            small
            clicked={this.goToMainPageHandler}
            >
            advance to main page
          </Button>
          : null }
      </main>
    );
  }
  passwordChangedHandler = ({target}) => {
    this.setState({
      newPassword: target.value
    });
  }

  goToMainPageHandler = (event) => {
    event.preventDefault();
    this.props.history.push("/");
    this.props.onChangePasswordReset();
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onChangePassword(this.props.token, this.state.newPassword);
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    changePasswordLoading: state.auth.changePasswordLoading,
    changePasswordError: state.auth.changePasswordError,
    changePasswordSuccess: state.auth.changePasswordSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangePassword: (token, newPassword) => dispatch(authActions.changePassword(token, newPassword)),
    onChangePasswordReset: () => dispatch(authActions.changePasswordReset())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
