// import './utils.js';

import subtract, { square , addFunc  } from './utils.js';

import validator from 'validator'; // default export usage case

import React from 'react';

import ReactDom from 'react-dom';
import utils from '../utils.js';

// console.log("app.js is running ");

// console.log(square(3));

// console.log(addFunc(1,5))

// import { isAdult, canDrink } from './person.js';

// console.log(isAdult(12));

// console.log(canDrink(25));

// console.log(subtract(1,7));

// console.log(validator.isEmail("taha@hasmundi.com"));

const element = <p>hello world</p>; //we dont use babel right now so javascript doesn't know what to do with that

// const reactElement = React.createElement('p', {}, 'hello world');

ReactDom.render(element, document.getElementById('app'));


// --> utils.js file

// console.log("Utils.js is running");

// const square = (num) => num * num;

// export const addFunc = (num1, num2) => num1 + num2;

// export { square }; // // named export

// //exports  - default exports - named exports

// const subtract = (num1, num2) => num1 - num2;

// //export default  (num1, num2) => num1 * num2;

// // default export only usable one at time

// export {subtract as default}

// --> person.js file

// export const isAdult = (age) => age >= 18; // named export

// export const canDrink = (age) => age >= 21; // named export