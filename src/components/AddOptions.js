import React, { Component } from 'react';

class AddOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
    this.handleOptionAdd = this.handleOptionAdd.bind(this);
  }

  handleOptionAdd(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return { error };
    });
    e.target.elements.option.value = '';
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleOptionAdd}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOptions;
