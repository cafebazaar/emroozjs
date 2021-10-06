import { GeneralDateUtil, TupleDate } from '@lib/shared/types';

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

export interface RangePickerDate extends GeneralDateUtil {
  compare: (lDate: TupleDate, rDate: TupleDate) => -1 | 0 | 1;
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
