<script setup lang="ts">
import { computed } from 'vue-demi';

const props = defineProps<{
  headerNames: string[];
  firstDayOfMonth: number;
  monthDays: number;
}>();

const fill = (count:number) => new Array(count).fill(0).map((_, index) => index + 1);
const fillEmpty = (count: number) => new Array(count).fill('');
const gridItems = computed(() => [...fillEmpty(props.firstDayOfMonth), ...fill(props.monthDays)]);
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
      v-for="i in gridItems"
      :key="i"
      class="CalendarGrid__item CalendarGrid__item--active"
    >
      <span class="CalendarGrid__item-inner CalendarGrid__item-inner--active">
        {{ i }}
      </span>
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

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: $cl-calendar-grid-item-font-size;
    color: $cl-text-color;

    margin: 4px 0;

    &--header {
      color: $cl-calendar-grid-header-color;
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
