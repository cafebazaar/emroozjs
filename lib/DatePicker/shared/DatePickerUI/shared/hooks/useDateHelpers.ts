import { computed } from 'vue';
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
