import { ITagBoxOptions } from '~/infrastructure/interfaces/components-properties/TagBox/ITagBoxOptions';

export interface ITagBoxPropertiesWithDataSource extends ITagBoxOptions {
    loadUrl: string,
}