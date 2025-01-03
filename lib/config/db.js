import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const ConnectDB = async () => {
    try {
        // Use the connection string from the environment variable
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('DB Connected');
    } catch (error) {
        console.error('DB connection error:', error);
    }
}
