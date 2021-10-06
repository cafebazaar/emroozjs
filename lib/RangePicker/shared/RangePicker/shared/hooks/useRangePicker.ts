import { inject, Ref } from 'vue-demi';
import {
  AllowedDates,
  RangePickerDate, RangePickerLanguageStrings, CurrentDate,
  DateRangeItem, LocalCommonDates, SetDateRangeItem,
} from '@lib/RangePicker/shared/types';
import { Direction } from '@lib/shared/types';

export default function useCalendar(): {
  date: RangePickerDate;
  strings: Ref<RangePickerLanguageStrings>;
  fromDate: Ref<DateRangeItem>;
  toDate: Ref<DateRangeItem>;
  currentDate: Ref<CurrentDate>;
  direction: Ref<Direction>;
  commonDates: LocalCommonDates;
  setFromDate: SetDateRangeItem;
  setToDate: SetDateRangeItem;
  allowedDates: AllowedDates;
  } {
  return {
    date: inject('date') as RangePickerDate,
    strings: inject('strings') as Ref<RangePickerLanguageStrings>,
    fromDate: inject('fromDate') as Ref<DateRangeItem>,
    toDate: inject('toDate') as Ref<DateRangeItem>,
    currentDate: inject('currentDate') as Ref<CurrentDate>,
    direction: inject('direction') as Ref<Direction>,
    commonDates: inject('commonDates') as LocalCommonDates,
    setFromDate: inject('setFromDate') as SetDateRangeItem,
    setToDate: inject('setToDate') as SetDateRangeItem,
    allowedDates: inject('allowedDates') as AllowedDates,
  };
}
