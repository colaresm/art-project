import HttpRequestHandler from './HttpRequestHandler';

const NEWER_TOKEN_REQUEST_URL = '/v1/authentication/newer-token';

export default {
    getTokenByUsernameAndPassword(username, password) {
        const input = {
            username,
            password
        };
        return HttpRequestHandler.postRequestWithBodyToGetToken('/v1/authentication/create-token', input);
    },

    getUser() {
        return HttpRequestHandler.getRequest('/v1/authentication/user');
    },

    getRefreshedToken() {
        return HttpRequestHandler.getRequest(NEWER_TOKEN_REQUEST_URL);
    },

    isNewerTokenRequestURL(url) {
        return url === NEWER_TOKEN_REQUEST_URL;
    }
};
