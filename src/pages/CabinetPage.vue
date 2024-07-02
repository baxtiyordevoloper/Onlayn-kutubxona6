<script setup>
import {useAboutUser} from "@/stores/user/getAboutMe.js";
import {computed} from "vue";

const aboutMe = computed(() => useAboutUser().state)
useAboutUser().aboutMe()
</script>

<template>
    <div class="row">
        <div class="col mt-3">
            <h1> Salom {{aboutMe.givenName}} {{aboutMe.surname}},
            </h1>
            <h2>Siz haqingizdagi ma'lumotlar:</h2>

            <table class="table table-dark table-striped mt-5 mb-5">
                <thead>
                <tr class="text-light">
                    <th scope="col">ID</th>
                    <th scope="col">Email</th>

                    <th scope="col">Telfon raqam</th>
                    <th scope="col">Yoshingiz</th>
                    <th scope="col">Jinsingiz</th>
                    <th scope="col">Registratsiya sanasi</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">{{aboutMe.id}}</th>
                    <td>{{aboutMe.email}}</td>
                    <td>{{aboutMe.phone}}</td>
                    <td>{{aboutMe.age}}</td>
                    <td>{{aboutMe.gender}}</td>
                    <td>{{aboutMe.createdAt.slice(0, 10)}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>

</style>