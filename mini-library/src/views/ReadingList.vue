<template>
  <div class="readinglist">
      <router-link to="/">Back</router-link>
      <h1>readinglist</h1>
      <ul>
          <li v-for="book in readingList" :key="book.id">
              <span>
              <h4> {{book.title}} </h4>
              <p>{{book.author}}</p>
              </span>

          </li>
      </ul>
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

</style>