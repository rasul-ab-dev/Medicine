import { Plugin } from '@nuxt/types'
import CustomStore from "devextreme/data/custom_store";
import Vue from 'vue'

interface ICustomQueryParams {
    [key: string]: any
}

interface IOptions {
    key: string
    loadUrl: string
    customQueryParams?: ICustomQueryParams
    insertUrl?: any
    updateUrl?: string
    removeUrl?: string
}


declare module 'vue/types/vue' {
    interface Vue {
        $dxStore(options: IOptions): any
    }
}


const accessor: Plugin = ({ $axios }, inject) => {
    function CreateStore(options: IOptions) {
        function isNotEmpty(value: any): boolean {
            return value !== undefined && value !== null && value !== '';
        }

        function loadToActionParams(loadOptions: any) {
            const { customQueryParams } = options
            let params = '?';
            [
                'skip',
                'take',
                'requireTotalCount',
                'requireGroupCount',
                'sort',
                'filter',
                'totalSummary',
                'group',
                'groupSummary'
            ].forEach(el => {
                let i: string | any | undefined = el
                if (el in loadOptions && isNotEmpty(loadOptions[el])) { params += `${el}=${JSON.stringify(loadOptions[el])}&`; }
            }
            );
            if (customQueryParams) {
                for (const key in customQueryParams) {
                    params += `${key}=${JSON.stringify(customQueryParams[key])}&`.replaceAll('"', '')
                }
            }

            params = params.slice(0, -1);
            return params;
        }

        function errorHandler(e: any) {
        }

        function filterByKey(keyValue: any) {

            if (!Array.isArray(options.key)) {
                return [options.key, keyValue];
            }
            return options.key.map(function (i) {
                return [i, keyValue[i]];
            });
        }

        const store = new CustomStore({
            key: options.key,
            errorHandler: errorHandler,
            useDefaultSearch: true,
            load: async (loadOptions) => {
                let result = await $axios.get(options.loadUrl + loadToActionParams(loadOptions));
                return result.data;
            },

            // totalCount: async (loadOptions) => {
            //     let result = await $axios.get(options.loadUrl + loadToActionParams(loadOptions))
            //     return result;
            // },
            byKey: async (key) => {
                let result = await $axios.get(options.loadUrl + loadToActionParams({ filter: filterByKey(key) }))
                return result.data.data[0];
            },
            insert: async (values) => {
                let result = await $axios.post(options.insertUrl, values)
                return result.data
            },
            update: async (key, values) => {
                let result = await $axios.put(options.updateUrl + '/' + key, values)
                return result.data
            },
            remove: async (key) => {
                return await $axios.delete(options.removeUrl + '/' + key)
            }
        });
        return store;
    }
    Vue.prototype.$dxStore = CreateStore
}

export default accessor



