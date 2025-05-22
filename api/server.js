import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from 'cors';
import record from './routes/records.route.js';





import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('it is connected');
})
.catch((err) => {
    console.log(err);
})
const app = express();
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend's URL in production
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true, // If you need to send cookies or authentication headers
  };

app.use(cors({
    origin: 'https://docs.google.com', // Change to the specific origin you want to allow
    methods: ['GET', 'POST'], // Allow specific HTTP methods
}));

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




app.use('/api/reco', record);






app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})
 