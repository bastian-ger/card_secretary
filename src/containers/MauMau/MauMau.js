import React, { Component } from 'react';
import classes from './MauMau.css';
import PlayersForm from '../../components/PlayersForm/PlayersForm';

class MauMau extends Component {
  render() {
    return (
      <main className={classes.MauMau}>
        <h1>Mau Mau</h1>
        <p>
          Mau Mau is a fantastic card game, which is very popular in countries
          like Germany, USA, Brazil, Poland and the Netherlands. The one who is
          able to get rid of his or her cards first wins the game. Please check
          a search engine to find out more about the rules.
        </p>
        <h2>Please enter the names of all players!</h2>
        <PlayersForm />
      </main>
    );
  }
}

export default MauMau;
