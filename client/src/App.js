import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoggedIn: false
        };
    }


    // Check cookies
    componentDidMount() {
        fetch('/users/getadmin')
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let pageMode;

        if (isLoggedIn) {
            pageMode = <Dashboard />
        } else {
            pageMode = <Login />
        }

        return (
            <div className="App">
                <NavBar isLoggedIn={this.state.isLoggedIn} />
                {pageMode}
            </div>
        );
    }
}

export default App;

// from template
// <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />            
// </header>
