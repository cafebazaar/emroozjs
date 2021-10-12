import { GeneralDateUtil } from '@lib/shared/types';

export type DatePickerDate = GeneralDateUtil;

export interface DatePickerLanguageStrings {
  readonly monthNames: string[];
  readonly dayHeaderNames: string[];
  readonly action: string;
}

export interface DatePickerStrings {
  readonly fa: DatePickerLanguageStrings,
  readonly en: DatePickerLanguageStrings,
}

export type SelectDate = () => void;
