import React from 'react';

export default class AddOption extends React.Component {

    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
    }
  
    handleAddOption(e) {
      e.preventDefault();
      this.props.handleAddOption(e.target.elements.option.value);
      e.target.elements.option.value = '';
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"></input>
            <button className='button'>Add Option</button>
          </form>
        </div>
      );
    }
  }

