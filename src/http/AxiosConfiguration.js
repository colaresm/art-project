import axios from 'axios';
import LocalStorageHandler from '@/handlers/LocalStorageHandler';

const baseURL = process.env.VUE_APP_SERVER_BASE_URL;

const DEFAULT_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept-Language': 'en'
};

const axiosClient = () => {
    let instance = axios.create({
        baseURL,
        headers: DEFAULT_HEADERS
    });

    instance.interceptors.request.use((config) => {
        config.headers.Authorization = LocalStorageHandler.getAccessToken();
        config.headers['Accept-Language'] = 'br';
        return config;
    });

    return instance;
};

export default axiosClient();
