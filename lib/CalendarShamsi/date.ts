import { CalendarDate } from '@lib/shared/types';
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
};

export default date;
