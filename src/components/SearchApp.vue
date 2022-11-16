<script>
import {store} from "../store"

export default{
    name:"SearchApp",
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div class="search-section">
        <input type="text" v-model="store.searchKey">
        <button @click="$emit(`searchButton`)">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>
.search-section{
    padding-right: 10px;
    input{
        padding: 5px;
    }

    button{
        padding: 5px;
    }
}
</style>