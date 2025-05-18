import React, { useState, useEffect } from 'react';

function PatientList() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/patients');
            const data = await response.json();
            setPatients(data);
        } catch (error) {
            console.error('Error fetching patients:', error);
        }
    };

    return (
        <div>
            <h1>Patient List</h1>
            <ul>
                {patients.map((patient, index) => (
                    <li key={index}>
                        {patient.name}, Age: {patient.age}, Symptoms: {patient.symptoms.join(', ')}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PatientList;