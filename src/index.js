import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import house from './house.jpeg';

console.log(house);
const props = {
    image: house,
    name: "Dillon Temple",
    description: "Tech Bro of the century, other things and other stuff blah blah blah blah"
}

ReactDOM.render(App(props), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
