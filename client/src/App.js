import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
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
    // componentDidMount() {
    //     fetch('/users/getadmin')
    //     .then(res => res.json())
    //     .then(users => this.setState({ users }));
    // }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let pageMode;
        let dashboard = <Dashboard />
        let login = <Login />

        if (isLoggedIn) {
            pageMode = <Dashboard />
        } else {
            pageMode = <Login />
        }

        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar isLoggedIn={this.state.isLoggedIn} />
                    {pageMode}
                    <Route path="login" component={login} />
                    <Route path="dashboard" component={dashboard} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

// from template
// <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />            
// </header>
