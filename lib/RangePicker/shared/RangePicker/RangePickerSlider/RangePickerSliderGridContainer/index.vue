<script setup lang="ts">
import { DateItem } from '@lib/shared/types';
import { computed } from 'vue';
import useCalendar from '../../shared/hooks/useRangePicker';
import RangePickerSliderGrid from './RangePickerSliderGrid/index.vue';

const {
  date, strings, fromDate, toDate, setFromDate, setToDate,
} = useCalendar();

const props = defineProps<{
  currentYear: number;
  currentMonth: number;
}>();

function selectDate(day: number) {
  const toBeSelectedDate: DateItem = [props.currentYear, props.currentMonth, day];

  if (!fromDate.value) {
    setFromDate(toBeSelectedDate);
    return;
  }
  if (!toDate.value) {
    // If fromDate is equal to toDate, toDate should be deselected
    if (fromDate.value.toString() === toBeSelectedDate.toString()) {
      setFromDate(null);
      return;
    }
    setToDate(toBeSelectedDate);
    return;
  }

  setFromDate(toBeSelectedDate);
  setToDate(null);
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
  <RangePickerSliderGrid
    :first-day-of-month="firstDayOfMonth"
    :last-day-of-month="lastDayOfMonth"
    :month-days="monthDays"
    :header-names="strings.dayHeaderNames"
    :current-month="props.currentMonth"
    :current-year="props.currentYear"
    @select-date="selectDate"
  />
</template>
