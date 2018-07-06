import React, {Component} from 'react';
import classes from './PlayersForm.css';
import Aux from '../../hoc/Aux';
import Button from '../UI/Button/Button';
import { connect } from 'react-redux';
import * as playersActions from '../../store/actions/players';
import * as gameDependentComponentActions from '../../store/actions/gameDependentComponent';
import { withRouter } from 'react-router-dom';

import MauMauMiniForm from '../MauMauMiniForm/MauMauMiniForm';

class PlayersForm extends Component {
  state = {
    players: [],
    currentPlayerName: '',
    gameDependentComponentValue: 100
  }

  render() {
    let gameDependentComponent = null;
    if (this.props.match.path === '/maumau') {
      gameDependentComponent = <MauMauMiniForm value={this.state.gameDependentComponentValue} changed={this.changedGameDependentComponentValue} />;
    }

    return (
      <Aux>
        <form
          onSubmit={this.submitHandler}
          className={classes.PlayersForm}
        >
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            value={this.state.currentPlayerName}
            placeholder="first name"
            onChange={this.nameChangedHandler}
          />
          <small>please enter at least 2 letters!</small>
        <button onClick={this.addNameHandler}>Add name</button>
          {gameDependentComponent}
        </form>
        {this.state.players.length > 0 ? <h2>These are your players...</h2> : null}
        <ul>
          {this.state.players.map(player => {
            return (
              <li className={classes.List} key={player} onClick={this.removeNameHandler}>{player}</li>
            );
          })}
        </ul>
        {this.state.players.length > 0 ?
          <Aux>
            <small>Click on one of the names in order to remove it.</small>
            <Button
              buttonType="Green"
              clicked={() => this.startGameHandler(this.state.players)}
            >
              Start Game!
            </Button>
          </Aux>
        : null}
      </Aux>
    );
  }

  nameChangedHandler = (event) => {
    this.setState({currentPlayerName: event.target.value});
  }

  submitHandler = (event) => {
    event.preventDefault();
  }

  addNameHandler = (event) => {
    if (this.state.currentPlayerName.length > 1) {
      const updatedPlayers = [...this.state.players, this.state.currentPlayerName];
      this.setState({
        players: updatedPlayers,
        currentPlayerName: ''
      });
    }
  }

  removeNameHandler = (event) => {
    const updatedPlayers = this.state.players.filter(player => player !== event.currentTarget.innerText);
    this.setState({players: updatedPlayers});
    console.log('player name removed', this.state.players);
  }

  // this keeps track of the value inside the gameDependentComponent
  changedGameDependentComponentValue = (event) => {
    this.setState({gameDependentComponentValue: event.target.value});
  }

  startGameHandler = (players) => {
    this.props.onAddPlayers(players);
    this.props.onIncludeGameDependentComponentValue(this.state.gameDependentComponentValue);
    this.props.history.push('/play/maumau');
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlayers: (players) => dispatch(playersActions.addPlayers(players)),
    onIncludeGameDependentComponentValue: (data) => dispatch(gameDependentComponentActions.includeGameDependentComponentValue(data))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(PlayersForm));
