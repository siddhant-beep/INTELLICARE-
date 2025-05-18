import React, { useState, useEffect } from 'react';

function DoctorDashboard() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/pendingAppointments');
            const data = await response.json();
            setAppointments(data);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    const acceptAppointment = async (appointmentId) => {
        try {
            const response = await fetch(`http://localhost:3000/api/acceptAppointment/${appointmentId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (data.success) {
                alert('Appointment accepted successfully!');
                fetchAppointments();
            } else {
                alert('Failed to accept appointment.');
            }
        } catch (error) {
            console.error('Error accepting appointment:', error);
        }
    };

    const declineAppointment = async (appointmentId) => {
        try {
            const response = await fetch(`http://localhost:3000/api/declineAppointment/${appointmentId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (data.success) {
                alert('Appointment declined successfully!');
                fetchAppointments();
            } else {
                alert('Failed to decline appointment.');
            }
        } catch (error) {
            console.error('Error declining appointment:', error);
        }
    };

    return (
        <div>
            <h1>Doctor's Dashboard</h1>
            <h2>Pending Appointments</h2>
            <ul>
                {appointments.map((appointment, index) => (
                    <li key={index}>
                        {appointment.patientName} - {appointment.date}
                        <button onClick={() => acceptAppointment(appointment.id)}>Accept</button>
                        <button onClick={() => declineAppointment(appointment.id)}>Decline</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DoctorDashboard;