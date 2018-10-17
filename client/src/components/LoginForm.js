import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (
            <form className="form-login" action="/api/users/login" method="post">
                <input type="text" name="username" placeholder="username"/>
                <input type="password" name="password" placeholder="password"/>
                <input type="submit" value="Log In"/>

                <ul className="form-extra-links">
                    <li><a>Forgot your password?</a></li>
                </ul>
            </form>
            
        );
    }
}

export default Login;
// <li><a onClick={() => {this.props.showSignUp();}}>Sign Up</a></li>