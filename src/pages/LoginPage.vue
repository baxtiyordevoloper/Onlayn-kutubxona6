<script setup>
import FormInput from "@/components/tegs/FormInput.vue";
import FormButton from "@/components/tegs/FormButton.vue";
import {ref} from "vue";

let foo = ref();
let bar = ref();

</script>

<template>
    <div class="row justify-content-center align-items-center vh-100">
        <div class="col-12 col-sm-8 col-md-6 col-xl-4">

            <h1 class="text-center">Kirish</h1>
            <form>
                <input v-model="foo" type="text"> {{foo}}

                <form-input v-model="bar" props-id="email" label-name="Email" input-type="email"/> {{bar}}
                <form-input props-id="password" label-name="Parol" input-type="password"/>
                <div class="text-end">
                    <FormButton name="Kirish" class="btn-primary" />
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>