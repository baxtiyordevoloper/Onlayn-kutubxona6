<script setup>
import {useRouter} from "vue-router";
const router = useRouter();

function logout() {
    localStorage.removeItem("token");
    router.push("/login");
}
</script>

<template>
    <div class="row">
        <div class="col">
            <header>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <div class="container-fluid">
                        <router-link to="/" class="navbar-brand">Kitoblar</router-link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                              <li class="nav-item dropdown">
                                  <a
                                        class="nav-link dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                  >
                                      Kategoriya
                                  </a>
                                  <ul class="dropdown-menu">
                                      <li>
                                          <router-link class="dropdown-item" to="/edit-category">
                                              O'zgartirish & O'chirish
                                          </router-link>
                                      </li>
                                  </ul>
                              </li>
                                <li class="nav-item">
                                    <router-link @click="logout()" class="nav-link" to="/login">Kirish</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    </div>
</template>

<style scoped>

</style>