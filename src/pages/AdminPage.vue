<script setup>
import FormInput from "@/components/tegs/FormInput.vue";
import {ref} from "vue";
import FormButton from "@/components/tegs/FormButton.vue";
import {useFetUsers} from "@/stores/user/getUser.js";

//Umumiy
let query = ref('?page=1')
const storeUser = useFetUsers()
storeUser.usersGet('?page=1')
const {state} = storeUser

// Filter uchun
let email = ref(null)
let phone = ref(null)

function search(){
    query.value = '?page=1'

    if (email.value) {
        query.value += '&email=' + email.value
    }

    if (phone.value) {
        query.value += '&phone=' + phone.value
    }

    if (email.value || phone.value) {
        storeUser.usersGet(query.value)
    }
}

function clear() {
    document.getElementById('email').value = ''
    document.getElementById('phone').value = ''
    email.value = null
    phone.value = null

    storeUser.usersGet('?page=1')
}

// Paginatsiya uchun
let currentPage = ref(1)
function changePage(value) {
   currentPage.value = value
    storeUser.usersGet(query.value.replace(/page=[1-9]/, 'page=' + value))
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
                <tr v-for="user in state.users" :key="user.id">
                    <th scope="row">{{user.id}}</th>
                    <td>{{user.email}}</td>
                    <td>{{user.phone}}</td>
                    <td>{{user.age}}</td>
                    <td>{{user.gender}}</td>
                    <td>{{user.createdAt.slice(0, 10)}}</td>
                </tr>
                </tbody>
            </table>
            <div class="me-3">
              {{$t('total_number_of_users')}}  {{state.totalItems}}
            </div>
        </div >

        <nav>
            <ul class="pagination justify-content-end">
                <li :class="{'disabled': currentPage === 1}">
                    <span @click="changePage(1)" class="page-link rounded">Previous</span>
                </li>
                <li
                  v-for="index in state.pageCount"
                  :key="index"
                  :class="{'acive': currentPage === index}"
                  class="page-item mx-1"
                >
                    <span @click="changePage(index)" class="page-link rounded">{{index}}</span>
                </li>
                <li :class="{'disabled': currentPage === state.pageCount}">
                    <span @click="changePage(state.pageCount)" class="page-link rounded btn">Next</span>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>

</style>