const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected Successfully::');
    } catch (error) {
        console.error('Error in mongoDB connection::', error);
        process.exit(1);
    }
};

module.exports = connectDB;
