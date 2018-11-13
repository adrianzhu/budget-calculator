import React, { Component } from 'react';

class Dashboard extends Component {
    // Dashboard should get account and entry data        
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    // Check cookies
    componentDidMount() {
        fetch('/users/current',{
            accept: 'application/json',
            credentials: 'include'     
        }).then(
            console.log('user fetched'), 
            user => (this.setState( user ))
        )
            // .then(res => this.setState({ user }));
    }

    render() {
        return (
            <div id="dashboard-page-container">
                <h1>Dashboard</h1>            
                <p>{ this.state.user.username }</p>
            </div>
        );
    }
}

export default Dashboard;