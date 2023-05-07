import axios from './AxiosConfiguration';
import LocalStorageHandler from '@/handlers/LocalStorageHandler';

const BASE_URL = process.env.VUE_APP_SERVER_BASE_URL;

export default {
    BASE_URL,
    getRequest: (urlSuffix) => {
        return axios.get(urlSuffix);
    },

    getRequestWithSignal: (urlSuffix, signal) => {
        return axios.get(urlSuffix, {
            signal
        });
    },

    getRequestWithBody: (urlSuffix, body) => {
        return axios.get(urlSuffix, body);
    },

    patchRequest: (urlSuffix) => {
        return axios.patch(urlSuffix);
    },

    patchRequestWithBody: (urlSuffix, body) => {
        return axios.patch(urlSuffix, body);
    },

    patchRequestWithFormData: (urlSuffix, formData) => {
        return axios.patch(urlSuffix, formData);
    },

    postRequestWithBodyToGetToken: (urlSuffix, body) => {
        return axios.post(urlSuffix, body);
    },

    postRequest: (urlSuffix) => {
        return axios.post(urlSuffix);
    },

    postRequestWithBody: (urlSuffix, body) => {
        return axios.post(urlSuffix, body);
    },

    postRequestWithFormData: (urlSuffix, formData) => {
        return axios.post(urlSuffix, formData);
    },

    putRequest: (urlSuffix) => {
        return axios.put(urlSuffix);
    },

    putRequestWithBody: (urlSuffix, body) => {
        return axios.put(urlSuffix, body);
    },

    deleteRequest: (urlSuffix) => {
        return axios.delete(urlSuffix);
    },

    deleteRequestWithBody: (urlSuffix, body) => {
        return axios.delete(urlSuffix, body);
    },

    getHeaders() {
        return {
            headers: {
                Authorization: LocalStorageHandler.getAccessToken(),
                'Accept-Language': 'br'
            }
        };
    }
};
