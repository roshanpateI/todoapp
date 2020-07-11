import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';



ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
serviceWorker.unregister();
