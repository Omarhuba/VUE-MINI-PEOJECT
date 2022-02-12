<template>
  <div class="library">
    <router-link to="/ReadingList/">Reading List</router-link>
    <nav>
      <router-link :to="'/books/'+book.id" v-for="book in books" :key="book.id">
        <Book :book="book"/>
      </router-link>
    </nav>
    <button @click="prev">prev</button>
    <button @click="next">next</button>
  </div>
</template>

<script>
import Book from '@/components/Book'
export default {
  name: 'library',
  components:{ Book },
  data(){return{

  }},
  computed:{
    books(){
      return this.$store.getters.currentPage
    }
  },
  methods:{
    prev(){
      this.$store.commit('previousPage')
    },
    next(){
      this.$store.commit('nextPage')
    }
  }
}
</script>

<style scoped lang="scss">
nav{
  display: grid;
  grid-template-columns: repeat(4 , 1fr);
  grid-gap: 2rem;
  padding: 2rem 10rem;
  a{
    text-decoration: none;
  }
}

</style>