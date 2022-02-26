import axios from 'axios';

import { SUBJECTS_URL } from '../constants/fetch';

export class SubjectsService {
    static getSubjects() {
        return axios.get(SUBJECTS_URL).then((response) => response?.data);
    }
    static deleteSubject(id) {
        return axios.delete(`${SUBJECTS_URL}/${id}`);
    }
}
