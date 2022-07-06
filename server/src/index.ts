import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import { Routes } from './routes/routes';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

// Routes
app.use(Routes.CATEGORIES_ROUTE, require('./routes/categories'));

// Event Listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});