import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { userRoutes } from './Routes/game.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5500, () => {
  console.log("Server running on port 5500");
});

// MongoDB connection
mongoose.connect("mongodb://localhost:27017");

const db = mongoose.connection;

db.on("open", () => {
    console.log("Connection Successful");
});

db.on("error", () => {
    console.log("Connection not Successful");
});

userRoutes(app);