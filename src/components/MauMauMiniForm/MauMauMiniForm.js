import React from 'react';
import Aux from '../../hoc/Aux';
import Input from '../UI/Input/Input';

const MauMauMiniForm = (props) => {
  return (
    <Aux>
      <Input
        inputElementType="input"
        type="number"
        id="limit"
        placeholder=""
        label="What is your maximum point limit?"
        min="100"
        step="50"
        required
        small
        value={props.value}
        changed={props.changed}
      />
    </Aux>
  );
}

export default MauMauMiniForm;
