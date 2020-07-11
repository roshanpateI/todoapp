import React from 'react';

const Action = (props) => {
    return (
      <div>
        <button className="big-button" disabled={!props.hasOptions} onClick={props.handlePickOption}>Pick a task</button>
      </div>
    );
  };
  
  export default Action;