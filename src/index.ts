import express from "express";
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
    credentials: true,
}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running on port : ${port}`);
})

const Mongo_URL = 'mongodb+srv://knowpranjal:106Tower11@cluster0.likqhth.mongodb.net/';

mongoose.Promise = Promise;
mongoose.connect(Mongo_URL);

mongoose.connection.on('error', (error: Error) => console.log('Error'));