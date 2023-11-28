import { ITextBoxOptions } from "~/infrastructure/interfaces/components-properties/ITextBoxOptions";

const defaultOptions = {
  readOnly: false,
  disabled: false,
  showClearButton: true,
  stylingMode: "outlined",
  valueChangeEvent: "change",
};

export class TextBoxProperties {
  readOnly?: boolean;
  disabled?: boolean;
  displayExpr?: string;
  showClearButton?: boolean;
  valueChangeEvent?: string;
  value?: any;
  stylingMode: string;
  onValueChanged?: (event: any) => void;
  constructor(options?: ITextBoxOptions) {
    options = Object.assign({}, defaultOptions, options);
    this.readOnly = options?.readOnly;
    this.disabled = options?.disabled;
    this.displayExpr = options?.displayExpr;
    this.showClearButton = options?.showClearButton;
    this.value = options?.value;
    this.stylingMode = options?.stylingMode;
    this.valueChangeEvent = options?.valueChangeEvent;
    this.onValueChanged = options?.onValueChanged;
  }
}
