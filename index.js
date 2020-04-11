import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

render(<App />, document.getElementById('root'));
