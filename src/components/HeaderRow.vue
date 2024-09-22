<script setup>
import {useI18n} from "vue-i18n";
import {computed, reactive, ref, provide} from "vue";
import {useFetchBooks} from "@/stores/book/getBooks.js";


const i18n = useI18n();
let isAdmin = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).roles.includes("ROLE_ADMIN")
function logout() {
    localStorage.removeItem("token");
    location.assign('/login')
}

let search = ref('')

function searchBooks(){
provide('searchBook', search)

}
</script>

<template>
    <div class="row">
        <div class="col">
            <header>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <div class="container-fluid">
                        <router-link to="/" class="navbar-brand">{{$t('book')}}</router-link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                              <li v-if="isAdmin" class="nav-item dropdown">
                                  <a
                                        class="nav-link dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                  >
                                      {{$t('category')}}
                                  </a>
                                  <ul class="dropdown-menu">
                                      <li>
                                          <router-link class="dropdown-item" to="/edit-category">
                                              {{$t('update/delete')}}
                                          </router-link>
                                      </li>
                                  </ul>
                              </li>
                                <li v-if="isAdmin" class="nav-item">
                                    <router-link to="/create-book" class="nav-link">{{$t('createBook')}}</router-link>
                                </li>
                                <li v-if="isAdmin" class="nav-item">
                                    <router-link to="/create-categoriya" class="nav-link">{{$t('create_category')}}
                                    </router-link>
                                </li>
                                <li v-if="isAdmin" class="nav-item">
                                    <router-link to="/admin-page" class="nav-link">{{$t("admin-page")}}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/cabinet_page" class="nav-link">Kabinet</router-link>
                                </li>
                                <li class="nav-item">
                                    <input v-model="search" type="text" @input="searchBooks()" placeholder="Qidiruv">
                                </li>
                                <li class="nav-item">
                                    <router-link @click="logout()" class="nav-link" to="/login">{{$t('logout')}}
                                    </router-link>
                                </li>
                            </ul>

                            <div class="d-flex">
                                <select
                                    @change="i18n.locale.value = $event.target.value"
                                    :value="i18n.locale.value"
                                    class="form-select"
                                >
                                    <option value="uz">UZB</option>
                                    <option value="ru">RUS</option>
                                    <option value="en">ENG</option>
                                </select>
                            </div>

                        </div>
                    </div>
                </nav>
            </header>
        </div>
    </div>
</template>

<style scoped>

</style>