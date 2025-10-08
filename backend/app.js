import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from './error/error.js';
import ReservationRouter from "./routes/reservationRoutes.js";

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "OPTIONS"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register routes with prefix /api/v1/reservation
app.use('/api/v1/reservation', ReservationRouter);

// Connect to DB
dbConnection();

// Global error handler middleware
app.use(errorMiddleware);

export default app;
