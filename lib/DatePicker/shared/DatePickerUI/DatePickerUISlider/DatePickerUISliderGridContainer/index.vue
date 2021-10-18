<script setup lang="ts">
import { DateItem } from '@lib/shared/types';
import { computed } from 'vue';
import useDatePicker from '../../shared/hooks/useDatePicker';
import DatePickerUISliderGrid from './DatePickerUISliderGrid/index.vue';

const {
  date, strings, selectedDate, setSelectedDate,
} = useDatePicker();

const props = defineProps<{
  currentYear: number;
  currentMonth: number;
}>();

function selectDate(day: number) {
  const toBeSelectedDate: DateItem = [props.currentYear, props.currentMonth, day];

  // If selectedDate is equal to toDate, toDate should be deselected
  if (selectedDate.value?.toString() === toBeSelectedDate.toString()) {
    setSelectedDate(null);
    return;
  }

  setSelectedDate(toBeSelectedDate);
}

const firstDayOfMonth = computed(() => date.getFirstDayOfMonth({
  year: props.currentYear,
  month: props.currentMonth,
}));

const lastDayOfMonth = computed(() => date.getLastDayOfMonth({
  year: props.currentYear,
  month: props.currentMonth,
}));

const monthDays = computed(() => date.getMonthDays({
  year: props.currentYear,
  month: props.currentMonth,
}));
</script>

<template>
  <DatePickerUISliderGrid
    class="DatePickerUISlider__grid"
    :header-names="strings.dayHeaderNames"
    :first-day-of-month="firstDayOfMonth"
    :last-day-of-month="lastDayOfMonth"
    :month-days="monthDays"
    :current-month="props.currentMonth"
    :current-year="props.currentYear"
    @select-date="selectDate"
  />
</template>
