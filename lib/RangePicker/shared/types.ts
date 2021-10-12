import { GeneralDateUtil, TupleDate } from '@lib/shared/types';

export type LocalCommonDate = {
  from: TupleDate;
  to: TupleDate;
  label: string;
};
export type LocalCommonDates = LocalCommonDate[];

export type SelectRange = () => void;

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
