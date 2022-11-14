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
    <input type="text" v-model="store.searchKey">
    <button @click="$emit(`searchButton`)">Cerca</button>
</template>