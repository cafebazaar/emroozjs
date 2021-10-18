import { Ref, computed } from 'vue';
import { TupleDate } from '@lib/shared/types';
import useDatePicker from '../../../shared/hooks/useDatePicker';

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
    currentDate, selectedDate,
  } = useDatePicker();

  const toBeComparedDayTuple = computed<TupleDate>(
    () => [currentYear.value, currentMonth.value, currentDay.value],
  );

  const isActive = computed(
    () => toBeComparedDayTuple.value.toString() === selectedDate.value?.toString(),
  );

  const isToday = computed(
    () => currentDate.value.toString() === toBeComparedDayTuple.value.toString(),
  );

  return {
    isToday,
    isActive,
  };
}
