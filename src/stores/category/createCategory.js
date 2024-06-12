import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useCreateCategory =
    defineStore('createCategory', () => {
        function categoryCreate(data) {
            return new Promise((resolve,reject) =>{
                client.post('categories/my', data)
                    .then((res) =>{
                        console.log("Kategoriya muvaffaqiyatli yaratildi")
                        resolve(res)
                    })
                    .catch(() => {
                        console.log("Kategoriya yaratishda xatolik yuz berdi")
                        reject()
                    })
            })
        }
        return {categoryCreate}
    })