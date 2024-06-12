import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";


export const useCreateBook
    = defineStore("createBook", () => {

        function bookCreate(data) {
            return new Promise((resolve, reject) => {
                client.post("footballs", data)
                    .then((res) =>{
                        console.log("Kitob muvaffaqiyatli yaratildi")
                        resolve(res)
                    })
                    .catch(() => {
                        console.log("Kitob yaratishda xatolik yuz berdi")
                        reject()
                    })
            })
        }
        return {bookCreate}
})