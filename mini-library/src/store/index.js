import Vue from 'vue'
import Vuex from 'vuex'
import books from '@/assets/books.json'

Vue.use(Vuex)

const PAGE_SIZE = 8

export default new Vuex.Store({
  state: {
    books: [...books],
    page: 1,
    readingList:[],
  },
  mutations: {
    previousPage(state){
      state.page --
    },
    nextPage(state){
      state.page ++
    },
    addToReadingList(state, id){
      state.readingList.push(id)
    }
  },
  actions: {
    saveBook(context,id){
      if(!context.state.readingList.includes(id)){
        context.commit('addToReadingList',id)
      }
    }
  },
  modules: {
  },
  getters:{
    currentPage(state){
      return state.books.filter((_, index)=>
      index >= (state.page-1)*PAGE_SIZE &&
      index < state.page*PAGE_SIZE)
    },
    readingList(state){
      return state.readingList.map(id=>
        state.books.find(book => book.id == id))
    }
  }
})
