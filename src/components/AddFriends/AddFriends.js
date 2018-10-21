/* eslint no-restricted-globals: "off", no-unused-vars: "off" */
import React from 'react';
import classes from './AddFriends.css';
import Input from '../../components/UI/Input/Input';

const AddFriends = (props) => {
  const {
    numberOfFriends,
    name0,
    name1,
    name2,
    name3,
    name4,
    name5,
    name6
  } = props;

  let inputs = [];
  const names = [name0, name1, name2, name3, name4, name5, name6];
  for (let i = 0; i < numberOfFriends; i++) {
    inputs.push(
      <Input
        key={i}
        inputElementType="input"
        type="text"
        minLength={2}
        maxLength={8}
        placeholder="John"
        value={names[i]}
        id={`name${i}`}
        changed={props.onFriendChange}
        label="first name of a friend"
       />
    );
  }
  return (
    <div>
      {inputs}
    </div>
  );
}

export default AddFriends;
