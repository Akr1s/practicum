import axios from 'axios';

import { SUBJECTS_URL } from '../constants/fetch';

export class SubjectService {
    static getSubjects() {
        return axios.get(SUBJECTS_URL);
    }
}
