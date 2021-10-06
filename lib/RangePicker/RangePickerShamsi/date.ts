import { RangePickerDate } from '@lib/RangePicker/shared/types';
import { TupleDate } from '@lib/shared/types';
import { toGregorian } from '@lib/shared/utilities/convertor';
import { shamsi } from '@lib/shared/utilities/date';

const date: RangePickerDate = {
  ...shamsi,
  compare(lDate: TupleDate, rDate: TupleDate) {
    const lGDate = toGregorian(...lDate);
    const rGDate = toGregorian(...rDate);

    const lDateObj = new Date(lGDate[0], lGDate[1], lGDate[2]);
    const rDateObj = new Date(rGDate[0], rGDate[1], rGDate[2]);

    if (lDateObj.valueOf() > rDateObj.valueOf()) {
      return -1;
    }
    if (lDateObj.valueOf() < rDateObj.valueOf()) {
      return 1;
    }
    return 0;
  },
};

export default date;
