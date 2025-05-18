import React, { useState } from 'react';

function AddPatient() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const handleAddPatient = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/addPatient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, age, symptoms: symptoms.split(',') }),
            });
            const data = await response.json();
            if (data.success) {
                alert('Patient added successfully!');
                setName('');
                setAge('');
                setSymptoms('');
            } else {
                alert('Failed to add patient.');
            }
        } catch (error) {
            console.error('Error adding patient:', error);
        }
    };

    return (
        <div>
            <h1>Add Patient</h1>
            <form onSubmit={handleAddPatient}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Symptoms (comma-separated):</label>
                    <input
                        type="text"
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Patient</button>
            </form>
        </div>
    );
}

export default AddPatient;