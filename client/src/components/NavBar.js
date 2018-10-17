import React, { Component } from 'react';

class NavBar extends Component {    
    render() {
        let mode;

        if (this.props.isLoggedIn) {
            mode = 'Show User Name'; 
        } else {
            mode = 'Log In or Sign Up';
        }

        return (
            <div className="NavBar">
                <ul>
                    <li>NavBar</li>
                    <li>{mode}</li>
                </ul>
            </div>
        );
    }
}

export default NavBar;