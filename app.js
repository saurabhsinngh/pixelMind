// app.js
const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/userRoutes');
const connectDB = require('./config/db');
const rateLimit = require('express-rate-limit');

dotenv.config();
const app = express();

// Middleware
app.use(express.json()); 

// Database connection
connectDB(); 

// Rate Limiter Middleware
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 10, 
    message: 'Too many requests from this IP, please try again later.',
});
app.use(limiter); 

// Routes
app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port:${PORT}`);
});
