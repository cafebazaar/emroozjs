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
    const date = toGregorian(year, month, 1);
    const dateObj = new Date(date[0], date[1], date[2]);
    return dateObj.getDay();
  },
};

export default date;
