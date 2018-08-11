import React, { Component } from 'react';
import classes from './ScoreBoard.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// some classNames here for complete access
const fADivClassNames = ['col-2', classes.Smiley];
const scoreDivClassNames = ['col-10', classes.Score];

class ScoreBoard extends Component {
  render() {
    let elements = this.props.statsArray.map(stat => {
      return (<article
        className="row"
        key={stat.round}
      >
        <div className={fADivClassNames.join(' ')}>
          <FontAwesomeIcon icon={["far", "smile"]} size="5x" />
        </div>
        <div className={scoreDivClassNames.join(' ')}>
          <h3>
            Round: {stat.round}
          </h3>
          <ul className="row">
            {this.generateLIs(stat.playersObject)}
          </ul>
        </div>
      </article>);
    })

    const classNames=[classes.Total, 'row'];
    return (
      <div className={classes.ScoreBoard}>
        <h2>current standings</h2>
        <p>maximum point limit: {this.props.gameDependentComponentValue}</p>
        <section>
          <article className={classNames.join(' ')}>
            <div className={fADivClassNames.join(' ')}>
              <FontAwesomeIcon icon={["far", "smile"]} size="5x" />
            </div>
            <div className={scoreDivClassNames.join(' ')}>
              <h3>Total:</h3>
              <ul className="row">
                {this.generateTotal(this.props.statsArray)}
              </ul>
            </div>
          </article>
          {this.getWinnerAndLoser(this.props.statsArray)}
          {elements}
        </section>
      </div>
    );
  }
  generateLIs = (playersObject) => {
    let array = [];
    for (let key in playersObject) {
      array.push(<li key={key} className="col-6 col-sm-3 col-md-2"><span>{key}:</span> {playersObject[key]}</li>);
    }
    return array;
  }
  generateTotal = (statsArray) => {
    const totalPlayersObject = this.getTotalPlayersObject(statsArray);
    const array = [];
    for (let prop in totalPlayersObject) {
      array.push(<li key={prop} className="col-6 col-sm-3 col-md-2"><span>{prop}:</span> {totalPlayersObject[prop]}</li>);
    }
    return array;
  }
  getWinnerAndLoser = (statsArray) => {
    const totalPlayersObject = this.getTotalPlayersObject(statsArray);
    const losers = [];
    let jsxElements = [];
    for (let property in totalPlayersObject) {
      if (totalPlayersObject[property] >= this.props.gameDependentComponentValue) {
        losers.push(property);
      }
    }
    if (losers.length <= 0) {
      return null;
    }
    else if (losers.length === 1) {
      const classNames = [classes.Loser, 'row']
      jsxElements.push(this.getWinner(statsArray));
      jsxElements.push(
        <article className={classNames.join(' ')} key={losers[0]}>
          <div className={fADivClassNames.join(' ')}>
            <FontAwesomeIcon icon={["far", "frown"]} size="5x" />
          </div>
          <div className={scoreDivClassNames.join(' ')}>
            <h3>The loser is: {losers[0]}</h3>
            <p>Next time you will win!</p>
          </div>
        </article>
      );
      return jsxElements;
    }
    else {
      const classNames = [classes.Winner, 'row']
      jsxElements.push(this.getWinner(statsArray));
      jsxElements.push(
        <article className={classNames.join(' ')} key={losers[0]}>
          <div className={fADivClassNames.join(' ')}>
            <FontAwesomeIcon icon={["far", "frown"]} size="5x" />
          </div>
          <div className={scoreDivClassNames.join(' ')}>
            <h3>The losers are: {losers.join(' and ')}!!</h3>
            <p>Next time you will win!</p>
          </div>
        </article>
      );
      return jsxElements;
    }
  }
  getWinner = (statsArray) => {
    const totalPlayersObject =  this.getTotalPlayersObject(statsArray);
    let currentLowestValueKey = Object.keys(totalPlayersObject)[0];
    let winners = [];
    let lowestValue = Object.values(totalPlayersObject)[0];
    for (let key in totalPlayersObject) {
      if (totalPlayersObject[key] < lowestValue) {
        lowestValue = totalPlayersObject[key];
        currentLowestValueKey = key;
      }
    }
    winners.push(currentLowestValueKey);
    for (let property in totalPlayersObject) {
      if (totalPlayersObject[property] === lowestValue && property !== currentLowestValueKey) {
        winners.push(property);
      }
    }
    if (winners.length === 1) {
      const classNames = [classes.Winner, 'row'];
      return (
        <article className={classNames.join(' ')} key={winners[0]}>
          <div className={fADivClassNames.join(' ')}>
            <FontAwesomeIcon icon={["far", "star"]} size="5x" />
          </div>
          <div className={scoreDivClassNames.join(' ')}>
            <h3>The winner is: {winners[0]}</h3>
            <p>Congratulations!!</p>
          </div>
        </article>
      );
    }
    else {
      const classNames = [classes.Winner, 'row'];
      return (
        <article className={classNames.join(' ')} key={winners[0]}>
          <div className={fADivClassNames.join(' ')}>
            <FontAwesomeIcon icon={["far", "star"]} size="5x" />
          </div>
          <div className={scoreDivClassNames.join(' ')}>
            <h3>The Winners are: {winners.join(' and ')}!!</h3>
            <p>Congratulations!!</p>
          </div>
        </article>
      );
    }
  }
  getTotalPlayersObject = (statsArray) => {
    let totalPlayersObject = {};

    for (let property in statsArray[0].playersObject) {
      totalPlayersObject[property] = 0;
    }

    let sum;
    for (let key in totalPlayersObject) {
      sum = 0;
      for (let i = 0; i < statsArray.length; i++) {
        sum = sum + parseInt(statsArray[i].playersObject[key], 10);
      }
      totalPlayersObject[key] = sum;
    }
    return totalPlayersObject;
  }
}

const mapStateToProps = state => {
  return {
    statsArray: state.stats,
    gameDependentComponentValue: state.gameDependentComponentValue.value
  }
}

export default connect(mapStateToProps)(ScoreBoard);
