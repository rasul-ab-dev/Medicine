import {IBaseNavigation} from "~/infrastructure/interfaces/navigation/IBasaNavigation"

export class BaseNavigation implements IBaseNavigation {
    name: string
    path: string
    title: string
    description?: string
    icon?: string
    visible?: boolean
    items: IBaseNavigation[]

    constructor(payload: IBaseNavigation) {
        this.name = payload.name
        this.path = payload.path
        this.title = payload.title
        this.description = payload.description
        this.icon = payload.icon
        this.visible = payload.visible
        this.items = []
    }
    addItem(item: IBaseNavigation) {
        this.items.push(item)
    }

}