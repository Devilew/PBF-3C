import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import MainReducer from './minggu6/reducers/MainReducer';
import Table from './minggu6/containers/Table';
import CreateTodo from './minggu6/containers/CreateTodo';
// import './index.css';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
// import BlogPost from './minggu4-5/container/BlogPost/BlogPost';
// import MahasiswaPost from './minggu4-5/container/MahasiswaPost/MahasiswaPost';

const store = compose(window.devToolsExtention ? window.devToolsExtention() : f => f)(createStore)(MainReducer);

ReactDOM.render(<Provider store={store}>
    <Table />
    <CreateTodo />
</Provider>, document.getElementById('root'));

serviceWorker.unregister();