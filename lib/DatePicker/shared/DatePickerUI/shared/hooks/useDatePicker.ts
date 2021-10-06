import { inject, Ref } from 'vue-demi';
import {
  DatePickerDate, DatePickerLanguageStrings,
} from '@lib/DatePicker/shared/types';
import {
  AllowedDates, CurrentDate, DateItem, Direction, SetDateItem,
} from '@lib/shared/types';

export default function useDatePicker(): {
  date: DatePickerDate;
  strings: Ref<DatePickerLanguageStrings>;
  selectedDate: Ref<DateItem>;
  currentDate: Ref<CurrentDate>;
  direction: Ref<Direction>;
  setSelectedDate: SetDateItem;
  allowedDates: AllowedDates;
  } {
  return {
    date: inject('date') as DatePickerDate,
    strings: inject('strings') as Ref<DatePickerLanguageStrings>,
    selectedDate: inject('selectedDate') as Ref<DateItem>,
    currentDate: inject('currentDate') as Ref<CurrentDate>,
    direction: inject('direction') as Ref<Direction>,
    setSelectedDate: inject('setSelectedDate') as SetDateItem,
    allowedDates: inject('allowedDates') as AllowedDates,
  };
}
