import React from 'react';
import classes from './Welcome.css';
import MyCarousel from '../MyCarousel/MyCarousel';

const Welcome = (props) => {
  return (
    <main className={classes.Welcome}>
      <h1>Card Game Secretary</h1>
        <MyCarousel />
        <p>
          This app will help you record the scores of your card games.
          Check the list of available card games. I will try to add more in the
          future. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Et obcaecati eos, nihil, quaerat vel odit dolores facere error aliquam
          beatae eaque consectetur totam rerum repudiandae. Temporibus laboriosam,
          voluptate sed incidunt.
        </p>

      <h2>Madame Secretary currently takes care of the following games...</h2>
      <ul>
        <li>Mau Mau</li>
        <li>Romme (German version)</li>
        <li>More to come...</li>
      </ul>
    </main>
  );
}

export default Welcome;
