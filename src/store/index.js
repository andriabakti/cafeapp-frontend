import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: localStorage.getItem('token') || null,
    products: [],
    paginations: {}
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setToken (state, payload) {
      state.token = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setPaginations (state, payload) {
      state.paginations = payload
    }
  },
  actions: {
    login ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/users/login`, payload)
          .then((res) => {
            console.log(res)
            commit('setUser', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    interceptorsResponse ({ commit }) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        console.log(error.response)
        if (error.response.status === 403 && error.response.data.result.message === 'token invalid') {
          alert('Token tidak boleh diubah')
          localStorage.removeItem('token')
          commit('setToken', null)
          router.push('/auth/login')
        }
        return Promise.reject(error)
      })
    },
    interceptorsRequest (context) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${context.state.token}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    getProducts ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/products${payload || ''}`)
          .then((res) => {
            console.log(res)
            commit('setProducts', res.data.result)
            commit('setPaginations', res.data.paginations)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    insertProducts (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/products`, payload)
          .then((res) => {
            console.log(res)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    toLogout ({ commit }) {
      localStorage.removeItem('token')
      commit('setToken', null)
      router.push('/auth/login')
    }
  },
  getters: {
    isLogin (state) {
      return state.token !== null
    },
    products (state) {
      return state.products
    },
    getPage (state) {
      return state.paginations
    }
  },
  modules: {
  }
})
