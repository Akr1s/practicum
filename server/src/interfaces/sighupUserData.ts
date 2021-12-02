import { userRoles } from '../constants/userRoles';

export interface ISignupUserData {
    username: string;
    password: string;
    email: string;
    role: userRoles;
}
