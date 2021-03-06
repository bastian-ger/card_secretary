import React from 'react';
import classes from './Games.css';
import StyledLink from '../UI/StyledLink/StyledLink';

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
        component="Rummy"
        color="Red"
      >
        Rummy
      </StyledLink>
    </main>
  );
}

export default Games;
