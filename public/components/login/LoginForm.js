import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({props})=>{
    debugger
    return(
        <div className="container-fluid">
            <h1>Please Log in to continue....</h1>
            <div className="form-containter">
                <label className="label">Username</label>
                <input className="input" type="text" value={props.user.username} />
            </div>
            <div className="form-containter">
                <label className="label">Password</label>
                <input className="input" type="text" value={props.user.password} />
            </div>
            <input className="button" type="submit" value="Log in" onClick={props.login}/>
        </div>
    );
};

LoginForm.propTypes = {
    props: PropTypes.object.isRequired
}
export default LoginForm;