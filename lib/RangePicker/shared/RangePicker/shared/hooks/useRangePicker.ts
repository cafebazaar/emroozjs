import { inject, Ref } from 'vue';
import {
  RangePickerDate, RangePickerLanguageStrings,
  LocalCommonDates,
  SelectRange,
} from '@lib/RangePicker/shared/types';
import {
  AllowedDates, CurrentDate, DateItem, Direction, SetDateItem,
} from '@lib/shared/types';
import { CurrentFirstSliderDate, SetCurrentFirstSliderDate } from '../types';

export default function useRangePicker(): {
  date: RangePickerDate;
  strings: Ref<RangePickerLanguageStrings>;
  fromDate: Ref<DateItem>;
  toDate: Ref<DateItem>;
  currentDate: Ref<CurrentDate>;
  direction: Ref<Direction>;
  commonDates: LocalCommonDates;
  setFromDate: SetDateItem;
  setToDate: SetDateItem;
  allowedDates: AllowedDates;
  selectRange: SelectRange;
  currentFirstSliderDate: Readonly<Ref<CurrentFirstSliderDate>>;
  setCurrentFirstSliderDate: SetCurrentFirstSliderDate;
  } {
  return {
    date: inject('date') as RangePickerDate,
    strings: inject('strings') as Ref<RangePickerLanguageStrings>,
    fromDate: inject('fromDate') as Ref<DateItem>,
    toDate: inject('toDate') as Ref<DateItem>,
    currentDate: inject('currentDate') as Ref<CurrentDate>,
    direction: inject('direction') as Ref<Direction>,
    commonDates: inject('commonDates') as LocalCommonDates,
    setFromDate: inject('setFromDate') as SetDateItem,
    setToDate: inject('setToDate') as SetDateItem,
    allowedDates: inject('allowedDates') as AllowedDates,
    selectRange: inject('selectRange') as SelectRange,
    currentFirstSliderDate: inject('currentFirstSliderDate') as Readonly<Ref<CurrentFirstSliderDate>>,
    setCurrentFirstSliderDate: inject('setCurrentFirstSliderDate') as SetCurrentFirstSliderDate,
  };
}
