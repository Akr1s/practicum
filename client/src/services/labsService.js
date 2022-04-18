import axios from 'axios';
import { LABS_URL } from '../constants/urls';

export class LabsService {
    static getLaboratories() {
        return axios.get(`${LABS_URL}`).then((response) => response?.data);
    }
    static getLaboratory(id) {
        return axios.get(`${LABS_URL}/${id}`).then((response) => response?.data);
    }
    static updateLaboratory(data, id) {
        return axios.put(`${LABS_URL}/${id}`, data).then((response) => response?.data);
    }
}
