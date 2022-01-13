// import './utils.js';

import subtract, { square , addFunc  } from './utils.js';

//import validator from 'validator'; // default export usage case

import React from 'react';

import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

const emptyObjectArrow = () => ({});

console.log(emptyObjectArrow);

// stateless, functional component- > pretension like header
const User = (props) => {
  return (
    <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
    </div>
  );   
};

ReactDOM.render(<IndecisionApp options={['Devils den', 'Second District']} />, document.getElementById('app'))