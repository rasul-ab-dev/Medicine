export interface INumberBoxOptions {
    value?: any
    readOnly?: boolean
    disabled?: boolean
    showClearButton?: boolean
    valueChangeEvent?: string
    stylingMode?: string
    visible?: boolean
    onValueChanged?: (event: any) => void
}