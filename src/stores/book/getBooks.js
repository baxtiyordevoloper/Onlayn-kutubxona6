import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";
import {reactive} from "vue";

export const useFetchBooks
    = defineStore('fetchBooks', () => {

        const state = reactive({
            footballs: [],
            count: 0,
            pageCount: 0,


        })
        function booksGet(url = '') {
            return new Promise((resolve, reject) => {


                client.get('footballs' + url)
                    .then((res) =>{
                        console.log('Kitoblar muvaffaqiyatli olindi')
                        state.footballs = res.data['hydra:member']
                        state.count = res.data['hydra:totalItems']
                        state.pageCount = Math.ceil(state.count / 4)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kitoblarni olihda xatolik yuz berdi')
                        reject()
                    })
            })
        }
        return {booksGet, state}
})