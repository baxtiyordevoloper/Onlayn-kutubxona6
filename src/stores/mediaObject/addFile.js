import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useAddFile
    = defineStore("add-file", () => {


        function addFile(data) {
            const file = new FormData()
            file.append("file", data)

                return new Promise((resolve, reject) => {
                        client.post('media_objects', file)
                            .then((res) => {
                                    console.log("Fayl muvaffaqiyatli yuklandi")
                                    resolve(res)
                            })
                            .catch(() => {
                                    console.log("Fayl yukalshda xatolik yuz berdi")
                                    reject()
                            })
                })
        }
        return {addFile}
})
