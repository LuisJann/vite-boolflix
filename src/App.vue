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
      let apiUrl = `${store.apiMovieURL}?api_key=${store.apiKey}&query=ciao`
      axios.get(apiUrl).then((resp) => {
        console.log(resp);
      })

    }
  }
}
</script>

<template>
  <SearchApp />
  <AppList />
</template>

<style>

</style>