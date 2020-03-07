import React from 'react';

const Option = props => {
  return (
    <div>
      {props.text}
      <button onClick={() => props.handleDeleteSingleOption(props.text)}>
        Remove
      </button>
    </div>
  );
};

export default Option;
