import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useAddFile
    = defineStore("add-file", () => {

        function addFile(data) {
                return new Promise((resolve, reject) => {
                        client.post('media_objects', data)
                            .then((response) => {
                                    console.log("Fayl muvaffaqiyatli yuklandi")
                                    resolve()
                            })
                            .catch(() => {
                                    console.log("Fayl yukalshda xatolik yuz berdi")
                                    reject()
                            })
                })
        }
        return {addFile}
})
