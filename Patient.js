const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    symptoms: [String],
    // ... existing code ...
});

module.exports = mongoose.model('Patient', patientSchema);