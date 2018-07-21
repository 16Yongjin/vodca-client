import Vue from 'vue'
import Vuex from 'vuex'
import voca from './voca'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    title: '단어장',
    order: 0,
    selected: [],
    voca,
    reviewed: false
  },
  mutations: {
    changeOrder (state) {
      state.order = state.order ? 0 : 1
    },
    setTitle (state, title) {
      state.title = title
    },
    setReviewed (state, payload) {
      state.reviewed = payload
    },
    addSelected (state, index) {
      state.selected.push(index)
      console.log(state.selected)
    },
    removeSelected (state, index) {
      const idx = state.selected.indexOf(index)
      if (idx > -1) {
        state.selected.splice(idx, 1)
      }
    }
  },
  getters: {
    selectedVoca (state) {
      return state.selected.map(idx => state.voca[idx])
    }
  }
})
