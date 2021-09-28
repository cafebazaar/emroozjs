export type TupleDate = [year: number, month: number, day: number];

export type DateRangeItem = TupleDate | null;
export type SetDateRangeItem = (date: DateRangeItem) => void;

export type CurrentDate = TupleDate;

export type UnifyDateRangeItem = Date | null;
export type SetUnifyDateRangeItem = (date: UnifyDateRangeItem) => void;

export type Lang = 'fa' | 'en';

interface DateInfo {
  year: number;
  month: number;
}

export interface CalendarDate {
  getMonthDays: (dateInfo: DateInfo) => number;
  getFirstDayOfMonth: (dateInfo: DateInfo) => number;
  getLastDayOfMonth: (dateInfo: DateInfo) => number;
  getNextMonth: (dateInfo: DateInfo) => DateInfo;
  getPrevMonth: (dateInfo: DateInfo) => DateInfo;
  compare: (lDate: TupleDate, rDate: TupleDate) => -1 | 0 | 1;
}

export interface CalendarLanguageStrings {
  readonly monthNames: string[];
  readonly dayHeaderNames: string[];
  readonly action: string;
  readonly to: string;
}

export interface CalendarStrings {
  readonly fa: CalendarLanguageStrings,
  readonly en: CalendarLanguageStrings,
}
