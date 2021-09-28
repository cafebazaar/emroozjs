<script setup lang="ts">
import { computed } from 'vue-demi';
import useCalendar from '../shared/hooks/useCalendar';
import CalendarGrid from './CalendarGrid.vue';

const { date, strings } = useCalendar();

const props = defineProps<{
  currentYear: number;
  currentMonth: number;
}>();

const firstDayOfMonth = computed(() => date.getFirstDayOfMonth({
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
    :month-days="monthDays"
    :header-names="strings.dayHeaderNames"
  />
</template>
