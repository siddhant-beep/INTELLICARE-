import React, { useState, useEffect } from 'react';

function DoctorDashboard() {
    const [appointments, setAppointments] = useState([]);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    useEffect(() => {
        // Fetch pending appointments from the backend
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
                fetchAppointments(); // Refresh the list of appointments
            } else {
                alert('Failed to accept appointment.');
            }
        } catch (error) {
            console.error('Error accepting appointment:', error);
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
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DoctorDashboard;