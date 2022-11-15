<script>
import {store} from "../store";

export default {
    name:"AppList",
    data(){
        return{
            store,
            nationFlag:[`en`, `it`, `es`]
        }
    },
    methods:{
        getImg(imgName){
            return new URL (`../assets/images/${imgName}.png`, import.meta.url).href;
        },
    },
}
</script>

<template>
    <h2>Movies</h2>
    <div class="section">
        <div class="card" v-for="(movie,index) in store.movies" :key="index">
            <h2>{{movie.title}}</h2>
            <h3>{{movie.original_title}}</h3>
            <div>
                <img v-if="nationFlag.includes(movie.original_language)" :src="getImg(movie.original_language)" alt="">
                <p v-else>{{movie.original_language}}</p>
            </div>
                <span><i v-for="number in Math.ceil(movie.vote_average / 2)" class="fa-solid fa-star"></i></span>
            </div>
    </div>
    <h2>Series</h2>
    <div class="section">
        <div class="card" v-for="(series,index) in store.series" :key="index">
            <h2>{{series.name}}</h2>
            <h3>{{series.original_name}}</h3>
            <div>
                <img v-if="nationFlag.includes(series.original_language)" :src="getImg(series.original_language)" alt="">
                <p v-else>{{series.original_language}}</p>
            </div>
                <span><i v-for="number in Math.ceil(series.vote_average / 2)" class="fa-solid fa-star"></i></span>
            </div>
    </div>
</template>

<style>
.section{
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    width: 90%;
    margin: 0 auto;
}

.card{
    border: 1px solid black;
    padding: 10px;
    width: calc(100% / 5);
}

img{
    width: 30px;
    height: 30px;
}
</style>