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
    paginations: null,
    carts: []
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
    },
    addCart (state, payload) {
      const isCart = state.carts.find((item) => {
        return item.id === payload.id
      })
      console.log(isCart)
      if (!isCart) {
        const item = payload
        item.count = 1
        state.carts.push(item)
      } else {
        console.log(payload.id)
        state.carts = state.carts.filter((item) => {
          return item.id !== payload.id
        })
      }
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
    },
    getCart (state) {
      return state.carts
    },
    countCart (state) {
      return state.carts.length
    }
  },
  actions: {
    register ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/users/register`, payload)
          .then((res) => {
            console.log(res)
            router.push('/login')
            alert('Registrasi akun berhasil')
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            alert('Registrasi akun gagal')
            reject(err)
          })
      })
    },
    login ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/users/login`, payload)
          .then((res) => {
            console.log(res)
            commit('setUser', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            router.push('/home')
            alert('Login berhasil')
            resolve(res.data.result[0])
          })
          .catch((err) => {
            console.log(err)
            alert('Login gagal')
            reject(err)
          })
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
    interceptorsResponse ({ commit }) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        console.log(error.response.data.result.message)
        if (error.response.status === 401) {
          console.log(error.response)
          if (error.response.data.result.message === 'Token is invalid') {
            commit('setToken', null)
            localStorage.removeItem('token')
            router.push('/login')
            alert('Anda tidak boleh merubah token')
          } else if (error.response.data.result.message === 'Token is expired') {
            commit('setToken', null)
            localStorage.removeItem('token')
            router.push('/login')
            alert('Session telah habis, silahkan login kembali')
          }
        }
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
            alert('Add product berhasil')
            resolve(res)
          })
          .catch((err) => {
            console.log(err)
            alert('Add product gagal')
            reject(err)
          })
      })
    },
    editProducts (context, payload) {
      return new Promise((resolve, reject) => {
        console.log('ini update product')
        axios.patch(`${process.env.VUE_APP_BASE_URL}/api/v1/products/${payload.id}`, payload.data)
          .then((res) => {
            console.log(res)
            alert('Edit product berhasil')
            resolve(res)
          })
          .catch((err) => {
            alert('Edit product gagal')
            reject(err)
          })
      })
    },
    deleteProducts (context, payload) {
      return new Promise((resolve, reject) => {
        console.log('ini delete product' + payload)
        axios.delete(`${process.env.VUE_APP_BASE_URL}/api/v1/products/${payload}`)
          .then((res) => {
            console.log(res)
            // alert('Delete product berhasil')
            resolve(res)
          })
          .catch((err) => {
            alert('Delete product gagal')
            reject(err)
          })
      })
    },
    toLogout ({ commit }) {
      localStorage.removeItem('token')
      commit('setToken', null)
      router.push('/login')
      alert('Logout berhasil')
    }
  },
  modules: {
  }
})
