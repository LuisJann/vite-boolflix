import { reactive } from "vue";

export const store = reactive({
    apiMovieURL: "https://api.themoviedb.org/3/search/movie",
    apiSeriesURL: "https://api.themoviedb.org/3/search/tv",
    apiKey: "4f82e64b5bbfb463a2a88921fe22c942",
    loading: false,
    movies: [],
    series: [],
    searchKey: "",
});