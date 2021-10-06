import { DateInfo, TupleDate } from '@lib/shared/types';

type CommonDate = {
  from: Date;
  to: Date;
  label: string;
};
export type CommonDates = CommonDate[];
export type LocalCommonDate = {
  from: TupleDate;
  to: TupleDate;
  label: string;
};
export type LocalCommonDates = LocalCommonDate[];

export interface RangePickerDate {
  getMonthDays: (dateInfo: DateInfo) => number;
  getFirstDayOfMonth: (dateInfo: DateInfo) => number;
  getLastDayOfMonth: (dateInfo: DateInfo) => number;
  getNextMonth: (dateInfo: DateInfo) => DateInfo;
  getPrevMonth: (dateInfo: DateInfo) => DateInfo;
  compare: (lDate: TupleDate, rDate: TupleDate) => -1 | 0 | 1;
  tupleToDate: (tuple: TupleDate) => Date;
  isClosed: (tuple: TupleDate) => boolean;
}

export interface RangePickerLanguageStrings {
  readonly monthNames: string[];
  readonly dayHeaderNames: string[];
  readonly action: string;
  readonly to: string;
  readonly commonDates: string;
}

export interface RangePickerStrings {
  readonly fa: RangePickerLanguageStrings,
  readonly en: RangePickerLanguageStrings,
}
