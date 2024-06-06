import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useDeleteCategory
    = defineStore('deleteCategory', () => {
        function categoryDelete(id) {
            return new Promise((resolve, reject) => {
                client.delete("categories/" + id)
                    .then(() => {
                        console.log("Kategoriya muvaffaqiyatli o'chirildi")
                        resolve()
                    })
                    .catch(() => {
                        console.log("Kategoriyani o'chirishda xatolik yuz berdi")
                        reject()
                    })
            })
        }
        return {categoryDelete}
})