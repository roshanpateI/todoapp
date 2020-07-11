
import React from 'react';

const Option = (props) => {
    return (
      <div>
      <p>{props.text}
      <button 
        className="button button--link"
        onClick={(e) => {
          props.handleDeleteOption(props.text);
        }}
      >
          Remove option
      </button>
      </p>
    </div>
    );
  };

  export default Option;