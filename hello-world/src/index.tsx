import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//########################### Practice React #############


// const p1: React.ReactElement = React.createElement("p", null, "This is paragraph 1");
// const p2: React.ReactElement = React.createElement("p", null, "This is also a paragraph 2");
// const button: React.ReactElement = React.createElement("button",{class: "myButton"} , "this is the button");
// const myDiv: React.ReactElement = React.createElement("div", null, [p1,p2,button]);

// const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// const p1: React.ReactElement = React.createElement("p", null, "This is paragraph 1");
// const p2: React.ReactElement = React.createElement("p", null, "This is paragraph 2");
// const button: React.ReactElement = React.createElement("button",{class: "myButton"} , "this is the button");
// const myList: React.ReactElement = React.createElement( "ul", null, [
//     React.createElement("li", null, "first"),
//     React.createElement("li", null, "second"),
//     React.createElement("li", null, "third")
// ]);
// const myDiv: React.ReactElement = React.createElement("div", null, [p1,p2,button, myList]);
// const root : ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(myDiv);

// root.render(myDiv);


// // root.render(p1);