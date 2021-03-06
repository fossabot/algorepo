import Vuex from 'vuex';

export const state = () => ({
  user: null,
  loginDialogVisible: false
});

export const mutations = {
  setUser (state, user) {
    state.user = user;
  },
  clearUser (state) {
    state.user = null;
  },
  setLoginDialogVisibility (state, visible) {
    state.loginDialogVisible = visible;
  }
};

export const actions = {
  async nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.passport && req.session.passport.user) {
      commit('setUser', { username: req.session.passport.user });
    } else {
      commit('clearUser');
    }
  },
  hideLoginDialog ({ commit }, ctx) {
    commit('setLoginDialogVisibility', false);
  },
  showLoginDialog ({ commit }, ctx) {
    commit('setLoginDialogVisibility', true);
  },
  setUser ({ commit }, user) {
    commit('setUser', user);
  },
  clearUser ({ commit }) {
    commit('clearUser');
  }
};
