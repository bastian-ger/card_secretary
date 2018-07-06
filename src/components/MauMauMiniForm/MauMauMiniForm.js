import React from 'react';
import classes from './MauMauMiniForm.css';
import Aux from '../../hoc/Aux';

const MauMauMiniForm = (props) => {
  return (
    <Aux>
      <label className={classes.Label} htmlFor="limit">What is your maximum point limit?</label>
      <input
        type="text"
        id="limit"
        placeholder="points"
        value={props.value}
        onChange={props.changed}
      />
    </Aux>
  );
}

export default MauMauMiniForm;
