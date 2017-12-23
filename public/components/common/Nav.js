import React from 'react'
import {Link,NavLink} from 'react-router-dom'


class Nav extends React.Component{
    render(){
    return (
        <div>
        <ul className='nav'>
            <li>
                <NavLink activeClassName="active" to="/home" >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active"   to="/about">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active"  to="/login">
                    Login
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active"  to="/register">
                    Register
                </NavLink>
            </li>

        </ul>
        </div>
    )}

}
export default Nav