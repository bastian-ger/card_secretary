import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import AddFriends from '../../components/AddFriends/AddFriends';
import { connect } from 'react-redux';
import * as namesActions from '../../store/actions/names';
import DisplayErrors from '../../components/DisplayErrors/DisplayErrors';
import { Redirect } from 'react-router-dom';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Account.css';

class Account extends Component {
  state = {
    names: {
      myName: '',
      name0: '',
      name1: '',
      name2: '',
      name3: '',
      name4: '',
      name5: '',
      name6: ''
    },
    numberOfFriends: 0,
    hideQuestion: false,
    finished: false
  };

  componentDidMount() {
    if (!this.props.names) {
      this.props.onNamesGet(this.props.token, this.props.userId);
    }
  }

  render() {
    let form = null;

    if (this.state.hideQuestion) {
      form = <form onSubmit={this.submitHandler}>
        <Input
          inputElementType="input"
          type="text"
          minLength={2}
          maxLength={8}
          required
          placeholder="John"
          value={this.state.names.myName}
          id="myName"
          changed={this.nameHandler}
          label="Type in your first name"
        />
        <Input
          small
          inputElementType="input"
          type="number"
          max={7}
          min={0}
          step={1}
          required
          value={this.state.numberOfFriends}
          id="numberOfFriends"
          changed={this.numberHandler}
          label="Select the number friends you usually play with"
        />
        { this.state.names.myName && this.state.numberOfFriends
          ? <AddFriends numberOfFriends={this.state.numberOfFriends}
            name0={this.state.names.name0}
            name1={this.state.names.name1}
            name2={this.state.names.name2}
            name3={this.state.names.name3}
            name4={this.state.names.name4}
            name5={this.state.names.name5}
            name6={this.state.names.name6}
            onFriendChange={this.friendsNameHandler}
            /> : null }
        <Button
          buttonType="Green"
          small
          >
            Submit
        </Button>
        <DisplayErrors errors={[this.props.error, this.props.namesPatchError, this.props.namesPost]} />
     </form>;
   }

   let question = null;

   if (!this.state.hideQuestion) {
     if (this.props.names) {
       if (this.props.names.myName === '') {
         question = (
           <div>
             <p>Would you like to add some default names?</p>
             <Button
               buttonType="Green"
               clicked={this.addDefaultNamesYesHandler}
               small
               >
               Yes
             </Button>
             <Button
               buttonType="Red"
               clicked={this.addDefaultNamesNoHandler}
               small
               >
               No
             </Button>
           </div>
         );
       }
       else {
         question = (
           <div>
             <p>Would you like to change your default names?</p>
             <Button
               buttonType="Green"
               clicked={this.changeDefaultNamesYesHandler}
               small
               >
               Yes
             </Button>
             <Button
               buttonType="Red"
               clicked={this.changeDefaultNamesNoHandler}
               small
               >
               No
             </Button>
           </div>
         );
       }
     }
   }

   if (!this.props.names) {
     form = <Spinner />
     question = <Spinner />
   }

    return (
      <main className={classes.Account}>
        {this.state.finished ? <Redirect to='/' /> : null}
        {question}
        {form}
      </main>
    );
  }
  addDefaultNamesYesHandler = (event) => {
    event.preventDefault();
    this.setState({
      hideQuestion: true
    });
  }

  addDefaultNamesNoHandler = (event) => {
    event.preventDefault();
    this.setState({
      finished: true
    });
  }

  changeDefaultNamesYesHandler = (event) => {
    event.preventDefault();
    let counter = 0;
    const names = this.props.names;
    for (let prop in names) {
      if (prop === 'myName') {
        continue;
      }
      if (names[prop] !== '') {
        counter++;
      }
    }
    this.setState({
      names: names,
      numberOfFriends: counter,
      hideQuestion: true
    });
  }
  changeDefaultNamesNoHandler = (event) => {
    event.preventDefault();
    this.setState({
      finished: true
    });
  }
  submitHandler = (event) => {
    event.preventDefault();
    this.props.onNamesPost(this.state.names, this.props.userId, this.props.token);
    this.setState({
      finished: true
    });
  }
  nameHandler = ({target}) => {
    let names = {...this.state.names};
    names.myName = target.value;
    this.setState({names});
  }
  numberHandler = (event) => {
    this.setState({
      numberOfFriends: event.target.value
    });
  }
  friendsNameHandler = ({target}) => {
    const names = {...this.state.names};
    switch (target.id) {
      case 'name0':
        names.name0 = target.value;
        this.setState({names});
        break;
      case 'name1':
        names.name1 = target.value;
        this.setState({names});
        break;
      case 'name2':
        names.name2 = target.value;
        this.setState({names});
        break;
      case 'name3':
        names.name3 = target.value;
        this.setState({names});
        break;
      case 'name4':
        names.name4 = target.value;
        this.setState({names});
        break;
      case 'name5':
        names.name5 = target.value;
        this.setState({names});
        break;
      case 'name6':
        names.name6 = target.value;
        this.setState({names});
        break;
      default:
        // do nothing
    }
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    token: state.auth.token,
    authLoading: state.auth.loading,
    namesPatchLoading: state.names.namesPatchLoading,
    namesGetLoading: state.names.namesGetLoading,
    error: state.auth.error,
    namesPatchError: state.names.namesPatchError,
    namesPostError: state.names.namesPostError,
    names: state.names.names
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNamesPost: (names, userId, token) => dispatch(namesActions.namesPost(names, userId, token)),
    onNamesGet: (token, userId) => dispatch(namesActions.namesGet(token, userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
