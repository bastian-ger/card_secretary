import React from 'react';
import classes from './DisplayErrors.css';

const DisplayErrors = (props) => {
  let errorItems = [];
  for (let i = 0; i < props.errors.length; i++) {
    if (props.errors[i]) {
      errorItems.push(props.errors[i].message);
    }
  }
  return (
    <div className={classes.DisplayErrors}>
      {errorItems.length > 0 ? <p><span>Error(s): </span>{errorItems.join(', ')}</p> : null}
    </div>
  );
}

export default DisplayErrors;
