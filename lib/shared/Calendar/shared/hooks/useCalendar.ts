import {
  CalendarDate, CalendarLanguageStrings, CurrentDate, DateRangeItem,
} from '@lib/shared/types';
import { inject } from 'vue-demi';

export default function useCalendar(): {
  date: CalendarDate;
  strings: CalendarLanguageStrings;
  fromDate: DateRangeItem;
  toDate: DateRangeItem;
  currentDate: CurrentDate;
  } {
  return {
    date: inject('date') as CalendarDate,
    strings: inject('strings') as CalendarLanguageStrings,
    fromDate: inject('fromDate') as DateRangeItem,
    toDate: inject('toDate') as DateRangeItem,
    currentDate: inject('currentDate') as CurrentDate,
  };
}
