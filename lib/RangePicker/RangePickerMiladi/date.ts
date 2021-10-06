import { RangePickerDate } from '@lib/RangePicker/shared/types';
import { TupleDate } from '@lib/shared/types';
import { miladi } from '@lib/shared/utilities/date';

const date: RangePickerDate = {
  ...miladi,
  compare(lDate: TupleDate, rDate: TupleDate) {
    const lDateObj = new Date(lDate[0], lDate[1], lDate[2]);
    const rDateObj = new Date(rDate[0], rDate[1], rDate[2]);

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
