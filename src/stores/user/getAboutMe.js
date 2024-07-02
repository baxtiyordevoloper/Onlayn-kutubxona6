import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";
import {reactive} from "vue";


export const useAboutUser
    = defineStore('aboutMe', () => {

        const state = reactive({
            id: 0,
            email: '',
            age: 0,
            givenName: '',
            surname: '',
            gender: '',
            phone: '',
            createdAt: ''
        })

        function aboutMe(){
            return new Promise((resolve, reject) => {
                client.get('users/about_me')
                    .then((res) => {
                        console.log("Foydalanuvchi haqidagi ma'lumotlar muvaffaqiyatli olindi")
                        state.id = res.data.id
                        state.email = res.data.email
                        state.age = res.data.age
                        state.givenName = res.data.givenName
                        state.surname = res.data.surname
                        state.gender = res.data.gender
                        state.phone = res.data.phone
                        state.createdAt = res.data.createdAt
                        resolve()
                    })
                    .catch((error) => {
                        console.log("Foydalanuvchi ma'lumotlarini olishda xatolik yuz berdi")
                        reject()
                    })
            })

        }
        return {aboutMe,state}
})