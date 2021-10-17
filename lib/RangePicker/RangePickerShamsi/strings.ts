import { RangePickerStrings } from '@lib/RangePicker/shared/types';
import { general, shamsi } from '@lib/shared/strings';

const strings: RangePickerStrings = {
  en: {
    ...shamsi.en,
    action: general.en.apply,
    to: general.en.to,
    commonDates: general.en.commonDates,
    goToToday: general.en.goToToday,
  },
  fa: {
    ...shamsi.fa,
    action: general.fa.apply,
    to: general.fa.to,
    commonDates: general.fa.commonDates,
    goToToday: general.fa.goToToday,
  },
};

export default strings;
