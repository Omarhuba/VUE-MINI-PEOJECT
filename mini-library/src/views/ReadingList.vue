<template>
  <div class="readinglist">
       <div class="back">
        <router-link to="/">
         <img class="back" src="@/assets/back.png" alt="" />
        </router-link>
      </div>
      <h1>READING-LIST</h1>
      <div class="readinglistView">
      <ul>
          <li v-for="book in readingList" :key="book.id">
              <span>
              <h4> {{book.title}} </h4>
              <p>{{book.author}}</p>
              </span>

          </li>
      </ul>
      </div>
  </div>
</template>

<script>
export default {
    computed:{
        readingList(){
            return this.$store.getters.readingList
        }
    }
}
</script>

<style scoped lang="scss">
span{
    display: flex;
    h4,p{
        margin: 1rem;

    }
}
img {
    background-color: white;
    width: 50px;
    border-radius: 50%;
    margin: 2rem 0 0 5rem;
}
h1{
    width: 300px;
    margin:  1rem auto;
}
.readinglistView{
    background-color: darkorange;
    color: white;
    list-style: none;
    width: 500px;
    height: 600px;
    border-radius: 10px;
    margin: auto;
    display: flex;
    justify-content: center;
}
</style>