<script setup lang="ts">
import { TupleDate } from '@lib/shared/types';
import { computed } from 'vue-demi';
import useCalendar from '../shared/hooks/useCalendar';

const {
  setFromDate, setToDate, fromDate, toDate,
} = useCalendar();

// @Todo: use LocalCommonDate type (https://github.com/vuejs/vue-next/issues/4294)
const props = defineProps<{
  from: TupleDate;
  to: TupleDate;
  label: string;
}>();

function setRange(): void {
  setFromDate(props.from);
  setToDate(props.to);
}

const isActive = computed(() => {
  if (
    props.from.toString() === fromDate.value?.toString()
  && props.to.toString() === toDate.value?.toString()
  ) {
    return true;
  }
  return false;
});
</script>

<template>
  <li
    class="CalendarCommonDatesItem"
    :class="{
      'CalendarCommonDatesItem--active': isActive,
    }"
    @click="setRange"
  >
    {{ props.label }}
  </li>
</template>

<style lang="scss" scoped>
@import '../shared/styles/vars.scss';
.CalendarCommonDatesItem {
  cursor: pointer;
  transition: $cl-mostly-used-transition-duration;

  user-select: none;

  color: $cl-text-color;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:not(:first-child) {
    margin-top: 8px;
  }

  &:hover {
    color: $cl-mostly-used-active-color;
  }

  &--active {
    color: $cl-mostly-used-active-color;
  }
}
</style>
