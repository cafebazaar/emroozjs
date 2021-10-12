import { computed } from 'vue-demi';
import useDatePicker from './useDatePicker';

export default function useDateHelpers() {
  const {
    selectedDate,
  } = useDatePicker();

  const isDateSelected = computed(() => Boolean(selectedDate.value));

  return {
    isDateSelected,
  };
}
