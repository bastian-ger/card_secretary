  import React, { Component } from 'react';
  import classes from './Input.css';
  import PropTypes from "prop-types";

  // Parts of this component are copied from Maximilian Schwarzmüller's course
  // "React 16 - The Complete Guide" on Udemy
  class Input extends Component {
    render() {
      let inputEl = null;

      let classNames = [classes.InputEl];
      if (this.props.small) {
        classNames.push(classes.Small);
      }

      switch (this.props.inputElementType) {
        case ('input'):
          inputEl = <input
            className={classNames.join(' ')}
            placeholder={this.props.placeholder}
            type={this.props.type}
            minLength={this.props.minLength}
            maxLength={this.props.maxLength}
            max={this.props.max}
            min={this.props.min}
            step={this.props.step}
            required={this.props.required}
            value={this.props.value}
            id={this.props.id}
            onChange={this.props.changed}
            pattern={this.props.pattern}
            />;
          break;
        case ('textarea'):
          inputEl = <textarea
            className={classNames.join(' ')}
            placeholder={this.props.placeholder}
            value={this.props.value}
            id={this.props.id}
            maxLength={this.props.maxLength}
            required={this.props.required}
            onChange={this.props.changed} />;
          break;
        case ('select'):
          inputEl = (
            <select
              className={classNames.join(' ')}
              {...this.props.elementConfig}
              value={this.props.changed}
              id={this.props.id}
            >
              {this.props.elementConfig.options.map(option => {
                return (
                  <option
                    value={option.value}
                    onChange={this.props.changed}
                    key={option.value}
                    required={this.props.required}
                  >
                    {option.displayValue}
                  </option>
                );
              })}
            </select>
          );
          break;
        default:
          inputEl = <input
            className={classes.InputEl}
            type={this.props.type}
            minLength={this.props.minLength}
            maxLength={this.props.maxLength}
            max={this.props.max}
            min={this.props.min}
            step={this.props.step}
            placeholder={this.props.placeholder}
            required={this.props.required}
            value={this.props.value}
            id={this.props.id}
            onChange={this.props.changed}
            pattern={this.props.pattern}
          />;
      }

      return (
        <div className={classes.Input}>
          <label className={classes.Label} htmlFor={this.props.id}>{this.props.label}</label>
              {inputEl}
        </div>
      );
    }
  }

  // when using a select element for the first time, add elementConfig to this list!
  Input.propTypes = {
    small: PropTypes.bool,
    inputElementType: PropTypes.oneOf(['input', 'textarea', 'select']).isRequired,
    type: PropTypes.oneOf(['text', 'number', 'email', 'password']).isRequired,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    max: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    id: PropTypes.string.isRequired,
    changed: PropTypes.func.isRequired,
    label: PropTypes.string,
    pattern: PropTypes.string
  }

  export default Input;
