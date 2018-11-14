import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            isLoggedIn: false
        };
    }


    // Check cookies
    // componentDidMount() {
    //     fetch('/users/current')
    //     .then(res => res.json())
    //     .then(users => this.setState({ user }));
    // }

    render() {
        // const isLoggedIn = this.state.isLoggedIn;

        // let pageMode;

        // if (isLoggedIn) {
        //     pageMode = "Logged In"
        // } else {
        //     pageMode = "Not Logged In"
        // }

        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar isLoggedIn={this.state.isLoggedIn} />                    
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />                
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
