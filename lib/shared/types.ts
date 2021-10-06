export type Lang = 'fa' | 'en';

export type Direction = 'rtl' | 'ltr';

export type AllowedDates = ((date: Date) => boolean) | null;

export type CalendarType = 'shamsi' | 'miladi';

export type TupleDate = [year: number, month: number, day: number];

export type DateItem = TupleDate | null;
export type SetDateItem = (date: DateItem) => void;

export type CurrentDate = TupleDate;

export type UnifyDateItem = Date | null;
export type SetUnifyDateItem = (date: UnifyDateItem) => void;

export interface DateInfo {
  year: number;
  month: number;
}
