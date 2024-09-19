<script setup>
import {ref} from "vue";
import {useFetchBooks} from "@/stores/book/getBooks.js";

let query = ref('?page=1')
const storeBook = useFetchBooks()
storeBook.booksGet('?page=1')
const {state} = storeBook
let currentPage = ref(1)

function changePage(value) {
    currentPage.value = value
    storeBook.booksGet(query.value.replace(/page=[1-9]/, 'page=' + value))
}
</script>

<template>
    <div class="row">
        <div class="col">
            <nav>
                <ul class="pagination justify-content-lg-start">
                    <li :class="{'disabled': currentPage === 1}">
                        <span @click="changePage(1)" class="page-link rounded">&laquo;</span>
                    </li>
                    <li
                        v-for="index in state.pageCount"
                        :key="index"
                        :class="{'active': currentPage === index}"
                        class="page-item mx-1"
                    >
                        <span @click="changePage(index)" class="page-link rounded">{{index}}</span>
                    </li>
                    <li :class="{'disabled': currentPage === state.pageCount}">
                        <span @click="changePage(state.pageCount)" class="page-link rounded">&raquo;</span>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped>

</style>