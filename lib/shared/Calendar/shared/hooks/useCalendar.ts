import {
  CalendarDate, CalendarLanguageStrings, CurrentDate, DateRangeItem, SetDateRangeItem,
} from '@lib/shared/types';
import { inject } from 'vue-demi';

export default function useCalendar(): {
  date: CalendarDate;
  strings: CalendarLanguageStrings;
  fromDate: DateRangeItem;
  toDate: DateRangeItem;
  currentDate: CurrentDate;
  setFromDate: SetDateRangeItem;
  setToDate: SetDateRangeItem;
  } {
  return {
    date: inject('date') as CalendarDate,
    strings: inject('strings') as CalendarLanguageStrings,
    fromDate: inject('fromDate') as DateRangeItem,
    toDate: inject('toDate') as DateRangeItem,
    currentDate: inject('currentDate') as CurrentDate,
    setFromDate: inject('setFromDate') as SetDateRangeItem,
    setToDate: inject('setToDate') as SetDateRangeItem,
  };
}
