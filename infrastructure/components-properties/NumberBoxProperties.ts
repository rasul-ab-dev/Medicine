import { INumberBoxOptions } from "~/infrastructure/interfaces/components-properties/INumberBoxOptions";

const defaultOptions = {
  readOnly: false,
  disabled: false,
  showClearButton: true,
  stylingMode: "outlined",
  valueChangeEvent: "change",
};

export class NumberBoxProperties {
  value?: any;
  readOnly?: boolean;
  disabled?: boolean;
  showClearButton?: boolean;
  valueChangeEvent?: string;
  visible?: boolean
  stylingMode: string;
  onValueChanged?: (event: any) => void;
  constructor(options?: INumberBoxOptions) {
    options = Object.assign({}, defaultOptions, options);
    this.value = options?.value;
    this.readOnly = options?.readOnly;
    this.disabled = options?.disabled;
    this.showClearButton = options?.showClearButton;
    this.stylingMode = options?.stylingMode;
    this.visible = options?.visible
    this.valueChangeEvent = options?.valueChangeEvent;
    this.onValueChanged = options?.onValueChanged;
  }
}
