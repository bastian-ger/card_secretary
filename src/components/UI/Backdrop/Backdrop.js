import React from 'react';
import classes from './Backdrop.css';

// This component has been copied from Maximilian Schwarzmüller's course
// "React 16 - The Complete Guide" on Udemy

const Backdrop = (props) => (
  props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default Backdrop;
