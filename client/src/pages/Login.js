import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

// TODO: Add toggle for sign up or login depending on what was clicked
//       from main app page
// <SignupForm />
class Login extends Component {

    render() {
        return (
            <div className="form-login-container">
                <h1>Login</h1>
                <LoginForm />            
            </div>
        );
    }
}

export default Login;