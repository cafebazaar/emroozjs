import useRangeHelpers from '@lib/RangePicker/shared/RangePicker/shared/hooks/useRangeHelpers';
import { TupleDate } from '@lib/shared/types';
import { Ref, computed } from 'vue';
import useCalendar from '../../../../../shared/hooks/useRangePicker';

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

  const { isRangeSelected } = useRangeHelpers();

  const toBeComparedDayTuple = computed<TupleDate>(
    () => [currentYear.value, currentMonth.value, currentDay.value],
  );

  const isStartingRangeEdge = computed(() => {
    // There is no range!
    if (!isRangeSelected.value) return false;

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
    if (!isRangeSelected.value) return false;

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
    if (!isRangeSelected.value) return false;

    if (
      date.compare(fromDate.value as TupleDate, toBeComparedDayTuple.value) === 1
      && date.compare(toBeComparedDayTuple.value, toDate.value as TupleDate) === 1
    ) return true;

    return false;
  });

  const isMiddleEmpty = computed(() => {
    if (!isRangeSelected.value) return false;

    // If starting range edge is the first day of month
    if (
      toBeComparedDayTuple.value[2] === 1
      && date.compare(fromDate.value as TupleDate, toBeComparedDayTuple.value) === 0
    ) {
      return false;
    }

    const currentEndRangeEdgeMonthDays = date.getMonthDays(
      { year: toBeComparedDayTuple.value[0], month: toBeComparedDayTuple.value[1] },
    );
    // If ending range edge is the last day of month
    if (
      toBeComparedDayTuple.value[2] === currentEndRangeEdgeMonthDays
      && date.compare(toDate.value as TupleDate, toBeComparedDayTuple.value) === 0
    ) {
      return false;
    }

    if (
      date.compare(fromDate.value as TupleDate, toBeComparedDayTuple.value) >= 0
      && date.compare(toBeComparedDayTuple.value, toDate.value as TupleDate) >= 0
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

  return {
    isBeforeStartingEdge,
    isMiddle,
    isEdge,
    isEndingRangeEdge,
    isStartingRangeEdge,
    isToday,
    isMiddleEmpty,
  };
}
