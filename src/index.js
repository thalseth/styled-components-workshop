import React from 'react';
import ReactDOM from 'react-dom';
// import App from './demo/App';
import App from './workshop/App';

console.log(process.env.ENV_VARIABLE);
ReactDOM.render(<App />, document.getElementById('root'));
