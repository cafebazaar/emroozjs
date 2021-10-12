import { computed } from 'vue-demi';
import useRangePicker from './useRangePicker';

export default function useRangeHelpers() {
  const {
    fromDate, toDate,
  } = useRangePicker();

  const isRangeSelected = computed(() => Boolean(fromDate.value && toDate.value));

  return {
    isRangeSelected,
  };
}
