/**
 * Created by rejhan on 15.12.2017.
 */
import React from 'react';
import { HashRouter as Router,Route,Switch} from 'react-router-dom'
import Nav from './common/Nav'
import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'
import LoginPage from './login/LoginPage'
import configureStore from '../store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

class App extends  React.Component {
    render(){
        return (
            <Provider store={store}>
              <Router>
                <div>
                    <Nav />
                    <Switch>
                        <Route path="/home"  component={HomePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/login" component={LoginPage} />
                    </Switch>
                </div>
              </Router>
             </Provider>
        );
    }
}
export default App;
