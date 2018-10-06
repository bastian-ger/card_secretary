import React, { Component } from 'react';
import classes from './Button.css';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const classNames=[classes.Button, classes[this.props.buttonType]];
    if (this.props.small) {
      classNames.push(classes.Small);
    }
    return (
      <button
        className={classNames.join(' ')}
        onClick={this.props.clicked}
        disabled={this.props.disabled}
        >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes =  {
  buttonType: PropTypes.oneOf(['Green', 'Red', 'Purple']).isRequired,
  small: PropTypes.bool,
  clicked: PropTypes.func,
  disabled: PropTypes.bool
}

export default Button;
