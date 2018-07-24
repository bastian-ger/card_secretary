import React, { Component } from 'react';
import classes from './ScoreBoard.css';
import { connect } from 'react-redux';

class ScoreBoard extends Component {
  // connect class from css module with Bootstrap class!
  render() {
    console.log('this.props.statsArray', this.props.statsArray);
    let elements = this.props.statsArray.map(stat => {
      return (<article
        key={stat.round}
        >
        <h3>
          Round: {stat.round}
        </h3>
        <ul className="row">
          {this.generateLIs(stat.playersObject)}
        </ul>
      </article>);
    })

    return (
      <div className={classes.ScoreBoard}>
        <h2>current standings</h2>
        <section>
          {elements}
          <article className={classes.Total}>
            <h3>Total:</h3>
            <ul className="row">
              {this.generateTotal(this.props.statsArray)}
            </ul>
          </article>
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
    const array = [];
    for (let prop in totalPlayersObject) {
      array.push(<li key={prop} className="col-6 col-sm-3 col-md-2"><span>{prop}:</span> {totalPlayersObject[prop]}</li>);
    }
    console.log(array);
    return array;
  }
}

const mapStateToProps = state => {
  return {
    statsArray: state.stats,
    gameDependentComponentValue: state.gameDependentComponentValue.value
  }
}

export default connect(mapStateToProps)(ScoreBoard);
