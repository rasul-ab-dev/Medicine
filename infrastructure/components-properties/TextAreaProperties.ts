import { ITextAreaOptions } from '~/infrastructure/interfaces/components-properties/ITextAreaOptions';

const defaultOptions = {
    readOnly: false,
    disabled: false,
    showClearButton: true,
    height: 84,
    stylingMode:"outlined",
    valueChangeEvent: "change"
}

export class TextAreaProperties {
    readOnly?: boolean
    disabled?: boolean
    showClearButton?: boolean
    valueChangeEvent?: string
    height?: number
    stylingMode: string
    onValueChanged?: (event: any) => void
    constructor(options?: ITextAreaOptions) {
        options = Object.assign({}, defaultOptions, options)
        this.readOnly = options?.readOnly
        this.disabled = options?.disabled
        this.showClearButton = options?.showClearButton
        this.height = options?.height
        this.stylingMode = options?.stylingMode
        this.valueChangeEvent = options?.valueChangeEvent
        this.onValueChanged = options?.onValueChanged
    }
}
