import { ISelectBoxOptions } from '~/infrastructure/interfaces/components-properties/SelectBox/ISelectBoxOptions';

const defaultOptions = {
    displayExpr: "name",
    valueExpr: "id",
    showClearButton: true,
    showDropDownButton: true,
    openOnFieldClick: true,
    disabled: false,
    readOnly: false,
    searchEnabled: true,
    stylingMode:"outlined",
    searchExpr: "name"
}

export class SelectBoxProperties {
    displayExpr: string
    valueExpr: string
    dataSource: any
    openOnFieldClick: boolean
    showClearButton: boolean
    showDropDownButton: boolean
    readOnly: boolean
    disabled: boolean
    searchEnabled: boolean
    searchExpr: string
    stylingMode: string
    onItemClick?: (event: any) => void
    onValueChanged?: (event: any) => void
    constructor(options: ISelectBoxOptions) {
        options = Object.assign({}, defaultOptions, options)        
        this.displayExpr = options?.displayExpr
        this.valueExpr = options?.valueExpr
        this.showClearButton = options?.showClearButton
        this.showDropDownButton = options?.showDropDownButton
        this.openOnFieldClick = options?.openOnFieldClick
        this.disabled = options?.disabled
        this.readOnly = options?.readOnly
        this.searchEnabled = options?.searchEnabled
        this.searchExpr = options?.searchExpr
        this.stylingMode = options?.stylingMode
        this.onItemClick = options?.onItemClick
        this.onValueChanged = options?.onValueChanged
    }
}