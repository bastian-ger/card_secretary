import React, {Component} from 'react';
import classes from './PlayersForm.css';
import Aux from '../../hoc/Aux';
import Button from '../UI/Button/Button';
import { connect } from 'react-redux';
import * as playersActions from '../../store/actions/players';
import * as namesActions from '../../store/actions/names';
import * as gameDependentComponentActions from '../../store/actions/gameDependentComponent';
import { withRouter } from 'react-router-dom';
import Input from '../UI/Input/Input';
import Spinner from '../UI/Spinner/Spinner';

class PlayersForm extends Component {
  state = {
    players: {},
    currentPlayerName: '',
    gameDependentComponentValue: 100,
    hideQuestion: false
  }
  componentDidMount() {
    if (!this.props.namesFromRedux && this.props.isLoggedIn) {
      this.props.onNamesGet(this.props.token, this.props.userId);
    }
  }

  render() {
    let gameDependentComponent = null;
    // Here it is possible to set up games specific inputs
    if (this.props.match.path === '/maumau') {
      gameDependentComponent = <Input
        inputElementType="input"
        type="number"
        id="limit"
        placeholder=""
        label="What is your maximum point limit?"
        min={100}
        step={50}
        required
        small
        value={this.state.gameDependentComponentValue}
        changed={this.changedGameDependentComponentValue} />;
    }
    if (this.props.match.path === '/rummy') {
      gameDependentComponent = <Input
        inputElementType="input"
        type="number"
        id="limit"
        placeholder=""
        label="What is your maximum point limit?"
        min={100}
        step={50}
        required
        small
        value={this.state.gameDependentComponentValue}
        changed={this.changedGameDependentComponentValue} />;
    }

    let questionDefaultNames = null;
    if (this.props.loading) {
      questionDefaultNames = <Spinner />;
    }
    if (this.props.namesFromRedux && !this.state.hideQuestion) {
      questionDefaultNames = (
        <Aux>
          <p>Do you want to use your usual friends' names?</p>
          <Button
            buttonType="Green"
            small
            clicked={this.questionDefaultNamesButtonHandler}
          >
            Yes
          </Button>
          <Button
            buttonType="Red"
            small
            clicked={this.hideQuestionDefaultNames}
          >
            No
          </Button>
        </Aux>
      );
    }

    return (
      <Aux>
        {questionDefaultNames}
        <form
          onSubmit={this.addNameHandler}
          className={classes.PlayersForm}
        >
          <Input
            inputElementType="input"
            type="text"
            id="name"
            value={this.state.currentPlayerName}
            placeholder="enter between 2 and 8 letters"
            minLength={2}
            maxLength={8}
            label=""
            required
            changed={this.nameChangedHandler}
          />
        <Button buttonType="Green" small>Add name</Button>
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

  // this takes the namesFromRedux object and changes it so that it
  // looks like the playersObject in state so that it can be consumed
  // by onAddPlayers(players)
  questionDefaultNamesButtonHandler = (event) => {
    event.preventDefault();
    let adjustedObject = {};
    let value = '';
    for (let prop in this.props.namesFromRedux) {
      if (this.props.namesFromRedux[prop] !== '') {
        value = this.props.namesFromRedux[prop];
        adjustedObject = {
          ...adjustedObject,
          [value]: 0
        }
      }
    }
    this.setState({
      players: adjustedObject,
      hideQuestion: true
    });
  }

  hideQuestionDefaultNames = () => {
    this.setState({
      hideQuestion: true
    });
  }

  startGameHandler = (players) => {
    this.props.onAddPlayers(players);
    this.props.onIncludeGameDependentComponentValue(this.state.gameDependentComponentValue);
    this.props.history.push('/play/type1');
  }
}

const mapStateToProps = state => {
  return {
    namesFromRedux: state.names.names,
    token: state.auth.token,
    userId: state.auth.userId,
    loading: state.names.loading,
    isLoggedIn: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlayers: (players) => dispatch(playersActions.addPlayers(players)),
    onIncludeGameDependentComponentValue: (data) => dispatch(gameDependentComponentActions.includeGameDependentComponentValue(data)),
    onNamesGet: (token, userId) => dispatch(namesActions.namesGet(token, userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayersForm));
