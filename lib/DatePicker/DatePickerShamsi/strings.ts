import { general, shamsi } from '@lib/shared/strings';
import { DatePickerStrings } from '../shared/types';

const strings: DatePickerStrings = {
  en: {
    ...shamsi.en,
    action: general.en.apply,
  },
  fa: {
    ...shamsi.fa,
    action: general.fa.apply,
  },
};

export default strings;
