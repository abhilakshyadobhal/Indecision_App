import React, { Component } from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOptions from './AddOptions';

class IndecisionApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);
    this.handleRandomPick = this.handleRandomPick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  componentDidMount() {
    try {
      const optionsFromLocalStorage = localStorage.getItem('options');
      const options = JSON.parse(optionsFromLocalStorage);
      if (options) {
        this.setState(() => ({
          options
        }));
      }
    } catch (e) {
      console.log('error');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const optionsToStoreInLocalStorage = JSON.stringify(this.state.options);
      localStorage.setItem('options', optionsToStoreInLocalStorage);
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteSingleOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }

  handleRandomPick() {
    const randomOption = this.state.options[
      Math.floor(Math.random() * this.state.options.length)
    ];
    alert(randomOption);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add option';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Option already exists';
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }

  render() {
    const subtitle = 'Let the computer take decisions on your behalf !!';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handleRandomPick={this.handleRandomPick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteSingleOption={this.handleDeleteSingleOption}
        />
        <AddOptions handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default IndecisionApp;
