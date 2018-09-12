import React, { Component } from 'react';
import classes from './Rummy.css';
import PlayersForm from '../../components/PlayersForm/PlayersForm';

class Rummy extends Component {
  render() {
    return (
      <main className={classes.Rummy}>
        <h1>Rummy</h1>
        <p>
          The popular card game Rummy is played in many countries around the globe.
          There are many variations of this game. The common goal of all these variations
          is to build sets with three or four cards of the same rank and runs with
          three or more consecutive cards of the same suit. The one who disposes all of
          his cards first, wins the game. Please check a search engine for the
          existing variations and their respective rules.
        </p>
        <h2>Please choose or enter the names of all players!</h2>
        <PlayersForm />
      </main>
    );
  }
}

export default Rummy;
