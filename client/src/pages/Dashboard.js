import React, { Component } from 'react';

class Dashboard extends Component {
    // Dashboard should get account and entry data

    render() {
        return (
            <div id="dashboard-page-container">
                <p>{request.session.passport}</p>
                <h1>Dashboard</h1>                
            </div>
        );
    }
}

export default Dashboard;