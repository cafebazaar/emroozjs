import { Ref, computed } from 'vue-demi';
import { TupleDate } from '@lib/shared/types';
import useCalendar from '../../../../../shared/hooks/useCalendar';

export default function useDateCompares(
  {
    currentMonth, currentYear, currentDay,
  }:
  {
    currentMonth: Ref<number>; currentYear: Ref<number>;
    currentDay: Ref<number>;
  },
) {
  const {
    date, currentDate, fromDate, toDate,
  } = useCalendar();

  const toBeComparedDayTuple = computed<TupleDate>(
    () => [currentYear.value, currentMonth.value, currentDay.value],
  );

  const isStartingRangeEdge = computed(() => {
    // There is no range!
    if (!fromDate.value || !toDate.value) return false;

    if (
      fromDate.value
      && toBeComparedDayTuple.value.toString() === fromDate.value.toString()
    ) {
      return true;
    }
    return false;
  });

  const isEndingRangeEdge = computed(() => {
    // There is no range!
    if (!fromDate.value || !toDate.value) return false;

    if (
      toDate.value
      && toBeComparedDayTuple.value.toString() === toDate.value.toString()
    ) {
      return true;
    }
    return false;
  });

  const isEdge = computed(() => {
    if (
      fromDate.value
      && toBeComparedDayTuple.value.toString() === fromDate.value.toString()
    ) {
      return true;
    }
    if (
      toDate.value
       && toBeComparedDayTuple.value.toString() === toDate.value.toString()
    ) {
      return true;
    }
    return false;
  });

  const isMiddle = computed(() => {
    if (!fromDate.value || !toDate.value) return false;

    if (
      date.compare(fromDate.value, toBeComparedDayTuple.value) === 1
      && date.compare(toBeComparedDayTuple.value, toDate.value) === 1
    ) return true;

    return false;
  });

  const isBeforeStartingEdge = computed(() => {
    if (!fromDate.value) return false;

    return date.compare(fromDate.value, toBeComparedDayTuple.value) === -1;
  });

  const isToday = computed(
    () => currentDate.value.toString() === toBeComparedDayTuple.value.toString(),
  );

  const isFriday = computed(() => date.getDayNumber(toBeComparedDayTuple.value) === 5);

  return {
    isBeforeStartingEdge,
    isMiddle,
    isEdge,
    isEndingRangeEdge,
    isStartingRangeEdge,
    isToday,
    isFriday,
  };
}
