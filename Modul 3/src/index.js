import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import HelloComponent from './minggu4/component/HelloComponent';
import StateFullComponent from './minggu4/container/StateFullComponent';
import Login from './minggu4/login/login';

// function Hello() {
//     return <p>Ini adalah function component</p>
// }

// const Hello = () => {
//     return <p>ini adalah arrow function</p>
// }

// class Statefullcomponent extends React.Component {
//     render() {
//         return <p>ini adalah statefull component</p>
//     }
// }

ReactDOM.render(<Login />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
