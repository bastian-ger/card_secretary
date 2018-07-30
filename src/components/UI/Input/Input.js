  import React from 'react';
  import classes from './Input.css';

  // Parts of this component are copied from Maximilian Schwarzmüller's course
  // "React 16 - The Complete Guide" on Udemy
  const Input = (props) => {
    let inputEl = null;

    let classNames = [classes.InputEl];
    if (props.small) {
      classNames.push(classes.Small);
    }

    switch (props.inputElementType) {
      case ('input'):
        inputEl = <input
          className={classNames.join(' ')}
          placeholder={props.placeholder}
          type={props.type}
          minLength={props.minLength}
          maxLength={props.maxLength}
          max={props.max}
          min={props.min}
          step={props.step}
          required={props.required}
          value={props.value}
          id={props.id}
          onChange={props.changed} />;
        break;
      case ('textarea'):
        inputEl = <textarea
          className={classNames.join(' ')}
          placeholder={props.placeholder}
          value={props.value}
          id={props.id}
          maxLength={props.maxLength}
          required={props.required}
          onChange={props.changed} />;
        break;
      case ('select'):
        inputEl = (
          <select
            className={classNames.join(' ')}
            {...props.elementConfig}
            value={props.changed}
            id={props.id}
          >
            {props.elementConfig.options.map(option => {
              return (
                <option
                  value={option.value}
                  onChange={props.changed}
                  key={option.value}
                  required={props.required}
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
          type={props.type}
          minLength={props.minLength}
          maxLength={props.maxLength}
          max={props.max}
          min={props.min}
          step={props.step}
          placeholder={props.placeholder}
          required={props.required}
          value={props.value}
          id={props.id}
          onChange={props.changed} />;
    }

    return (
      <div className={classes.Input}>
        <label className={classes.Label} htmlFor={props.id}>{props.label}</label>
            {inputEl}
      </div>
    );
  }

  export default Input;
