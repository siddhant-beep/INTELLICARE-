require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("Mongo URI not found in environment variables!");
  process.exit(1);
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connected to MongoDB Atlas");
  app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
  });
})
.catch((err) => console.error("❌ MongoDB connection error:", err));