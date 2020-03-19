import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
// import BlogPost from './minggu4-5/container/BlogPost/BlogPost';
// import MahasiswaPost from './minggu4-5/container/MahasiswaPost/MahasiswaPost';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
