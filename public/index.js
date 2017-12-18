/**
 * Created by rejhan on 15.12.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter,browserHistory} from 'react-router-dom';
import scss from './styles/style.scss'


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));