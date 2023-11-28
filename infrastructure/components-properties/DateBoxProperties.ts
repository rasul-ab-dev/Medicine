import { IDateBoxOptions } from "~/infrastructure/interfaces/components-properties/IDateBoxOptions";

const defaultOptions = {
  pickerType: "calendar",
  dateSerializationFormat: "yyyy-MM-dd",
  type: "date",
  applyButtonText: "Howa",
  readOnly: false,
  disabled: false,
  openOnFieldClick: true,
  showClearButton: true,
  acceptCustomValue: true,
  stylingMode: "outlined",
  applyValueMode: "instantly",
};

export class DateBoxProperties {
  pickerType: string;
  dateSerializationFormat: string;
  type: string;
  min?: any;
  max?: any;
  value?: string;
  disabledDates?: any;
  applyButtonText?: string;
  readOnly: boolean;
  disabled: boolean;
  openOnFieldClick: boolean;
  showClearButton: boolean;
  acceptCustomValue: boolean;
  applyValueMode?: string;
  stylingMode: string;
  options?: {};
  onValueChanged?: (event: any) => void;
  constructor(options?: IDateBoxOptions) {
    options = Object.assign({}, defaultOptions, options);
    this.pickerType = options?.pickerType;
    this.dateSerializationFormat = options?.dateSerializationFormat;
    this.type = options?.type;
    this.min = options?.min;
    this.max = options?.max;
    this.value = options?.value;
    this.disabledDates = options?.disabledDates;
    this.applyButtonText = options?.applyButtonText;
    this.readOnly = options?.readOnly;
    this.disabled = options?.disabled;
    this.openOnFieldClick = options?.openOnFieldClick;
    this.showClearButton = options?.showClearButton;
    this.acceptCustomValue = options?.acceptCustomValue;
    this.stylingMode = options?.stylingMode;
    this.options = options?.options;
    this.applyValueMode = options?.applyValueMode;
    this.onValueChanged = options?.onValueChanged;
  }
}
