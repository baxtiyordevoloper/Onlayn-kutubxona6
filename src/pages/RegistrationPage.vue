<script setup>
import FormInput from "@/components/tegs/FormInput.vue";
import FormButton from "@/components/tegs/FormButton.vue";
import {reactive,ref} from "vue";
import {useCreateUser} from "@/stores/user/registration.js";


let registration = reactive({
    email: '',
    password: '',
    age: 0,
    gender: '',
    phone: '',
    givenName: '',
    surname: ''
});
function regUser(){
     useCreateUser().userCreate(registration)
         .then(() => {
            localStorage.assign('/login')
         })
}

</script>

<template>
    <div class="row justify-content-center align-items-center vh-100">
        <div class="col-12 col-sm-8 col-md-6 col-xl-4">
            <form>
                <h1 class="text-center">Registratsiya</h1>
                <FormInput v-model="registration.givenName"
                           props-id="givenName"
                           label-name="Ism"
                           input-type="givenName"
                />
                <FormInput v-model="registration.surname"
                           props-id="surname"
                           label-name="Familya"
                           input-type="surname"
                />

                <FormInput v-model="registration.email"
                           props-id="email"
                           label-name="Email"
                           input-type="email"
                />
                <FormInput
                    v-model="registration.password"
                    props-id="current-password"
                    label-name="Parol"
                    input-type="password"

                />
                <div class="mb-3">
                    <label for="exampleInputEmail" class="form-label">Yosh</label>
                    <input v-model="registration.age" type="number" class="form-control" id="exampleInputEmail">
                </div>
                <FormInput
                    v-model="registration.gender"
                    props-id="gender"
                    label-name="Jins"
                />
                <FormInput
                    v-model="registration.phone"
                    props-id="phone"
                    label-name="Telfon raqam"
                />

                <div class= "d-flex justify-content-between">
                    <FormButton @click="regUser" name="Registratsiya" class="btn-primary"/>
                    <router-link class="btn btn-info" to="/login">Kirish</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>