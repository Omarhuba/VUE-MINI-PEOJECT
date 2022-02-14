<template>
  <div class="book-view">
      <Book v-if="book" :book="book" large/>
    <article v-else>
      Book is not found
    </article>
    <article>
     <div class="back">
        <router-link to="/">
         <img class="back" src="@/assets/back.png" alt="" />
        </router-link>
      </div>
      <p>{{book.plot}}</p>
      <button @click="save">Oh, I want to read...</button>
    </article>
  </div>
</template>

<script>
// import books from '@/assets/books.json'
import Book from '@/components/Book'
export default {
name: 'bookview',
components:{Book},
computed:{
  book(){
    // for(let book of this.$store.state.books){
    //   if(book.id == this.$route.params.id){
    //     return book
    //   }
    // }
    // return null
    return this.$store.state.books.find(book => book.id ==this.$route.params.id)
  }
},
methods:{
  save(){
    this.$store.dispatch('saveBook',this.book.id)
  }
}
}
</script>

<style scoped lang="scss">
  .book-view{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    place-items: center;
    padding: 5rem;
    p{
      width: 500px;
    }
  }

     button{
    margin: 2rem;
    width: 220px;
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


  img {
    background-color: white;
    width: 50px;
    border-radius: 50%;
}
 
</style>