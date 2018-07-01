import React from 'react';
/**
* Represents an accessibility-friendly Fontawesome link.
* @param {string} url - The url for the link.
* @param {string} classes - The class names. Use FA and other class names.
* @param {string} name - The name of the website, which this link links to.
*/
const FontAwesomeLink = (props) => {
  return (
    <div className="d-inline">
      <a href={props.url} target="_blank">
        <i className={props.classes.join(' ')} aria-label={props.name}></i>
      </a>
    </div>
  );
}
export default FontAwesomeLink;
