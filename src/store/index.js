import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: localStorage.getItem('token') || null,
    products: []
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setToken (state, payload) {
      state.token = payload
    }
  },
  actions: {
    toLogout (setex) {
      localStorage.removeItem('token')
      setex.commit('setToken', null)
      router.push('/auth/login')
    },
    interceptorsResponse (setex) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        console.log(error.response)
        if (error.response.status === 403 && error.response.data.result.message === 'token invalid') {
          alert('Token tidak boleh diubah')
          localStorage.removeItem('token')
          setex.commit('setToken', null)
          router.push('/auth/login')
        }
        return Promise.reject(error)
      })
    },
    interceptorsRequest (setex) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${setex.state.token}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    login (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:4000/api/v1/users/login', payload)
          .then((res) => {
            console.log(res)
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    getProducts (setex) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:4000/api/v1/products')
          .then((res) => {
            console.log(res)
            setex.commit('setProducts', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    }
  },
  getters: {
    isLogin (state) {
      return state.token !== null
    },
    products (state) {
      return state.products
    }
  },
  modules: {
  }
})
