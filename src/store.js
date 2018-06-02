import Vue from 'vue';
import Vuex from 'vuex';
import { HTTP } from './stores/config/http-common';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResult: {},
    errors: [],
  },
  mutations: {
    GET_RESULT_SEARCH: (state, payload) => {
      state.searchResult = payload;
    },
    GET_ERRORS: (state, payload) => {
      state.searchResult = payload;
    },
  },
  actions: {
    SEARCH: ({
      commit,
    }, payload) => new Promise((resolve, reject) => {
      HTTP.get(`?search=${payload}`).then((response) => {
        resolve(response);
        commit('GET_RESULT_SEARCH', response.data);
      }).catch((erro) => {
        reject(erro);
        commit('GET_ERRORS', erro);
      });
    }),
    CHANGE_PAGE: ({
      commit,
    }, payload) => new Promise((resolve, reject) => {
      HTTP.get(`?page=${payload.page}&search=${payload.term}`).then((response) => {
        resolve(response);
        commit('GET_RESULT_SEARCH', response.data);
      }).catch((erro) => {
        reject(erro);
        commit('GET_ERRORS', erro);
      });
    }),
  },
});
