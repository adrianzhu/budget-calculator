import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import './Login.css'

// TODO: Add toggle for sign up or login depending on what was clicked
//       from main app page
// <SignupForm />
class Login extends Component {

    render() {
        return (
            <div id="login-page-container">
                <h1>Login</h1>
                <div className="form-login-container">
                    <LoginForm />            
                </div>
            </div>
        );
    }
}

export default Login;