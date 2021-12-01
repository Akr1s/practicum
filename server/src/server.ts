import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import appRouter from './routes';
import session from 'express-session';
import { config } from './config/auth';
import authRouter from './routes/auth.router';

dotenv.config();

const app: Application = express();

const environmentPort: number = Number(process.env.PORT);
const port: number = environmentPort || 8080;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(
    session({
        secret: config.secret,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
    }),
);

app.use('/api/', appRouter);
app.use('/auth/', authRouter);

app.listen(port);
