import React from 'react';
import classes from './Games.css';
import StyledLink from '../StyledLink/StyledLink';

const Games = (props) => {
  return (
    <main className={classes.Games}>
      <h1>Which card game do you want to play?</h1>
      <StyledLink
        component="MauMau"
        color="Purple"
      >
        Mau Mau
      </StyledLink>
      <StyledLink
        component="Rommy"
        color="Red"
      >
        Rummy
      </StyledLink>
      <StyledLink
        component="Whatever"
        color="Green"
      >
        Whatever
      </StyledLink>
    </main>
  );
}

export default Games;
