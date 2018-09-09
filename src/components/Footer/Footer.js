import React from 'react';
import classes from './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => {
  return (
    <div className={classes.Footer}>
      {/* fab is only a prefix here and does not need to be explicitly loaded */}
      {/* from the fontawesome package */}
      <a
        href="https://twitter.com/?lang=de"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        >
        <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" />
      </a>
      <a
        href="https://github.com/bastian-ger/tiny-book-reviewer"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github"
        >
        <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
      </a>
    </div>
  );
}

export default Footer;
