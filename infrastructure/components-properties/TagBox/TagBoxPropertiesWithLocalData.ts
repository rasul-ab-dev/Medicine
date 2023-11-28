import { TagBoxProperties } from "~/infrastructure/components-properties/TagBox/TagBoxProperties"
import { ITagBoxPropertiesWithLocalData } from '~/infrastructure/interfaces/components-properties/TagBox/ITagBoxPropertiesWithLocalData';


export class TagBoxPropertiesWithLocalData extends TagBoxProperties {
    dataSource: any
    constructor(options: ITagBoxPropertiesWithLocalData) {
        super(options)
        this.dataSource = options.dataSource
    }
}