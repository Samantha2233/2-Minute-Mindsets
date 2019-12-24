import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from '../src/pages/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';




ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
serviceWorker.unregister();
