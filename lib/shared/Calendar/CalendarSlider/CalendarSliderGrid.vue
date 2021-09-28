<script setup lang="ts">
import { computed } from 'vue-demi';
import useCalendar from '../shared/hooks/useCalendar';
import CalendarGrid from './CalendarGrid.vue';

const {
  date, strings, fromDate, toDate, setFromDate, setToDate,
} = useCalendar();

const props = defineProps<{
  currentYear: number;
  currentMonth: number;
}>();

function selectDate(day: number) {
  if (!fromDate.value) {
    setFromDate([props.currentYear, props.currentMonth, day]);
    return;
  }
  if (!toDate.value) {
    setToDate([props.currentYear, props.currentMonth, day]);
    return;
  }

  setFromDate([props.currentYear, props.currentMonth, day]);
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
