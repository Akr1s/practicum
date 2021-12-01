import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/auth';

export function isLoggedIn(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization || '';
    let isValid: any = false;

    try {
        isValid = token && jwt.verify(token.split(' ')[1], config.secret);
    } catch {
        console.error(
            `Session expired, User: ${req.session.user}, IP: ${req.ip}, Path: ${req.originalUrl}`,
        );
        res.status(403).send({ error: 'Session expired' });
        return;
    }

    if (isValid) {
        return next();
    }

    console.error(
        `Session expired, User: ${req.session.user}, IP: ${req.ip}, Path: ${req.originalUrl}`,
    );
    res.status(403).send({ error: 'Session expired' });
}

export function logAuthRequests(req: Request, res: Response, next: NextFunction) {
    console.warn(`Email: ${req.body.email}, IP: ${req.ip}, Path: ${req.originalUrl}`);
    return next();
}

export function isUserLoggedIn(req: Request) {
    const token = req.headers.authorization || '';
    let isValid: any = false;

    try {
        isValid = token && jwt.verify(token.split(' ')[1], config.secret);
    } catch {
        console.error(
            `Session expired, User: ${req.session.user}, IP: ${req.ip}, Path: ${req.originalUrl}`,
        );
        throw new Error('Token validation error');
    }

    return !!isValid;
}
