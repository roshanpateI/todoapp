import React from 'react';

const Header = (props) => {
 
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
   
    return (
      <div className="header">
        <div className="container">
          <h1 className="header__title">{props.title}</h1>
          <h2 className="header__subtitle">{today}</h2>
        </div>
      </div>
    );
  };
  
  Header.defaultProps = {
    title: 'Todo List'
  };

  export default Header;