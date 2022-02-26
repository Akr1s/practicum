import axios from 'axios';
import { LABORATORIES_URL } from '../constants/fetch';

export class LaboratoriesService {
    static getLaboratories(id) {
        return axios.get(`${LABORATORIES_URL}/${id}`).then((response) => response?.data);
    }
}
