<script setup lang="ts">
import { TupleDate } from '@lib/shared/types';
import { computed } from 'vue-demi';
import useCalendar from '../shared/hooks/useCalendar';

const props = defineProps<{
  headerNames: string[];
  firstDayOfMonth: number;
  lastDayOfMonth: number;
  monthDays: number;
  currentYear: number;
  currentMonth: number;
}>();

const { fromDate, toDate, date } = useCalendar();

const emit = defineEmits<{(e: 'selectDate', day: number): number }>();

function isStartingRangeEdge(toBeComparedDate: TupleDate) {
  // There is no range!
  if (!fromDate.value || !toDate.value) return false;

  if (fromDate.value && toBeComparedDate.toString() === fromDate.value.toString()) {
    return true;
  }
  return false;
}

function isEndingRangeEdge(toBeComparedDate: TupleDate) {
  // There is no range!
  if (!fromDate.value || !toDate.value) return false;

  if (toDate.value && toBeComparedDate.toString() === toDate.value.toString()) {
    return true;
  }
  return false;
}

function isEdge(toBeComparedDate: TupleDate) {
  if (fromDate.value && toBeComparedDate.toString() === fromDate.value.toString()) {
    return true;
  }
  if (toDate.value && toBeComparedDate.toString() === toDate.value.toString()) {
    return true;
  }
  return false;
}

function isMiddle(toBeComparedDate: TupleDate) {
  if (!fromDate.value || !toDate.value) return false;

  if (
    date.compare(fromDate.value, toBeComparedDate) === 1
    && date.compare(toBeComparedDate, toDate.value) === 1
  ) return true;

  return false;
}

function isBeforeStartingEdge(toBeComparedDate: TupleDate) {
  if (!fromDate.value) return false;

  return date.compare(fromDate.value, toBeComparedDate) === -1;
}

function selectDate(day: number) {
  // toDate should not be less than fromDate
  if (
    fromDate.value
    && !toDate.value
    && isBeforeStartingEdge([props.currentYear, props.currentMonth, day])
  ) return;

  emit('selectDate', day);
}

const fill = (count:number) => new Array(count).fill(0).map((_, index) => index + 1);
const fillEmpty = (count: number) => new Array(count).fill('');
const emptyFirstDays = computed(() => fillEmpty(props.firstDayOfMonth));
const dayItems = computed(() => fill(props.monthDays));
const emptyLastDays = computed(() => fillEmpty(6 - props.lastDayOfMonth));
</script>

<template>
  <div class="CalendarGrid">
    <div
      v-for="i of props.headerNames"
      :key="i"
      class="CalendarGrid__item CalendarGrid__item--header"
    >
      <span>
        {{ i }}
      </span>
    </div>
    <div
      v-for="(i, index) in emptyFirstDays"
      :key="`${i}-${index}`"
      class="CalendarGrid__item CalendarGrid__item--empty"
      :class="{
        'CalendarGrid__item--active': isMiddle([currentYear, currentMonth, 1]),
      }"
      @click="selectDate(i)"
    >
      <span class="CalendarGrid__item-inner" />
    </div>
    <div
      v-for="i in dayItems"
      :key="`${currentYear}-${currentMonth}-${i}`"
      class="CalendarGrid__item"
      :class="{
        'CalendarGrid__item--active': isMiddle([currentYear, currentMonth, i]),
        'CalendarGrid__item--active-start': isStartingRangeEdge([currentYear, currentMonth, i]),
        'CalendarGrid__item--active-end': isEndingRangeEdge([currentYear, currentMonth, i]),
        'CalendarGrid__item--disabled': isBeforeStartingEdge([currentYear, currentMonth, i]),
      }"
      @click="selectDate(i)"
    >
      <span
        class="CalendarGrid__item-inner"
        :class="{
          'CalendarGrid__item-inner--active': isEdge([currentYear, currentMonth, i]),
        }"
      >
        {{ i }}
      </span>
    </div>
    <div
      v-for="(i, index) in emptyLastDays"
      :key="`${i}-${index}`"
      class="CalendarGrid__item CalendarGrid__item--empty"
      :class="{
        'CalendarGrid__item--active': isMiddle([currentYear, currentMonth, monthDays]),
      }"
      @click="selectDate(i)"
    >
      <span class="CalendarGrid__item-inner" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../shared/styles/vars.scss';
.CalendarGrid {
  border: $cl-calendar-grid-border;

  width: 189px;

  border-radius: $cl-calendar-grid-border-radius;

  display: flex;
  flex-wrap: wrap;

  &__item {
    width: 27px;
    height: 20px;

    cursor: pointer;
    user-select: none;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: $cl-calendar-grid-item-font-size;
    color: $cl-text-color;

    margin: 4px 0;

    &--header {
      color: $cl-calendar-grid-header-color;
      cursor: default;
    }

    &--empty {
      cursor: default;
    }

    &--disabled {
      cursor: not-allowed;
      color: $cl-calendar-grid-disabled-color;
    }

    &--active {
      background: $cl-calendar-grid-active-background-color;

      &-start {
        background:
          linear-gradient(
            to left,
            transparent 0%,
            transparent 50%,
            $cl-calendar-grid-active-background-color 50%,
            $cl-calendar-grid-active-background-color 100%
          );
      }
      &-end {
        background:
          linear-gradient(
            to right,
            transparent 0%,
            transparent 50%,
            $cl-calendar-grid-active-background-color 50%,
            $cl-calendar-grid-active-background-color 100%
          );
      }
    }

    &-inner {
      border-radius: 50%;

      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      &--active {
        background-color: $cl-calendar-grid-active-color;
        color: $cl-calendar-grid-active-text-color;
      }
    }
  }
}
</style>
