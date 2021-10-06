export type TupleDate = [year: number, month: number, day: number];

export type DateRangeItem = TupleDate | null;
export type SetDateRangeItem = (date: DateRangeItem) => void;

export type CurrentDate = TupleDate;

export type UnifyDateRangeItem = Date | null;
export type SetUnifyDateRangeItem = (date: UnifyDateRangeItem) => void;

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

export type AllowedDates = ((date: Date) => boolean) | null;

export type Lang = 'fa' | 'en';

export type Direction = 'rtl' | 'ltr';

export type CalendarType = 'shamsi' | 'miladi';

interface DateInfo {
  year: number;
  month: number;
}

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
