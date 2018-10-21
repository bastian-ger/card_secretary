import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import AddFriends from '../../components/AddFriends/AddFriends';
import classes from './Account.css';

class Account extends Component {
  state = {
    myName: '',
    numberOfFriends: 0,
    name0: '',
    name1: '',
    name2: '',
    name3: '',
    name4: '',
    name5: '',
    name6: ''
  };
  render() {
    return (
      <main className={classes.Account}>
        <form onSubmit={this.submitHandler}>
          <Input
            inputElementType="input"
            type="text"
            minLength={2}
            maxLength={8}
            required
            placeholder="John"
            value={this.state.myName}
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
          { this.state.myName && this.state.numberOfFriends
            ? <AddFriends numberOfFriends={this.state.numberOfFriends}
              name0={this.state.name0}
              name1={this.state.name1}
              name2={this.state.name2}
              name3={this.state.name3}
              name4={this.state.name4}
              name5={this.state.name5}
              name6={this.state.name6}
              onFriendChange={this.friendsNameHandler}
              /> : null }
          <Button
            buttonType="Green"
            small
            >
              Submit
          </Button>
       </form>
      </main>
    );
  }
  submitHandler = (event) => {
    event.preventDefault();
  }
  nameHandler = (event) => {
    this.setState({
      myName: event.target.value
    });
  }
  numberHandler = (event) => {
    this.setState({
      numberOfFriends: event.target.value
    });
  }
  friendsNameHandler = (event) => {
    console.log(event.target.id);
    switch (event.target.id) {
      case 'name0':
        this.setState({name0: event.target.value});
        break;
      case 'name1':
        this.setState({name1: event.target.value});
        break;
      case 'name2':
        this.setState({name2: event.target.value});
        break;
      case 'name3':
        this.setState({name3: event.target.value});
        break;
      case 'name4':
        this.setState({name4: event.target.value});
        break;
      case 'name5':
        this.setState({name5: event.target.value});
        break;
      case 'name6':
        this.setState({name6: event.target.value});
        break;
      default:
        // do nothing
    }
  }
}

export default Account;
