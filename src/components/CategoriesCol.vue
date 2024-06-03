<script setup>
import {useFetchCategories} from "@/stores/category/getCategories.js";
import {computed} from "vue";

useFetchCategories().categoriesGet()
const categories = computed(() => useFetchCategories().state.categories)

</script>

<template>
    <div class="col-12 col-md-2">
        <div class="list-group">
            <a
                v-for="category in categories"
                :key="category.id"
                class="list-group-item list-group-item-action"
            >
                {{category.name}}
            </a>
        </div>
    </div>
</template>

<style scoped>

</style>