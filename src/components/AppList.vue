<script>
import {store} from "../store";

export default {
    name:"AppList",
    data(){
        return{
            store
        }
    },
}
</script>

<template>
    <h2>Film</h2>
    <div class="section">
        <div class="card" v-for="(movie,index) in store.movies" :key="index">
            <h2>{{movie.title}}</h2>
            <h3>{{movie.original_title}}</h3>
            <p>{{movie.original_language}}</p>
            <span>{{movie.vote_average}}</span>
        </div>
    </div>
    <h2>Series</h2>
    <div class="section">
        <div class="card" v-for="(series,index) in store.series" :key="index">
            <h2>{{series.name}}</h2>
            <h3>{{series.original_name}}</h3>
            <p>{{series.original_language}}</p>
            <span>{{series.vote_average}}</span>
        </div>
    </div>
</template>

<style>
.section{
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
}

.card{
    border: 1px solid black;
    padding: 10px;
}
</style>