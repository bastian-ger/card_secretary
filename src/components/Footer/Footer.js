import React from 'react';
import classes from './Footer.css';
import FontAwesomeLink from '../UI/FontAwesomeLink/FontAwesomeLink';

const Footer = (props) => {
  return (
    <div className={classes.Footer}>
      <FontAwesomeLink
        classes={['fab', 'fa-twitter', 'fa-3x', 'purple', 'mr-2', 'mr-sm-3']}
        url="https://twitter.com/?lang=de"
        name="Twitter"
      />
      <FontAwesomeLink
        classes={['fab', 'fa-github', 'fa-3x', 'purple', 'mr-2', 'mr-sm-3']}
        url="https://github.com/bastian-ger/tiny-book-reviewer"
        name="Twitter"
      />
    </div>
  );
}

export default Footer;
