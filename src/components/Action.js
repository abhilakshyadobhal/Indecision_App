import React, { Component } from 'react';

class Action extends Component {
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handleRandomPick}
        >
          What Should I Do ?
        </button>
      </div>
    );
  }
}

export default Action;
