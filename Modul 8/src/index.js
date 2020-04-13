import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

import BlogPost from "./minggu7/container/BlogPost//BlogPost";
import MahasiswaPost from "./minggu7/container/MahasiswaPost//MahasiswaPost";

ReactDOM.render(<MahasiswaPost />, document.getElementById('content'));

serviceWorker.unregister();
