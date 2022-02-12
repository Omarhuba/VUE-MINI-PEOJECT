<template>
  <div class="book" :class="{large}" :style="{background:backgroundColor}">
      <h1>{{book.title}}</h1>
      <p>{{book.author}}</p>
  </div>
</template>

<script>
export default {
name: 'book',
props:{
    book: Object,
    large: Boolean
},
computed:{
    backgroundColor(){
        return `linear-gradient(135deg, rgba(34,193,195,1) 0%,${this.book.backgroundColor}, rgba(255,158,50,1) 100%)`;
    }
}

}
</script>

<style scoped lang="scss">
.book{
    // background-color: coral;
    color: black;
    width: 250px;
    height: 350px;
    text-align: center;
    display: flex;
    flex-direction: column-reverse;
 

}
.book.large{
    width: 400px;
    height: 550px;
    text-align: center;
}

</style>