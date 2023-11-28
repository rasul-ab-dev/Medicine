export interface ITextBoxOptions {
  readOnly?: boolean;
  disabled?: boolean;
  displayExpr?: string,
  showClearButton?: boolean;
  valueChangeEvent?: string;
  value?: any;
  stylingMode?: string;
  onValueChanged?: (event: any) => void;
}
