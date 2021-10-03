<script setup lang="ts">
import { DateRangeItem } from '@lib/shared/types';
import { computed } from 'vue-demi';
import useCalendar from '../../shared/hooks/useCalendar';
import CalendarGrid from './CalendarSliderGrid/index.vue';

const {
  date, strings, fromDate, toDate, setFromDate, setToDate,
} = useCalendar();

const props = defineProps<{
  currentYear: number;
  currentMonth: number;
}>();

function selectDate(day: number) {
  const toBeSelectedDate: DateRangeItem = [props.currentYear, props.currentMonth, day];

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
  <CalendarGrid
    :first-day-of-month="firstDayOfMonth"
    :last-day-of-month="lastDayOfMonth"
    :month-days="monthDays"
    :header-names="strings.dayHeaderNames"
    :current-month="props.currentMonth"
    :current-year="props.currentYear"
    @select-date="selectDate"
  />
</template>
