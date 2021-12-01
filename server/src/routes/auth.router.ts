import { loginUser, signup, changePassword } from '../controllers/auth.controller';
import { logAuthRequests } from '../middleware/auth.middleware';
import { Router } from 'express';

declare module 'express-session' {
    export interface SessionData {
        user: { [key: string]: any };
    }
}

const router: Router = Router();

router.post('/login', async (req, res) => {
    try {
        const tokenObj = await loginUser(req.body);

        if (!tokenObj) {
            return res.sendStatus(403);
        }

        req.session.user = req.body.email;
        res.send(tokenObj);
    } catch (e) {
        res.sendStatus(403);
    }
});

router.post('/register', async (req, res) => {
    try {
        const tokenObj = await signup(req.body);

        if (!tokenObj) {
            console.error(`Login error : for user ${req.body.email}, IP: ${req.ip}`);
            return res.sendStatus(403);
        }

        res.send(tokenObj);
    } catch (e) {
        return res.sendStatus(403);
    }
});

router.post('/changePassword', logAuthRequests, async (req, res) => {
    try {
        const tokenObj = await changePassword(req.body);

        if (!tokenObj) {
            console.error(`Change password error : for user ${req.body.email}, IP: ${req.ip}`);
            return res.sendStatus(403);
        }

        res.send(tokenObj);
    } catch (e) {
        return res.sendStatus(403);
    }
});

router.post('/logout', async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.sendStatus(500);
            return;
        }

        res.send({ status: 'ok' });
    });
});

export default router;
