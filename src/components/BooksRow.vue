<script setup>
import {useFetchBooks} from "@/stores/book/getBooks.js";
import {computed, watch} from "vue";
import {useRoute} from "vue-router";

console.log(useRoute())

useFetchBooks().booksGet()
const footballs = computed(() => useFetchBooks().state.footballs)
const host = import.meta.env.VITE_API_DOMEN
const route = useRoute()

watch(
    () => route.params.id,
    (value) => {
        if (value === undefined) {
            useFetchBooks().booksGet()
        }else  {
            useFetchBooks().booksGet('by-category?categoryId=' + route.params.id)
        }
    })
</script>
<template>
    <div class="row">
        <div
            v-for="book in footballs" :key="book.id"
            class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4"
        >
            <div class="card h-400">
                <img :src="host + book.image.contentUrl" class="card-img-top" alt="...">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">{{book.name}}</h5>
                    <h5 class="text-end" style="font-size: 15px">{{book.category.name}}</h5>
                    <p class="card-text">{{book.description}}</p>
                    <router-link :to="'/book-info' + book.id" class="btn btn-primary">O'qish</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-img-top {
    height: 500px;
    object-fit: cover;
}
</style>