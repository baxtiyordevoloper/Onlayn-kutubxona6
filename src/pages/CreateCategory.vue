<script setup>
import FormInput from "@/components/tegs/FormInput.vue";
import FormButton from "@/components/tegs/FormButton.vue";

import {useCreateCategory} from "@/stores/category/createCategory.js";
import router from "@/plugins/router.js";
import {reactive} from "vue";

let categoriya = reactive({
    name: ""
})

function create() {
    useCreateCategory().categoryCreate(categoriya)
        .then(() => {
            router.push('/')
        })
}
</script>

<template>
    <div class="row mt-3">
        <div class="col-12 col-md-6">
            <h1>{{$t('create_category')}}</h1>
            <FormInput v-model="categoriya.name" props-id="categoriya.name"
                       :label-name="$t('nameCategory') ">
                 </FormInput>
            <div class="text-end">
                <FormButton @click="create()" :name="$t('createdAdd')" class="btn-success mt-3"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>