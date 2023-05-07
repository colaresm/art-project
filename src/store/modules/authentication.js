import StoreMutationsType from '@/store/StoreMutationsType';
import LocalStorageHandler from '@/handlers/LocalStorageHandler';

export const AuthenticationHandler = {
    isLogged(context) {
        context.$store.getters.user != null;
        return true;
    },

    logout(context) {
        LocalStorageHandler.clearAccessToken();
        LocalStorageHandler.clearRefreshToken();
        this.setUser(context, null);
    },

    logoutByStore(store) {
        LocalStorageHandler.clearAccessToken();
        LocalStorageHandler.clearRefreshToken();
        store.commit(StoreMutationsType.SET_USER, null);
    },

    getUsername(context) {
        const user = this.getUser(context);
        if (user != null) {
            return user.username;
        }
        return '';
    },

    getUser(context) {
        return context.$store.getters.user;
    },

    setUser(context, user) {
        context.$store.commit(StoreMutationsType.SET_USER, user);
    }
};

const state = {
    token: '',
    user: null
};

const getters = {
    user: (state) => {
        return state.user;
    }
};

const mutations = {
    [StoreMutationsType.SET_USER]: (state, user) => {
        state.user = user;
    }
};

export default {
    state,
    getters,
    mutations
};
