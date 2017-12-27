import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../../actions/loginActions';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
    constructor(state,props){
        super(state,props);
        this.state = {
          user: {
              username:'',
              password:''
          }
        }
    }
    login(){
        alert("Trying to log in")
    }


    render(){
        return (
        <LoginForm props={this.state}/>
        );
    }

}
function mapStateToProps(state){
    return {
        tweets : state.tweets
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)