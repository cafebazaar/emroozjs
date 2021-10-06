import { inject, Ref } from 'vue-demi';
import {
  RangePickerDate, RangePickerLanguageStrings,
  LocalCommonDates,
} from '@lib/RangePicker/shared/types';
import {
  AllowedDates, CurrentDate, DateItem, Direction, SetDateItem,
} from '@lib/shared/types';

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
  };
}
