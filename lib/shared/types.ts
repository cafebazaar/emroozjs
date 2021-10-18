export type Lang = 'fa' | 'en';

export type Direction = 'rtl' | 'ltr';

export type AllowedDates = ((date: Date) => boolean) | null;

export type CalendarType = 'shamsi' | 'miladi';

export type TupleDate = [year: number, month: number, day: number];

export type DateItem = TupleDate | null;
export type SetDateItem = (date: DateItem) => void;

export type CurrentDate = TupleDate;

type CommonDate = {
  from: Date;
  to: Date;
  label: string;
};
export type CommonDates = CommonDate[];

export type UnifyDateItem = Date | null;
export type SetUnifyDateItem = (date: UnifyDateItem) => void;

export interface DateInfo {
  year: number;
  month: number;
}

export type GeneralDateUtil = {
  getMonthDays: (dateInfo: DateInfo) => number;
  getFirstDayOfMonth: (dateInfo: DateInfo) => number;
  getLastDayOfMonth: (dateInfo: DateInfo) => number;
  getNextMonth: (dateInfo: DateInfo) => DateInfo;
  getPrevMonth: (dateInfo: DateInfo) => DateInfo;
  tupleToDate: (tuple: TupleDate) => Date;
  isClosed: (tuple: TupleDate) => boolean;
};

// RangePicker

export interface RangePickerSelectOutput {
  from: Date;
  to: Date;
}
export type RangePickerSelectInput = RangePickerSelectOutput | null;
export interface RangePickerProps {
  lang?: Lang;
  commonDates?: CommonDates;
  allowedDates?: AllowedDates;
  type?: CalendarType;
  rangePickerClass?: any;
  modelValue?: RangePickerSelectInput;
}
export type RangePickerInputProps = Omit<RangePickerProps, 'rangePickerClass'>;

// DatePicker
export type DatePickerSelectOutput = Date;
export type DatePickerSelectInput = DatePickerSelectOutput | null;
export interface DatePickerProps {
  lang?: Lang;
  allowedDates?: AllowedDates;
  type?: CalendarType;
  datePickerClass?: any;
  modelValue?: DatePickerSelectInput;
}
export type DatePickerInputProps = Omit<DatePickerProps, 'datePickerClass'>;
