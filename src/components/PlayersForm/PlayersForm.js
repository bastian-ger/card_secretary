import React, {Component} from 'react';
import classes from './PlayersForm.css';
import Aux from '../../hoc/Aux';
import Button from '../UI/Button/Button';
import { connect } from 'react-redux';
import * as playersActions from '../../store/actions/players';
import * as gameDependentComponentActions from '../../store/actions/gameDependentComponent';
import { withRouter } from 'react-router-dom';

import MauMauMiniForm from '../MauMauMiniForm/MauMauMiniForm';
import Input from '../UI/Input/Input';

class PlayersForm extends Component {
  state = {
    players: {},
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
          onSubmit={this.addNameHandler}
          className={classes.PlayersForm}
        >
          <Input
            inputElementType="input"
            type="text"
            id="name"
            value={this.state.currentPlayerName}
            placeholder="enter between 2 and 10 letters"
            minLength="2"
            maxLength="10"
            label=""
            required
            changed={this.nameChangedHandler}
          />
        <button>Add name</button>
          {gameDependentComponent}
        </form>
        {Object.keys(this.state.players).length > 0 ? <h2>These are your players...</h2> : null}
        <ul>
          {Object.keys(this.state.players).map(player => {
            return (
              <li className={classes.List} key={player} onClick={this.removeNameHandler}>{player}</li>
            );
          })}
        </ul>
        {Object.keys(this.state.players).length > 0 ?
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
    this.setState({
      currentPlayerName: event.target.value,
      touched: true
    });
  }

  addNameHandler = (event) => {
    event.preventDefault();
      const updatedPlayers = {
        ...this.state.players,
        [this.state.currentPlayerName]: 0
      };

      this.setState({
        players: updatedPlayers,
        currentPlayerName: '',
      });
  }

  removeNameHandler = ({currentTarget}) => {
    const updatedPlayers = {
      ...this.state.players
    };
    const nameToBeRemoved = currentTarget.innerText;
    delete updatedPlayers[nameToBeRemoved];

    this.setState({players: updatedPlayers});
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
