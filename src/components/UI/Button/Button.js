import React from 'react';
import classes from './Button.css';

const Button = (props) => {
  const classNames=[classes.Button, classes[props.buttonType]];
  if (props.small) {
    classNames.push(classes.Small);
  }
  return (
    <button
      className={classNames.join(' ')}
      onClick={props.clicked}
      disabled={props.disabled}
      >
      {props.children}
    </button>
  );
}
export default Button;
