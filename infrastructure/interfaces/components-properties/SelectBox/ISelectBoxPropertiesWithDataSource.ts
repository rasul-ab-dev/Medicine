import { ISelectBoxOptions } from '~/infrastructure/interfaces/components-properties/SelectBox/ISelectBoxOptions';

export interface ISelectBoxPropertiesWithDataSource extends ISelectBoxOptions {
    loadUrl: string,
    key?: string
}