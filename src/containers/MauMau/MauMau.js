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
          able to get rid of his or her cards first wins the game. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ullam et suscipit,
          deleniti sit aliquid quis adipisci vel corporis nemo, dolorem
          necessitatibus harum alias laudantium magnam voluptatibus cumque!
          Labore, itaque minus.
        </p>
        <h2>Please choose or enter the names of all players!</h2>
        <PlayersForm />
      </main>
    );
  }
}

export default MauMau;
