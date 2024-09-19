import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";
import {reactive} from "vue";

export const useFetchBook =
    defineStore('fetchBook', () => {
        const state = reactive({
            name: '',
            text: ''
        })

        function bookGet(id) {
            return new Promise((resolve, reject) => {
                client.get('footballs/' + id)
                    .then((res) => {
                        console.log("Kitob muvaffaqiyatli olindi")
                        state.name = res.data.name
                        state.text = res.data.text
                        resolve()
                    })
                    .catch(() => {
                        console.log("Kitob olishda xatolik yuz berdi")
                        reject()
                    })
            })
        }
        return {bookGet,state}
})
