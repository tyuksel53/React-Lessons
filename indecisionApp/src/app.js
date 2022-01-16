// import './utils.js';

import subtract, { square , addFunc  } from './utils.js';

//import validator from 'validator'; // default export usage case

import React from 'react';

import ReactDOM, { render } from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

import './style/styles.scss'

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

const Layout = (props) => {
  return (
    <div>
      <p>header</p>
      {props.children}
      {/*props.content*/}
      <p>footer</p>
    </div>
  )
}

const Template = () => {
  console.log("hello");
  return (
    <div>
      <h1>Page Title</h1>
      <p>This is my title</p>
    </div>
  )
}

//use case 1
// ReactDOM.render(<Layout content={template} />, document.getElementById('app'));

// ReactDOM.render(
//   <Layout>
//     <Template/>
//   </Layout>,
// document.getElementById('app'));



// ReactDOM.render(
//   <IndecisionApp>
//     <Modal
//       isOpen={false}
//       contentLable={'custom label'} >
//       <h1>hello</h1>
//     </Modal>
//   </IndecisionApp>,
// document.getElementById('app'));

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));