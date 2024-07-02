<script setup>
import {useFetchBook} from "@/stores/book/getBook.js";
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute();
const bookStore = useFetchBook()

bookStore.bookGet(route.params.bookId)
const book = computed(() => bookStore.state)

</script>

<template>
    <h1>{{book.name}} </h1>

    <p>
        {{book.text}}
    </p>


</template>

<style scoped>

</style>