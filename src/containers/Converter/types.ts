export interface IConverterFormValues {
  amount?: number | string;
  firstCurrency?: string | null;
  secondCurrency?: string | null;
}

export interface IOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}