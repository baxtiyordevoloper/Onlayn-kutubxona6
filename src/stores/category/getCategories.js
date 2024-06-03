import {defineStore} from "pinia";
import {reactive} from "vue";
import {client} from "@/plugins/axios.js";

export const useFetchCategories
    = defineStore("fetchCategories", () => {

        const state = reactive({
            categories: [],
            const: 0
        })

        function categoriesGet() {
            return new Promise((resolve, reject) => {
                client.get('categories')
                        .then((res) => {
                                console.log('Categoriyalar muvaffaqiyatli olindi')
                                state.categories = res.data['hydra:member']
                                state.count = res.data['hydra:totalItems']
                                resolve()
                            })
                            .catch(() => {
                                console.log('Categoriyalar olishda xatolik yuz berdi')
                                reject()
                            })

            })
        }

        return {categoriesGet, state}
})