export interface IBaseNavigation {
    name: string,
    path: string,
    title: string,
    description?: string,
    icon?: string,
    visible?: boolean,
    items?: IBaseNavigation[]
}