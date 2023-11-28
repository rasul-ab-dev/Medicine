import DataSource from "devextreme/data/data_source";
import Vue from 'vue'

import { TagBoxProperties } from "~/infrastructure/components-properties/TagBox/TagBoxProperties"
import { ITagBoxPropertiesWithDataSource } from '~/infrastructure/interfaces/components-properties/TagBox/ITagBoxPropertiesWithDataSource';


export class TagBoxPropertiesWithDataSource extends TagBoxProperties {
    dataSource: DataSource
    constructor(context: Vue, options: ITagBoxPropertiesWithDataSource) {
        super(options)
        this.dataSource = new DataSource({
            store: context.$dxStore({
                key: "id",
                loadUrl: options.loadUrl,
            }),
            filter: options?.filter || null
        })
    }
}