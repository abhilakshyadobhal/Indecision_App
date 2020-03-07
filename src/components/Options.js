import React, { Component } from 'react';
import Option from './Option';

class Options extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map(option => (
          <Option key={option} text={option} />
        ))}
      </div>
    );
  }
}

export default Options;
