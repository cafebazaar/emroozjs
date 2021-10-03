import { inject, Ref } from 'vue-demi';
import {
  AllowedDates,
  CalendarDate, CalendarLanguageStrings, CurrentDate,
  DateRangeItem, LocalCommonDates, SetDateRangeItem,
} from '@lib/shared/types';

export default function useCalendar(): {
  date: CalendarDate;
  strings: Ref<CalendarLanguageStrings>;
  fromDate: Ref<DateRangeItem>;
  toDate: Ref<DateRangeItem>;
  currentDate: Ref<CurrentDate>;
  commonDates: LocalCommonDates;
  setFromDate: SetDateRangeItem;
  setToDate: SetDateRangeItem;
  allowedDates: AllowedDates;
  } {
  return {
    date: inject('date') as CalendarDate,
    strings: inject('strings') as Ref<CalendarLanguageStrings>,
    fromDate: inject('fromDate') as Ref<DateRangeItem>,
    toDate: inject('toDate') as Ref<DateRangeItem>,
    currentDate: inject('currentDate') as Ref<CurrentDate>,
    commonDates: inject('commonDates') as LocalCommonDates,
    setFromDate: inject('setFromDate') as SetDateRangeItem,
    setToDate: inject('setToDate') as SetDateRangeItem,
    allowedDates: inject('allowedDates') as AllowedDates,
  };
}
