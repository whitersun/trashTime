import axios from 'axios'
import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useApiStore = defineStore('api', {
    state: () => {
        return {
            info: {
                error: false,
                result: []
            }
        }
    },

    getters: {
        updatedInfo: (state) => {
            return state.info
        }
    },

    actions: {
        async getApi () {
            const uri = 'https://api.kcg.gov.tw/api/service/Get/aaf4ce4b-4ca8-43de-bfaf-6dc97e89cac0';
            axios.get(uri).then(response => {
                this.info.result = response.data;
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(this.info)
                    }, 2000)
                })
            }).catch(error => {
                console.log(error);
                this.info.error = true;
            })
        }
    }
})