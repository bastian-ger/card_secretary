import React, { Component } from 'react';
import classes from './Play_Type1.css';
import { connect } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import * as playersActions from '../../store/actions/players';
import * as statsActions from '../../store/actions/stats';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import Input from '../../components/UI/Input/Input';

class Play_Type1 extends Component {
  constructor(props) {
    super(props);
    let round = 1;
    if (this.props.stats[0]) {
      round = this.props.stats[this.props.stats.length -1];
    }

    this.state = {
      round: round,
      playersObject: this.props.players,
      showScoreboard: false,
      deleteButtonDisabled: true
    }
  }

render() {
  return (
    <main className={classes.Play_Type1}>
      <h1>Enter Your Points</h1>
      <h2>Round: {this.state.round}</h2>
      <p>Points at the end of round {this.state.round}:</p>
      <form>
        {Object.keys(this.props.players).map(player => {
          return (
            <main key={player}>
              <Input
                inputElementType="input"
                small
                type="number"
                label={player}
                min={0}
                required
                id={player}
                changed={this.inputChangedHandler}
                value={this.state.playersObject[player]}
              />
            </main>
          )
        })}
        <Button
          buttonType="Green"
          clicked={this.enterPointsHandler}
        >
          Enter Points
        </Button>
        <Button
          buttonType="Red"
          clicked={this.removeLastScoreboardItem}
          small
          disabled={this.state.deleteButtonDisabled}
        >
          Delete Last Round
        </Button>
      </form>
      {this.state.showScoreboard ? <ScoreBoard /> : null}
    </main>
  );
  }
  inputChangedHandler = ({target}) =>  {
    let updatedPlayersObject = {
      ...this.state.playersObject,
      [target.id]: target.value
    };

    this.setState({playersObject: updatedPlayersObject});
  }

  enterPointsHandler = (event) => {
    event.preventDefault();
    this.props.onPointsUpdated(this.state.playersObject);
    this.props.onStorePoints(this.state.playersObject, this.state.round);
    this.setState({
      showScoreboard: true
    });

    let updatedPlayersObject = {};
    for (let key in this.state.playersObject) {
      updatedPlayersObject[key] = 0;
    }

    this.setState(prevState => ({
      round: prevState.round + 1,
      playersObject: updatedPlayersObject,
      deleteButtonDisabled: false
    }));
  }
  removeLastScoreboardItem = (event) => {
    event.preventDefault();
    this.props.onDeletePoints();

    let showBoard = true;
    if (this.props.stats.length === 0) {
      showBoard = false;
    }

    let updatedPlayersObject = {};
    for (let key in this.state.playersObject) {
      updatedPlayersObject[key] = 0;
    }

    this.setState(prevState => ({
      round: prevState.round - 1,
      showScoreboard: showBoard,
      playersObject: updatedPlayersObject,
      deleteButtonDisabled: true
    }));
  }
}

const mapStateToProps = state => {
  return {
    players: state.players.players,
    gameDependentComponentValue: state.gameDependentComponentValue.value,
    stats: state.stats
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onPointsUpdated: (players) => dispatch(playersActions.updatePoints(players)),
    onStorePoints: (playersObject, round) => dispatch(statsActions.storePoints(playersObject, round)),
    onDeletePoints: () => dispatch(statsActions.deletePoints())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Play_Type1);
