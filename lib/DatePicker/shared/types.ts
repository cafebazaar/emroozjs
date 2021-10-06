import { DateInfo, TupleDate } from '@lib/shared/types';

export interface DatePickerDate {
  getMonthDays: (dateInfo: DateInfo) => number;
  getFirstDayOfMonth: (dateInfo: DateInfo) => number;
  getLastDayOfMonth: (dateInfo: DateInfo) => number;
  getNextMonth: (dateInfo: DateInfo) => DateInfo;
  getPrevMonth: (dateInfo: DateInfo) => DateInfo;
  tupleToDate: (tuple: TupleDate) => Date;
  isClosed: (tuple: TupleDate) => boolean;
}

export interface DatePickerLanguageStrings {
  readonly monthNames: string[];
  readonly dayHeaderNames: string[];
  readonly action: string;
}

export interface DatePickerStrings {
  readonly fa: DatePickerLanguageStrings,
  readonly en: DatePickerLanguageStrings,
}
