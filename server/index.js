const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const cors= require('cors')
const dotenv=require("dotenv");
dotenv.config()

const app = express();
app.use(cors('http://localhost:5173'));
app.use(express.json());


mongoose.connect(process.env.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
