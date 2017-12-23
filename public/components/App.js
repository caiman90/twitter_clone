/**
 * Created by rejhan on 15.12.2017.
 */
import React from 'react';
import PropTypes from 'prop-types'
import { HashRouter as Router,Route,Switch} from 'react-router-dom'
import Nav from './common/Nav'
import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'
import LoginPage from './login/LoginPage'

class App extends  React.Component {

    render(){
        return (
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
        );
    }
}
App.propTypes = {
    //children: PropTypes.object.isRequired
}

export default App;
