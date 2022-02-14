<template>
  <div class="library">
    <h1>MINI LIBRARY</h1>
    <router-link class="reading-list" to="/ReadingList/">Reading List</router-link>
    <nav>
      <router-link :to="'/books/'+book.id" v-for="book in books" :key="book.id">
        <Book :book="book"/>
      </router-link>
    </nav>
    <span>
    <button @click="prev">prev</button>
    <button @click="next">next</button>
    </span>
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
body{
  background-color: #ccc;
}
h1{
  width: 350px;
  margin: auto;
  padding: 2rem;
  color: chocolate;
  font-size: 3rem;
}
.reading-list{
  font-size: 1.5rem;
  color: white;
  padding: 1rem;
  margin:  10rem;
  border-radius: 10px;
  background-color: chocolate;
  text-decoration: none;
}
nav{
  display: grid;
  grid-template-columns: repeat(4 , 1fr);
  grid-gap: 2rem;
  padding: 2rem 10rem;
  a{
    text-decoration: none;
  }
}
span{
  display: flex;
  justify-content: center;
  align-items: center;
  button{
    margin: 2rem;
    width: 120px;
    height: 40px;
    font-size: 1.2rem;
    border-radius: 5px;
    border: none;
    background-color: cadetblue;
    color: white;
    cursor: pointer;
    &:hover{
      background-color: aqua;
      transition: 0.5s;
    }
  }
}

</style>