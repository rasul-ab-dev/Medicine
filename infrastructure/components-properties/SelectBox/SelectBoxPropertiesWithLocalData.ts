import { SelectBoxProperties } from "~/infrastructure/components-properties/SelectBox/SelectBoxProperties"
import { ISelectBoxPropertiesWithLocalData } from '~/infrastructure/interfaces/components-properties/SelectBox/ISelectBoxPropertiesWithLocalData';


export class SelectBoxPropertiesWithLocalData extends SelectBoxProperties {
    dataSource: any
    constructor(options: ISelectBoxPropertiesWithLocalData) {
        super(options)
        this.dataSource = options.dataSource
    }
}