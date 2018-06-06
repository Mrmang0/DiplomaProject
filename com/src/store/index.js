import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState()],
    state: {
      isLogged: false,
      user: null
    },
    mutations: {
      setIsLogged(state, payload) {
        state.isLogged = payload;
        if (payload == false)
          state.user = null
      },

      setUser(state,payload)
      {
        state.user = payload;
        state.isLogged = true;  
        
      }
      
    },
    getters: {
      isLogged(state)
      {
        return state.isLogged;
      },
      getUser(state)
      {
        return state.user;
      }
    }
  });

// Export the store

export default store;
