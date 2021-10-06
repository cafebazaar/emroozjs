import { TupleDate } from '@lib/shared/types';
import { toGregorian } from '@lib/shared/utilities/convertor';
import { DatePickerDate } from '../shared/types';

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

const date: DatePickerDate = {
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
