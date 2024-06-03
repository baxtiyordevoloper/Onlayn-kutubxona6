import {defineStore} from "pinia";
import axios from "axios";


export const useAuthorization =
    defineStore("authorization", () => {
       function userAuth(data) {
           return new Promise((resolve, reject) => {
               axios.post('http://localhost:8505/api/users/auth', data)
                   .then((res) => {
                       console.log('Token muvaffaqiyatli olindi')
                       localStorage.setItem('token', res.data.token)
                       resolve()
                   })
                   .catch((error) => {
                       console.log('Token olishda xatolik yuz berdi')
                       console.log(error)
                       reject(error)
                   })
           })
       }

        return {userAuth}
    })