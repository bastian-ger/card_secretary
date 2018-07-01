import React from 'react';
import classes from './StyledLink.css';
import { Link } from 'react-router-dom';

const StyledLink = (props) => {
  return (
    <Link
      to={props.component}
      className={[classes.StyledLink, classes[props.color]].join(' ')}
    >
      {props.children}
    </Link>
  );
}

export default StyledLink;
