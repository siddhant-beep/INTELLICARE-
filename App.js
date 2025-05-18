import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PatientDashboard from './components/PatientDashboard';
import DoctorDashboard from './components/DoctorDashboard';
import LoginPage from './components/LoginPage';

function App() {
    return (
        <Router>
            <div>
                <h1>Hospital Management System</h1>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/patient-dashboard" component={PatientDashboard} />
                    <Route path="/doctor-dashboard" component={DoctorDashboard} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;