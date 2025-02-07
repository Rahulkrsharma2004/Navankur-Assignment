const express = require('express');
const cors = require('cors');
const jobRoutes = require('./routes/jobRoutes');
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');

require('dotenv').config();
connectDB()

const app = express();
app.use(cookieParser());
app.use(cors()); 
app.use(express.json());
app.use(errorHandler);


app.use('/api/jobs', jobRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/user', userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});