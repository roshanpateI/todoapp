import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePickOption = this.handlePickOption.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this); 
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.handleModalClose = this.handleModalClose.bind(this);
      this.state = {
        options: props.options,
        selectedOption: undefined
      };
    }
  
    // LIFECYLCE METHODS
    componentDidMount() {
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if (options) {
        this.setState(() => ({
            options: options
          }));
        }
      } catch (e) {
        console.log(e);
      }
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log("saving data");
      }
    }
    // END LIFECYLCE METHODS
  
    handlePickOption() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    }
  
    handleDeleteOptions() {
      this.setState(() => ({
        options: []
      }));
    }
  
    handleDeleteOption(option) {
      this.setState((prevState) => ({
        options: prevState.options.filter((x) => {
          return x !== option;
        })
      }));
    }
  
    handleAddOption(newOption) {
      this.setState((prevState) => ({
        options: prevState.options.concat(newOption)
      }));
  
    }
  
    handleModalClose() {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }


    render() {
      return (
        <div>
          <Header />
          <div className="container"v>

          <Action hasOptions={this.state.options.length > 0} handlePickOption={this.handlePickOption} />
          <Options
            handleDeleteOptions={this.handleDeleteOptions}
            options={this.state.options} 
            handleDeleteOption={this.handleDeleteOption}
            />
          <AddOption handleAddOption={this.handleAddOption}/>

          </div>

          <OptionModal
            selectedOption={this.state.selectedOption}
            handleModalClose={this.handleModalClose} />
        </div>
      );
    }
  }
  
  IndecisionApp.defaultProps = {
    options: []
  };