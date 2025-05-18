import React, { useState, useEffect } from 'react';

function PatientDashboard() {
    const [availableSlots, setAvailableSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState(null);

    useEffect(() => {
        fetchAvailableSlots();
    }, []);

    const fetchAvailableSlots = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/availableSlots');
            const data = await response.json();
            setAvailableSlots(data);
        } catch (error) {
            console.error('Error fetching available slots:', error);
        }
    };

    const bookAppointment = async () => {
        if (!selectedSlot) {
            alert('Please select a slot to book an appointment.');
            return;
        }
        try {
            const response = await fetch('http://localhost:3000/api/bookAppointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ slot: selectedSlot }),
            });
            const data = await response.json();
            if (data.success) {
                alert('Appointment booked successfully!');
            } else {
                alert('Failed to book appointment.');
            }
        } catch (error) {
            console.error('Error booking appointment:', error);
        }
    };

    return (
        <div>
            <h1>Patient Dashboard</h1>
            <h2>Available Slots</h2>
            <ul>
                {availableSlots.map((slot, index) => (
                    <li key={index}>
                        <button onClick={() => setSelectedSlot(slot)}>
                            {slot.date} - {slot.time}
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={bookAppointment}>Book Appointment</button>
        </div>
    );
}

export default PatientDashboard;