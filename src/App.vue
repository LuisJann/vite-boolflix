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
  <SearchApp @searchButton="titleFilter"/>
  <AppList />
</template>

<style lang="scss">
@use "./styles/general.scss" as*;

</style>