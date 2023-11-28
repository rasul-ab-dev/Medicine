import { ISelectBoxOptions } from '~/infrastructure/interfaces/components-properties/SelectBox/ISelectBoxOptions';

export interface ISelectBoxPropertiesWithLocalData extends ISelectBoxOptions {
    dataSource: any[]
}
