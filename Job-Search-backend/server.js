const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jobRoutes = require('./routes/jobRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/db');

require('dotenv').config();

const app = express();
connectDB()
// app.use(cors()); 
app.use(express.json());

// Routes
// app.use('/api/jobs', jobRoutes);
// app.use('/api/auth', authRoutes);

// app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});