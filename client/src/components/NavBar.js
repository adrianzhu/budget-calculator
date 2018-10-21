import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {    
    render() {
        let mode;

        if (this.props.isLoggedIn) {
            mode = 'Show User Name'; 
        } else {
            mode = 'Log In or Sign Up';
        }

        return (
            <nav className="NavBar">
                <ul>
                    <li><a href="/">BudgetCalc</a></li>
                    <li><a href="/login">{mode}</a></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;