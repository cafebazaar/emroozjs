<script setup lang="ts">
import { computed, toRef } from 'vue-demi';
import useCalendar from '../../../shared/hooks/useCalendar';
import useDateCompares from './useDateCompares';

const props = defineProps<{
  headerNames: string[];
  firstDayOfMonth: number;
  lastDayOfMonth: number;
  monthDays: number;
  currentYear: number;
  currentMonth: number;
}>();

const currentMonth = toRef(props, 'currentMonth');
const currentYear = toRef(props, 'currentYear');

const { fromDate, toDate } = useCalendar();
const {
  isMiddle, isBeforeStartingEdge, isEdge, isEndingRangeEdge, isStartingRangeEdge, isToday,
} = useDateCompares({
  fromDate, toDate, currentMonth, currentYear,
});

const emit = defineEmits<{(e: 'selectDate', day: number): number }>();

const isRangeSelected = computed(() => fromDate.value && toDate.value);

function selectDate(day: number) {
  // toDate should not be less than fromDate
  if (
    fromDate.value
    && !toDate.value
    && isBeforeStartingEdge(day)
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
        'CalendarGrid__item--active': isMiddle(0),
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
        'CalendarGrid__item--active': isMiddle(i),
        'CalendarGrid__item--active-start':
          isStartingRangeEdge(i) && isRangeSelected,
        'CalendarGrid__item--active-end': isEndingRangeEdge(i),
        'CalendarGrid__item--disabled':
          isBeforeStartingEdge(i) && !isRangeSelected,
        'CalendarGrid__item--today': isToday(i),
      }"
      @click="selectDate(i)"
    >
      <span
        class="CalendarGrid__item-inner"
        :class="{
          'CalendarGrid__item-inner--active': isEdge(i),
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
        'CalendarGrid__item--active': isMiddle(monthDays),
      }"
      @click="selectDate(i)"
    >
      <span class="CalendarGrid__item-inner" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../shared/styles/vars.scss';
.CalendarGrid {
  border: $cl-calendar-grid-border;

  width: 189px;

  border-radius: $cl-calendar-grid-border-radius;

  display: flex;
  flex-wrap: wrap;

  &__item {
    $item: &;

    transition-duration: $cl-calendar-grid-transition-duration;

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

    &--today:not(#{$item}--active):not(#{$item}--disabled) {
      color: $cl-calendar-grid-hover-color;
    }

    &:not(#{$item}--header):not(#{$item}--active):not(#{$item}--disabled) {
      &:hover {
        color: $cl-calendar-grid-hover-color;
      }
    }

    &-inner {
      transition-duration: $cl-calendar-grid-transition-duration;

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
