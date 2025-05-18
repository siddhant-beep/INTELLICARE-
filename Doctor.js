const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    // ... existing code ...
});

module.exports = mongoose.model('Doctor', doctorSchema);