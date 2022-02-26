import axios from 'axios';

import { LOGIN_URL, LOGOUT_URL, REGISTRATION_URL } from '../constants/urls';

export class AuthService {
    static logout() {
        return axios.post(LOGOUT_URL).then((response) => response?.data);
    }
    static login(data) {
        return axios.post(LOGIN_URL, data).then((response) => response?.data);
    }
    static register(data) {
        return axios.post(REGISTRATION_URL, data).then((response) => response?.data);
    }
}
