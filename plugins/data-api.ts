import { dataApi } from "~/static/dataApi"
import Vue from 'vue'
declare module 'vue/types/vue' {
    interface Vue {
        $dataApi: {
            [key: string]: any
        }
    }
}

Vue.prototype.$dataApi = dataApi
