import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './src/user/user.router';
import tweetRoutes from './src/tweet/tweet.router';

dotenv.config();
const app:  Application = express();
const PORT: number = parseInt(process.env.PORT || '5000', 10); 
const mongoDBURL: string = process.env.MONGODB_URL || "mongodb://localhost:27017/TwitterBackend";

app.use(express.json());
app.use('/users', userRoutes);
app.use('/tweets', tweetRoutes);


const startServer = () => {
    mongoose.connect(mongoDBURL)
    console.log("DB Connection Successful");
    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
    });
};

startServer();


