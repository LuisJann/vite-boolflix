<script>
import SearchApp from './components/SearchApp.vue';
import AppList from './components/AppList.vue';



import {store} from "./store";
import axios from "axios";
export default{
  components:{
    SearchApp,
    AppList,
  },
  data(){
    return{
      store,
    }
  },
  methods: {
    titleFilter(){
      let apiUrlMovie = `${store.apiMovieURL}?api_key=${store.apiKey}`
      let apiUrlSeries = `${store.apiSeriesURL}?api_key=${store.apiKey}`
      if(this.store.searchKey !== ""){
        apiUrlMovie += `&query=${this.store.searchKey}`
        apiUrlSeries += `&query=${this.store.searchKey}`
      }
      axios.get(apiUrlMovie).then((resp) => {
        this.store.movies = resp.data.results
        console.log(this.store.movies);
      }).catch(err =>{
        console.log(err);
      })
      axios.get(apiUrlSeries).then((resp) => {
        this.store.series = resp.data.results 
        console.log(this.store.series);
      }).catch(err =>{
        console.log(err);
      })
      this.store.searchKey="";
    },
  }
}
</script>

<template>
  <div class="container">
    <div class="logo">
      <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
    </div>
    <div>
        <SearchApp @searchButton="titleFilter"/>
    </div>
  </div>
  <main>
    <AppList />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as*;
  .logo{
    width: 100px;
    padding-left: 10px;
  }

main{
  width: 100%;
  height: 100vh;
  background-color: gray;
  overflow-y: auto;
}
</style>