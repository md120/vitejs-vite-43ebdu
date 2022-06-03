// initial state
const state = {
  notifications: [
    {
      id: 1,
      type: 'is-info',
      content:
        'Due to a change of data provider, we have lost a (small) part of our data series and gained other series instead. This resulted on April 6, 2022, for some models in some countries, in a structural break in the GDP projections.',
    },
  ],
};

// getters
const getters = {
  getNotifications(state) {
    return state.notifications;
  },
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
