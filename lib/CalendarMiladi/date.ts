import { CalendarDate, TupleDate } from '@lib/shared/types';

const monthDays = [
  () => 31,
  ({ year }: { year: number }) => {
    if (year % 400 === 0) return 29;
    if (year % 4 === 0) {
      if (year % 100 === 0) return 28;
      return 29;
    }
    return 28;
  },
  () => 31,
  () => 30,
  () => 31,
  () => 30,
  () => 31,
  () => 31,
  () => 30,
  () => 31,
  () => 30,
  () => 31,
];

const date: CalendarDate = {
  getMonthDays({ year, month }) {
    return monthDays[month]({ year });
  },
  getFirstDayOfMonth({ year, month }) {
    const dateObj = new Date(year, month, 1);
    return dateObj.getDay() % 7;
  },
  getLastDayOfMonth({ year, month }) {
    const dateObj = new Date(year, month, this.getMonthDays({ year, month }));
    return dateObj.getDay() % 7;
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
  tupleToDate(tuple: TupleDate) {
    return new Date(tuple[0], tuple[1], tuple[2]);
  },
  isClosed(tuple: TupleDate) {
    const dateObj = new Date(tuple[0], tuple[1], tuple[2]);
    return [0, 6].includes(dateObj.getDay());
  },
};

export default date;
