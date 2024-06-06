import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useChangeCategory
    = defineStore('changeCategory', () => {
        function categoryChange(id, data) {
                return new Promise((resolve, reject) => {
                        client.put('categories/' + id, data)
                            .then(() => {
                                    console.log("Kategoriya muvaffaqiyatli O'zgardi")
                                    resolve()
                            })
                            .catch(() => {
                                    console.log("Kategoriyani o'zgartishda xatolik yuz berdi")
                                reject()
                            })
                })
        }
        return {categoryChange}
})