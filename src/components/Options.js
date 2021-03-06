import React from 'react';
import Option from './Option';

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add options to get started !</p>}
      {props.options.map(option => (
        <Option
          key={option}
          text={option}
          handleDeleteSingleOption={props.handleDeleteSingleOption}
        />
      ))}
    </div>
  );
};

export default Options;
