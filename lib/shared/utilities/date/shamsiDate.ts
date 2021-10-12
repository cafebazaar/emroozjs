import { GeneralDateUtil, TupleDate } from '@lib/shared/types';
import { toGregorian } from '@lib/shared/utilities/convertor';

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
  ({ year }: { year: number }) => {
    // https://fa.wikipedia.org/wiki/%D8%B3%D8%A7%D9%84_%DA%A9%D8%A8%DB%8C%D8%B3%D9%87
    let isLeap = false;
    if (year > 1243 && year < 1473) {
      isLeap = [
        1,
        5,
        9,
        13,
        17,
        year < 1343 ? 21 : 22,
        26,
        30,
      ].includes(year % 33);
    } else {
      isLeap = year % 4 === (year <= 1243 ? 3 : 1);
    }
    return isLeap ? 30 : 29;
  },
];

const shamsiDate: GeneralDateUtil = {
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

export default shamsiDate;
