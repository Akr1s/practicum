import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { config } from '../config/auth';
import { databaseQuery } from '../config/database';
import { IChangePasswordData } from '../interfaces/changePassword';
import { ISignupUserData } from '../interfaces/sighupUserData';
import { IUserData } from '../interfaces/userData';
import { v4 as uuidv4 } from 'uuid';

export async function loginUser(userData: IUserData) {
    const user = await validateUser(userData);
    if (user) {
        return {
            access_token: jwt.sign(user, config.secret, { expiresIn: 3600 }),
        };
    }

    return null;
}

async function validateUser({ email, password }: IUserData) {
    const query = `SELECT * FROM USERS WHERE EMAIL='${email}'`;
    const { rows } = await databaseQuery<ISignupUserData>(query);
    const user = rows[0];
    const isPasswordValid = user && (await bcrypt.compare(password, user.password));

    if (isPasswordValid) {
        return user;
    }

    return null;
}

export async function signup({ username, password, email }: ISignupUserData) {
    const encrypted = await bcrypt.hash(password, 10);
    const id = uuidv4();
    const query = `INSERT INTO USERS(ID,USERNAME,EMAIL,PASSWORD) VALUES ('${id}','${username}','${email}','${encrypted}')`;
    await databaseQuery(query);

    const user = await validateUser({ email, password });

    if (!user) {
        return null;
    }

    return {
        status: 'ok',
    };
}

export async function changePassword({ oldPassword, newPassword, email }: IChangePasswordData) {
    const user = await validateUser({ email, password: oldPassword });

    if (!user) {
        return null;
    }

    const encrypted = await bcrypt.hash(newPassword, 10);
    const query = `ALTER TABLE USERS SET PASSWORD='${encrypted}' WHERE EMAIL='${email}'`;
    await databaseQuery(query);

    return {
        status: 'ok',
    };
}
