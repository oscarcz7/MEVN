import Vue from 'vue'
import Vuex from 'vuex'

import router from '../router/index'

import decode from 'jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    clientDB: '',
    date:''
  },
  mutations: {
    obtenerUsuario(state, payload){
      state.token = payload;
      if(payload === ''){
        state.clientDB = ''
      }else{
        state.clientDB = decode(payload);
        router.push({name: 'ContractsAcquired'})
      }
    },
    filterDate(state, payload){
      state.date === payload;
    },

  },
  actions: {
    guardarUsuario({commit}, payload){
      localStorage.setItem('token', payload);
      commit('obtenerUsuario', payload);
    },
    cerrarSesion({commit}){
      commit('obtenerUsuario', '');
      localStorage.removeItem('token');
      router.push({name: 'Home'});
    },
    leerToken({commit}){
      const token = localStorage.getItem('token');
      if(token){
        commit('obtenerUsuario', token);
      }else{
        commit('obtenerUsuario', '');
      }
    }
  },
  getters:{
    estaActivo: state => !!state.token
  },
  modules: {
  }
})