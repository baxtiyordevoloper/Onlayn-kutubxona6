import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useCreateBook
    = defineStore("create-Book", () => {

        function createBook(data) {
            return new Promise((resolve, reject) => {
                client.post("/books", data)
                    .then((res) =>{
                        console.log("Kitob muvaffaqiyatli yaratildi")
                        resolve()
                    })
                    .catch(() => {
                        console.log("Kitob yaratilshda xatolik yuz berdi")
                        reject()
                    })
            })
        }
        return {createBook}
})