import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";


export const useCreateUser
    = defineStore("createUser", () => {

    function userCreate(data) {
        return new Promise((resolve, reject) => {
            client.post("users/my", data)
                .then((res) =>{
                    console.log("Foydalanuvchi muvaffaqiyatli yaratildi")
                    resolve(res)
                })
                .catch(() => {
                    console.log("Foydalanuvchi yaratishda xatolik yuz berdi")
                    reject()
                })
        })
    }
    return {userCreate}
})