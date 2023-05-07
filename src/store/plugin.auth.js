import axios from '../http/AxiosConfiguration';
import AuthenticationHttpRequest from '@/http/AuthenticationHttpRequest';
import LocalStorageHandler from '@/handlers/LocalStorageHandler';
import { AuthenticationHandler } from './modules/authentication';

export default (store) => {
    axios.interceptors.response.use(
        (response) => {
            return response.data;
        },
        (error) => {
            const isUnauthorized = error.response.status === 401;

            if (isUnauthorized) {
                if (AuthenticationHttpRequest.isNewerTokenRequestURL(error.config.url)) {
                    return AuthenticationHandler.logoutByStore(store);
                }

                LocalStorageHandler.setAccessToken(LocalStorageHandler.getRefreshToken());

                AuthenticationHttpRequest.getRefreshedToken()
                    .then((response) => {
                        LocalStorageHandler.setAccessToken('Bearer ' + response.accessJWT);
                        LocalStorageHandler.setRefreshToken('Bearer ' + response.refreshJWT);
                        location.reload();
                    })
                    .catch((error) => {
                        console.log(error);
                        AuthenticationHandler.logoutByStore(store);
                        location.reload();
                    });
            }

            return Promise.reject(error.response.data || error.response || error);
        }
    );
};
