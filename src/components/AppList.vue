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
    <h2 class="categories">Movies</h2>
    <div class="section">
        <div class="card" v-for="(movie,index) in store.movies" :key="index">
            <div class="wrapper">
                <div class="front-card">
                    <img v-if="movie.poster_path" :src="store.apiImg+movie.poster_path" alt="">
                    <img v-else src="../assets/images/No-Image-Placeholder.svg" alt="">
                </div>
                <div class="back-card">
                    <h2>{{movie.title}}</h2>
                    <h4>{{movie.original_title}}</h4>
                    <div>
                        <img class="flag-icon" v-if="nationFlag.includes(movie.original_language)" :src="getImg(movie.original_language)" alt="">
                        <p v-else>{{movie.original_language}}</p>
                    </div>
                    <span><i v-for="number in 5" :key="number" :class="number <= Math.ceil(movie.vote_average / 2) ? `fa-solid`:`fa-regular`" class=" fa-star"></i></span>
                    <p>{{movie.overview}}</p>
                    </div>
            </div>
            </div>
    </div>
    <h2 class="categories">Series</h2>
    <div class="section">
        <div class="card" v-for="(series,index) in store.series" :key="index">
            <div class="wrapper">
                <div class="front-card">
                    <img v-if="series.poster_path" :src="store.apiImg+series.poster_path" alt="">
                    <img v-else src="../assets/images/No-Image-Placeholder.svg" alt="">
                </div>
                <div class="back-card">
                    <h2>{{series.name}}</h2>
                    <h4>{{series.original_name}}</h4>
                    <div>
                        <img class="flag-icon" v-if="nationFlag.includes(series.original_language)" :src="getImg(series.original_language)" alt="">
                        <p v-else>{{series.original_language}}</p>
                    </div>
                        <span><i v-for="number in 5" :key="number" :class="number <= Math.ceil(series.vote_average / 2) ? `fa-solid`:`fa-regular`" class=" fa-star"></i></span>
                        <p>{{series.overview}}</p>
                    </div>
            </div>
            </div>
    </div>
</template>

<style lang="scss" scoped>

.categories{
    text-align: center;
    padding: 10px 0;
    font-size: 1.5rem;
}
.section{
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    width: 90%;
    margin: 0 auto;
}

.card{
    height: 100%;
    padding: 10px;
    width: calc(100% / 5);
    cursor: pointer;
    position: relative;
    perspective: 1000px;

    .wrapper{
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: transform .8s;
    }

    &:hover .wrapper{
        transform: rotateY(180deg);
    }
    .front-card{
        height: 100%;
    
    
        img{
        object-fit: contain;
    }
    }
}



.back-card{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow-y: auto;
    background-color: rgba(#000000, .8);
    color: white;
    padding: 1rem;
    transform: rotateY(180deg);
    .flag-icon{
        width: 30px;
        height: 30px;
    }
    i{
        color: gold;
    }
}

.back-card, .front-card{
    backface-visibility: hidden;
}

p{
    font-size: .7rem;
    color:lightgray;
}
</style>