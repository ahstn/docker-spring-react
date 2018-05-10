import ApiService from '@/common/api.service'
import { SET_ERROR } from './common.mutations.js'
import { SET_USER, SET_USERS, FETCH_USER, FETCH_USERS } from './user.mutations'

const state = {
  errors: null,
  users: []
}

const getters = {
  users (state) {
    return state.users
  }
}

const actions = {
  [FETCH_USER] (context, id) {
    ApiService
      .get(`users/${id}`)
      .then(({ data }) => {
        context.commit(SET_USER, data._embedded.user)
      })
      .catch(({ response }) => {
        context.commit(SET_ERROR, response.data.errors)
      })
  },

  [FETCH_USERS] (context) {
    ApiService
      .get('users')
      .then(({ data }) => {
        context.commit(SET_USERS, data._embedded.user)
      })
      .catch(({ response }) => {
        context.commit(SET_ERROR, response.data.errors)
      })
  }
}

const mutations = {
  [SET_USER] (state, user) {
    state.users.push(user)
    state.errors = {}
  },

  [SET_USERS] (state, users) {
    state.users = users
    state.errors = {}
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
