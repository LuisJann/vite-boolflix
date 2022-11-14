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
  created(){
    this.titleFilter()
  },
  methods: {
    titleFilter(){
      let apiUrl = `${store.apiMovieURL}?api_key=${store.apiKey}`
      if(this.store.searchKey !== ""){
        apiUrl += `&query=${this.store.searchKey}`
      }
      axios.get(apiUrl).then((resp) => {
        this.store.movies = resp.data.results
        console.log(this.store.movies);
      })

    }
  }
}
</script>

<template>
  <SearchApp @searchButton="titleFilter"/>
  <AppList />
</template>

<style>

</style>