import { general, miladi } from '@lib/shared/strings';
import { RangePickerStrings } from '../shared/types';

const strings: RangePickerStrings = {
  en: {
    ...miladi.en,
    action: general.en.apply,
    to: general.en.to,
    commonDates: 'Common Dates',
    goToToday: general.en.goToToday,
  },
  fa: {
    ...miladi.fa,
    action: general.fa.apply,
    to: general.fa.to,
    commonDates: 'زمان‌های پر استفاده',
    goToToday: general.fa.goToToday,
  },
};

export default strings;
