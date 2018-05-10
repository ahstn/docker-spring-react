import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { API_URL } from '@/common/config'

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },

  query (resource, params) {
    return Vue.axios
      .get(resource, params)
      .catch((error) => {
        throw new Error(`[DSR] ApiService ${error}`)
      })
  },

  get (resource) {
    return Vue.axios
      .get(`${resource}`)
      .catch((error) => {
        throw new Error(`[DSR] ApiService ${error}`)
      })
  }
}

export default ApiService
