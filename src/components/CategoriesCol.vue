<script setup>
import {useFetchCategories} from "@/stores/category/getCategories.js";
import {computed} from "vue";

useFetchCategories().categoriesGet()
const categories = computed(() => useFetchCategories().state.categories)

</script>

<template>
    <div class="col-12 col-md-2">
        <div class="list-group">
            <router-link
                v-for="category in categories"
                :key="category.id"
                :to="'/by-category/' + category.id"
                class="list-group-item list-group-item-action"
            >
                {{category.name}}
            </router-link>
        </div>
    </div>
</template>

<style scoped>

</style>