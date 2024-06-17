<script setup>
import FormInput from "@/components/tegs/FormInput.vue";
import FormButton from "@/components/tegs/FormButton.vue";
import {computed, ref} from "vue";
import {useFetchCategories} from "@/stores/category/getCategories.js";
import {useChangeCategory} from "@/stores/category/changeCategory.js";
import {useDeleteCategory} from "@/stores/category/deleteCategory.js";

const categories = computed(() => useFetchCategories().state.categories)
let isChange = ref(false);
let name = ref('')
let id =ref()

function select(category) {
    isChange.value = true
    name.value = category.name;
    id.value = category.id;
}

function change(){
    useChangeCategory().categoryChange(id.value, {name:name.value})
        .then(() => {
            useFetchCategories().categoriesGet()
            isChange.value = false
        })
}
function deleteCategory(id) {
    useDeleteCategory().categoryDelete(id)
        .then(() => {
            useFetchCategories().categoriesGet()
        })
}
</script>

<template>
   <div>
       <div v-if="isChange" class="row">
           <div class="col-12 col-md-6">
               <FormInput v-model="name" props-id="category" :label-name="$t('category')"/>
               <div class= "text-end">
                   <FormButton @click="change()" :name="$t('update')" class="btn btn-success"/>
               </div>
           </div>
       </div>
       <table v-else class="table border" >
           <thead>
           <tr>
               <th scope="col">Id</th>
               <th scope="col">{{$t('category')}}</th>
               <th scope="col">{{$t('update')}}</th>
               <th scope="col">{{$t('delete')}}</th>
           </tr>
           </thead>
           <tbody>
           <tr v-for="category in categories" :key="category.id">
               <th>{{category.id}}</th>
               <td>{{category.name}}</td>
               <td><span @click="select(category)" class="btn text-success">{{$t('update')}}</span></td>
               <td><span @click="deleteCategory(category.id)" class="btn text-danger">{{$t('delete')}}</span></td>
           </tr>
           </tbody>
       </table>
   </div>
</template>

<style scoped>

</style>