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
                <input type="text" />
                <input type="text" />

                <input type="submit" value="Log in" onClick={this.login}/>
            </div>
        )
    }

}
export default withRouter(LoginPage)