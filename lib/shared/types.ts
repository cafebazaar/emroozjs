interface DateInfo {
  year: number;
  month: number;
}

export interface CalendarDate {
  getMonthDays: (dateInfo: DateInfo) => number;
  getFirstDayOfMonth: (dateInfo: DateInfo) => number;
  getNextMonth: (dateInfo: DateInfo) => DateInfo;
  getPrevMonth: (dateInfo: DateInfo) => DateInfo;
  // compare: (lDate: string, rDate: string) => -1 | 0 | 1;
}

export interface CalendarLanguageStrings {
  readonly monthNames: string[];
  readonly dayHeaderNames: string[];
  readonly action: string;
}

export interface CalendarStrings {
  readonly fa: CalendarLanguageStrings,
  readonly en: CalendarLanguageStrings,
}

export type TupleDate = [year: number, month: number, day: number];

export type DateRangeItem = TupleDate | null;
export type CurrentDate = TupleDate;
