import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
          {
            props.options.map((option) => (<Option 
              key={option}
              text={option}
              handleDeleteOption={props.handleDeleteOption} 
              />))
          }
          <button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    );
  };
  
  export default Options;