import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import axiosInstance from '../axios/axios'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    curp: '',
    fechaCita: ''
  },
  getters: {
    obtenerCurp : (state) => state.curp,
  },
  mutations: {
    SET_CURP: (state, payload) => {
      state.curp = payload.curp
    },
  },
  actions: {
    async agendarCita({ commit }, payload) {
      const { cita } = payload
      const { data } = await axiosInstance.post(`/agendarCita`, cita)
      return data
    },
    async obtenerCitas({ commit } , payload) {
      const { curp } = payload
      const { data } = await axiosInstance.get(`/obtenerCitas/${curp}`)
      return data
    },
    async cancelarCita({ commit }, payload) {
      const { id } = payload
      const { data } = await axiosInstance.put(`/cancelarCita/${id}`)
      return data
    }
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
