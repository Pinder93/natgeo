import React from 'react';
import ReactDOM from 'react-dom';
import Router from '../src/components/Router';
import './style/App.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
