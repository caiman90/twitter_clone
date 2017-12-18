/**
 * Created by rejhan on 16.12.2017.
 */
import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
<Switch>
    <Route exact path="/" component={App} />
    <Route path="/home" component={HomePage} />
    <Route path="/about" component={AboutPage} />
</Switch>
);