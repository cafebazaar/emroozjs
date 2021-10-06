import { CalendarDate, TupleDate } from '@lib/RangePicker/shared/types';
import { toGregorian } from './convertor';

const monthDays = [
  () => 31,
  () => 31,
  () => 31,
  () => 31,
  () => 31,
  () => 31,
  () => 30,
  () => 30,
  () => 30,
  () => 30,
  () => 30,
  ({ year }: { year: number }) => (year % 4 === 3 ? 30 : 29),
];

const date: CalendarDate = {
  getMonthDays({ year, month }) {
    return monthDays[month]({ year });
  },
  getFirstDayOfMonth({ year, month }) {
    const gDate = toGregorian(year, month, 1);
    const dateObj = new Date(gDate[0], gDate[1], gDate[2]);
    return (dateObj.getDay() + 1) % 7;
  },
  getLastDayOfMonth({ year, month }) {
    const gDate = toGregorian(year, month, this.getMonthDays({ year, month }));
    const dateObj = new Date(gDate[0], gDate[1], gDate[2]);
    return (dateObj.getDay() + 1) % 7;
  },
  getNextMonth({ year, month }) {
    if (month >= 11) {
      return {
        month: 0,
        year: year + 1,
      };
    }
    return {
      month: month + 1,
      year,
    };
  },
  getPrevMonth({ year, month }) {
    if (month <= 0) {
      return {
        month: 11,
        year: year - 1,
      };
    }
    return {
      month: month - 1,
      year,
    };
  },
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
  tupleToDate(tuple: TupleDate) {
    const gDate = toGregorian(...tuple);
    return new Date(gDate[0], gDate[1], gDate[2]);
  },
  isClosed(tuple: TupleDate) {
    const gDate = toGregorian(...tuple);
    const dateObj = new Date(gDate[0], gDate[1], gDate[2]);
    return dateObj.getDay() === 5;
  },
};

export default date;
