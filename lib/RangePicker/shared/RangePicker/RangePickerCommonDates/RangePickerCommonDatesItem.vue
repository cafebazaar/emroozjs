<script setup lang="ts">
import { TupleDate } from '@lib/shared/types';
import { computed } from 'vue';
import useCalendar from '../shared/hooks/useRangePicker';

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
    class="RangePickerCommonDatesItem"
    :class="{
      'RangePickerCommonDatesItem--active': isActive,
    }"
    @click="setRange"
  >
    {{ props.label }}
  </li>
</template>

<style lang="scss" scoped>

.RangePickerCommonDatesItem {
  cursor: pointer;
  transition: $em-mostly-used-transition-duration;

  user-select: none;

  color: $em-text-color;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @include mobile(){
    padding: math.div($em-global-padding, 2) $em-global-padding * 1.6;
    border-radius: $em-mostly-used-border-radius;
    background-color: $em-mostly-used-not-active-back-color;
  }

  &:hover {
    color: $em-mostly-used-active-color;

    @include mobile(){
      color: white;
    }
  }

  &--active {
    color: $em-mostly-used-active-color;

    @include mobile(){
      color: white;
      background-color: $em-mostly-used-active-color;
    }
  }
}
</style>
