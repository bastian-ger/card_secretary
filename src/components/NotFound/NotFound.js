import React from 'react';
import classes from './NotFound.css';
import jollies from '../../assets/jollies.jpg';

const NotFound = (props) => {
  return (
    <main className={classes.NotFound}>
      <div className={classes.Background} style={{ backgroundImage: 'url('+ jollies +')'}}></div>
      <h1>Code 404</h1>
      <p>Unfortunately, the page you are looking for does not exist. Please
        check the url!</p>
    </main>
  );
}

export default NotFound;
