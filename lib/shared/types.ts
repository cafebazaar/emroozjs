interface DateInfo {
  year: number;
  month: number;
}

export interface CalendarDate {
  getMonthDays: (dateInfo: DateInfo) => number;
  getFirstDayOfMonth: (dateInfo: DateInfo) => number;
  // compare: (lDate: string, rDate: string) => -1 | 0 | 1;
}

interface LanguageStrings {
  readonly monthNames: string[];
  readonly dayHeaderNames: string[];
  readonly action: string;
}

export interface CalendarStrings {
  readonly fa: LanguageStrings,
  readonly en: LanguageStrings,
}
