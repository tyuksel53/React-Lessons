console.log("Utils.js is running");

const square = (num) => num * num;

export const addFunc = (num1, num2) => num1 + num2;

export { square }; // // named export

//exports  - default exports - named exports

const subtract = (num1, num2) => num1 - num2;

//export default  (num1, num2) => num1 * num2;

// default export only usable one at time

export {subtract as default}