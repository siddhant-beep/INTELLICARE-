import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/patient-dashboard">Patient Dashboard</Link></li>
                <li><Link to="/doctor-dashboard">Doctor Dashboard</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;