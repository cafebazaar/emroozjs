import { Ref } from 'vue-demi';
import { DateRangeItem, TupleDate } from '@lib/shared/types';
import useCalendar from '../../../shared/hooks/useCalendar';

export default function useDateCompares(
  {
    fromDate, toDate, currentMonth, currentYear,
  }:
  {
    fromDate: Ref<DateRangeItem>, toDate: Ref<DateRangeItem>;
    currentMonth: Ref<number>; currentYear: Ref<number>
  },
) {
  const { date, currentDate } = useCalendar();

  function createDateTupleByDay(day: number): TupleDate {
    return [currentYear.value, currentMonth.value, day];
  }

  function isStartingRangeEdge(
    toBeComparedDay: number,
  ) {
    // There is no range!
    if (!fromDate.value || !toDate.value) return false;

    const toBeComparedDayTuple = createDateTupleByDay(toBeComparedDay);

    if (
      fromDate.value
      && toBeComparedDayTuple.toString() === fromDate.value.toString()
    ) {
      return true;
    }
    return false;
  }

  function isEndingRangeEdge(
    toBeComparedDay: number,
  ) {
    // There is no range!
    if (!fromDate.value || !toDate.value) return false;

    const toBeComparedDayTuple = createDateTupleByDay(toBeComparedDay);

    if (
      toDate.value
      && toBeComparedDayTuple.toString() === toDate.value.toString()
    ) {
      return true;
    }
    return false;
  }

  function isEdge(
    toBeComparedDay: number,
  ) {
    const toBeComparedDayTuple = createDateTupleByDay(toBeComparedDay);

    if (
      fromDate.value
      && toBeComparedDayTuple.toString() === fromDate.value.toString()
    ) {
      return true;
    }
    if (
      toDate.value
       && toBeComparedDayTuple.toString() === toDate.value.toString()
    ) {
      return true;
    }
    return false;
  }

  function isMiddle(
    toBeComparedDay: number,
  ) {
    if (!fromDate.value || !toDate.value) return false;

    const toBeComparedDayTuple = createDateTupleByDay(toBeComparedDay);

    if (
      date.compare(fromDate.value, toBeComparedDayTuple) === 1
      && date.compare(toBeComparedDayTuple, toDate.value) === 1
    ) return true;

    return false;
  }

  function isBeforeStartingEdge(
    toBeComparedDay: number,
  ) {
    if (!fromDate.value) return false;

    const toBeComparedDayTuple = createDateTupleByDay(toBeComparedDay);

    return date.compare(fromDate.value, toBeComparedDayTuple) === -1;
  }

  function isToday(toBeComparedDay: number) {
    const toBeComparedDayTuple = createDateTupleByDay(toBeComparedDay);

    return currentDate.value.toString() === toBeComparedDayTuple.toString();
  }

  return {
    isBeforeStartingEdge,
    isMiddle,
    isEdge,
    isEndingRangeEdge,
    isStartingRangeEdge,
    isToday,
  };
}
