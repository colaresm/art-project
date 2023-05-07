import StoreMutationsType from '@/store/StoreMutationsType';

export const BreadcrumbHandler = {
    getPath(context) {
        return context.$store.getters.getPath;
    },

    setPath(context, path) {
        context.$store.commit(StoreMutationsType.BREADCRUMB_SET_PATH, path);
    }
};

const state = {
    path: []
};

const getters = {
    getPath: (state) => {
        return state.path;
    }
};

const mutations = {
    [StoreMutationsType.BREADCRUMB_SET_PATH]: (state, path) => {
        state.path = path;
    }
};

export default {
    state,
    getters,
    mutations
};
