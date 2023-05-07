import Vue from 'vue';
import Vuex from 'vuex';

import authPlugin from './plugin.auth';
import authentication from '@/store/modules/authentication';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [authPlugin],
    state: {},
    mutations: {},
    actions: {},
    modules: {
        authentication
    }
});
