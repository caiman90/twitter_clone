import React from 'react'
import {withRouter} from 'react-router-dom'

class LoginPage extends React.Component {
    login(){
        alert("Trying to log in")
    }


    render(){
        return(
            <div className="container-fluid">
                <h1>Please Log in to continue....</h1>
                <div className="form-containter">
                    <label className="label">Username</label>
                    <input className="input" a type="text" />
                </div>
                <div className="form-containter ">
                    <label  className="label">Password</label>
                    <input className="input" type="text" />
                </div>
                <input className="button" type="submit" value="Log in" onClick={this.login}/>
            </div>
        )
    }

}
export default withRouter(LoginPage)