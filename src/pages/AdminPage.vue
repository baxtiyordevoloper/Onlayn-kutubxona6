<script setup>
import FormInput from "@/components/tegs/FormInput.vue";
import {ref} from "vue";
import FormButton from "@/components/tegs/FormButton.vue";

let email = ref(null)
let phone = ref(null)

function search(){
    console.log(email.value, phone.value)
}

function clear() {
    document.getElementById('email').value = ''
    document.getElementById('phone').value = ''
    email.value = null
    phone.value = null
}
</script>

<template>
    <div class="mt-5 mx-lg-5">
        <div class="row justify-content-center">
            <FormInput
                v-model="email"
                props-id="email"
                :label-name="$t('email')"
                class="col-12 row-col-sm-6 col-md-4 col-lg-2"
            />
            <FormInput
                v-model="phone"
                props-id="phone"
                :label-name="$t('phone')"
                class="col-12 row-col-sm-6 col-md-4 col-lg-2"
            />
            <div class="col-6 col-md-4 col-lg-2 align-self-end mb-3">
                <FormButton @click="search()" :name="$t('search')" class="btn-outline-success w-100"/>
            </div>
            <div class="col-6 col-md-4 col-lg-2 align-self-end mb-3">
                <FormButton @click="clear()" :name="$t('cleaning')" class="btn-outline-success w-100"/>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-hover table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">{{$t('email')}}</th>
                    <th scope="col">{{$t('phone')}}</th>
                    <th scope="col">{{$t('age')}}</th>
                    <th scope="col">{{$t('gender')}}</th>
                    <th scope="col">{{$t('date_of_registration')}}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>

</style>