<script setup>
import FormInput from "@/components/tegs/FormInput.vue";
import FormButton from "@/components/tegs/FormButton.vue";
import {reactive, ref} from "vue";
import {useFetchCategories} from "@/stores/category/getCategories.js";
import {useAddFile} from "@/stores/mediaObject/addFile.js";
import {useCreateBook} from "@/stores/book/createBook.js";
import {useRouter} from "vue-router";


const router = useRouter()
let file = ref()

let book = reactive({
    name: "",
    description: "",
    text: "",
    category: "",
    image: ""
})
function selectImage(event) {
   file = event.target.files[0]
}

function create() {
    useAddFile().addFile(file)
        .then((res) => {
            book.image = '/api/media_objects/' + res.data.id

            useCreateBook().bookCreate(book)
                .then(() => {
                    router.push('/')
                })
        })
}

</script>

<template>
    <div class="row mb-3">
        <div class="col-12 col-md-6">
            <h1>Kitob yaratish</h1>
            <FormInput v-model="book.name" props-id="name" label-name="Kitob nomi"/>
            <FormInput v-model="book.description" props-id="description" label-name="Kitob ta'rifi"/>
            <textarea  v-model="book.text" class="form-control mb-3" rows="10" placeholder="Kitob matni"/>

            <select v-model="book.category" class="form-select mb-3">
                <option
                    v-for="category in useFetchCategories().state.categories"
                    :key="category.id"
                    :value="category['@id']"
                >
                    {{category.name}}
                </option>
            </select>

            <input @change="selectImage($event)" type="file" class="form-control mt-3">

            <div class="text-end">
                <FormButton @click="create()" name="Yaratish" class="btn-success mt-3"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>