import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './DeleteAccount.css';
import * as authActions from '../../store/actions/auth';
import * as namesActions from '../../store/actions/names';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import DisplayErrors from '../../components/DisplayErrors/DisplayErrors';

class DeleteAccount extends Component  {
  render() {
    let form = <form>
      <Button
        buttonType="Green"
        small
        clicked={this.buttonYesHandler}
        >
        YES
      </Button>
      <Button
        buttonType="Red"
        small
        clicked={this.buttonNoHandler}
        >
        NO
      </Button>
    </form>

    if (this.props.deleteAccountError | this.props.deleteAccountSuccess) {
      form = null;
    }

    if (this.props.deleteAccountLoading || this.props.namesDeleteDatabaseLoading) {
      form = <Spinner />;
    }

    let confirmationOfSuccess = null;

    if (this.props.deleteAccountSuccess) {
      confirmationOfSuccess = (
        <div>
          <p>Your account was deleted successfully!</p>
          <Button
            buttonType="Purple"
            small
            clicked={this.goToMainPageHandler}
            >
            logout & go to main page
          </Button>
        </div>
      );
    }

    if (this.props.deleteAccountError | this.props.namesDeleteDatabaseError) {
      confirmationOfSuccess = (
        <div>
          <p>Due to an error your account wasn't deleted!
            Please, click the button, sign in and try again!</p>;
          <Button
            buttonType="Purple"
            small
            clicked={this.goToMainPageHandler}
            >
            logout & go to main page
          </Button>
        </div>
      );
    }

    return (
      <main className={classes.DeleteAccount}>
        { this.props.deleteAccountSuccess ? <h1>We will miss you!</h1>
          : <h1>Do you really want to delete your account permanently?</h1> }
        {form}
        {confirmationOfSuccess}
        <DisplayErrors errors={[this.props.deleteAccountError, this.props.namesDeleteDatabaseError]} />
      </main>
    );
  }

  goToMainPageHandler = (event) => {
    event.preventDefault();
    this.props.history.push('/');
    this.props.onlogout();
    this.props.onDeleteAccountReset();
    this.props.onNamesDeleteDatabaseReset();
  }

  buttonYesHandler = (event) => {
    event.preventDefault();
    this.props.onDeleteAccount(this.props.token, this.props.userId);
  }
  buttonNoHandler = (event) => {
    event.preventDefault();
    this.props.history.push('/');
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
    deleteAccountLoading: state.auth.deleteAccountLoading,
    deleteAccountError: state.auth.deleteAccountError,
    deleteAccountSuccess: state.auth.deleteAccountSuccess,
    namesDeleteDatabaseError: state.names.namesDeleteDatabaseError,
    namesDeleteDatabaseLoading: state.names.namesDeleteDatabaseLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteAccount: (token, userId) => dispatch(authActions.deleteAccount(token, userId)),
    onlogout: () => dispatch(authActions.logout()),
    onDeleteAccountReset: () => dispatch(authActions.deleteAccountReset()),
    onNamesDeleteDatabaseReset: () => dispatch(namesActions.namesDeleteDatabaseReset())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);
