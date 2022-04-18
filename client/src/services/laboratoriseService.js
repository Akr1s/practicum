import axios from 'axios';
import { LABORATORIES_URL } from '../constants/urls';

export class LaboratoriesService {
    static getLaboratories(id) {
        return axios.get(`${LABORATORIES_URL}/${id}`).then((response) => response?.data);
    }
    static getLaboratory(id) {
        return axios.get(`${LABORATORIES_URL}/single/${id}`).then((response) => response?.data);
    }
    static createLaboratory(data) {
        return axios.post(LABORATORIES_URL, data).then((response) => response?.data);
    }
    static updateLaboratory(data, id) {
        return axios.put(`${LABORATORIES_URL}/${id}`, data).then((response) => response?.data);
    }
    static deleteLaboratory(id) {
        return axios.delete(`${LABORATORIES_URL}/${id}`);
    }
}
