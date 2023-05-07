const REFRESH_TOKEN = 'refresh_token';
const ACCESS_TOKEN = 'access_token';
const LOCALE = 'locale';

export default {
    clearAccessToken() {
        localStorage.removeItem(ACCESS_TOKEN);
    },

    setAccessToken(accessToken) {
        localStorage.setItem(ACCESS_TOKEN, accessToken);
    },

    hasAccessToken() {
        return this.getAccessToken() != null;
    },

    getAccessToken() {
        return localStorage.getItem(ACCESS_TOKEN);
    },

    clearRefreshToken() {
        localStorage.removeItem(REFRESH_TOKEN);
    },

    setRefreshToken(refreshToken) {
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
    },

    getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN);
    },

    getLocale() {
        return localStorage.getItem(LOCALE);
    },

    setLocale(locale) {
        localStorage.setItem(LOCALE, locale);
    }
};
