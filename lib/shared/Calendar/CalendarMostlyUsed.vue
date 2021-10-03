<script setup lang="ts">
import { LocalCommonDate } from '../types';
import useCalendar from './shared/hooks/useCalendar';

type CommonDateRange = Pick<LocalCommonDate, 'from' | 'to'>;

const {
  commonDates, setFromDate, setToDate, fromDate, toDate, strings,
} = useCalendar();

function setRange({ from, to }: CommonDateRange): void {
  setFromDate(from);
  setToDate(to);
}

function isActive({ from, to }: CommonDateRange): boolean {
  if (
    from.toString() === fromDate.value?.toString()
  && to.toString() === toDate.value?.toString()
  ) {
    return true;
  }
  return false;
}
</script>

<template>
  <div class="CalendarMostlyUsed">
    <header>
      {{ strings.commonDates }}
    </header>
    <ul class="CalendarMostlyUsed__list">
      <li
        v-for="{label, from, to} of commonDates"
        :key="label"
        class="CalendarMostlyUsed__list-item"
        :class="{
          'CalendarMostlyUsed__list-item--active': isActive({ from,to })
        }"
        @click="setRange({ from, to })"
      >
        {{ label }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  @import './shared/styles/vars.scss';
  .CalendarMostlyUsed {
    font-size: $cl-mostly-used-font-size;
    display: flex;
    flex-direction: column;

    padding-left: 16px;
    box-sizing: border-box;

    overflow: hidden;

    &__list {
      list-style-type: none;
      padding: 0;
      margin-bottom: 0;
      margin-top: 12px;
      flex: 1;
      flex-basis: 0;

      overflow-y: auto;

      &-item {
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
    }
  }
</style>
