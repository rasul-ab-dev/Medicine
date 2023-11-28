export interface IDateBoxOptions {
  pickerType?: string;
  dateSerializationFormat?: string;
  stylingMode?: string;
  type?: string;
  min?: any;
  max?: any;
  value?: string;
  disabledDates?: any;
  applyButtonText?: string;
  readOnly?: boolean;
  disabled?: boolean;
  openOnFieldClick?: boolean;
  showClearButton?: boolean;
  acceptCustomValue?: boolean;
  applyValueMode?: string;
  options?: {};
  onValueChanged?: (event: any) => void;
}
