<script setup lang="ts">
import useCalendar from '../shared/hooks/useCalendar';
import CalendarCommonDatesItem from './CalendarCommonDatesItem.vue';

const { commonDates } = useCalendar();

const {
  strings,
} = useCalendar();
</script>

<template>
  <div class="CalendarCommonDates">
    <header>
      {{ strings.commonDates }}
    </header>
    <ul class="CalendarCommonDates__list">
      <CalendarCommonDatesItem
        v-for="({label,from,to}) of commonDates"
        :key="label"
        :label="label"
        :from="from"
        :to="to"
      >
        {{ label }}
      </CalendarCommonDatesItem>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '../shared/styles/imports.scss';
.CalendarCommonDates {
  font-size: $cl-mostly-used-font-size;
  display: flex;
  flex-direction: column;

  @include endPadding(1.6);

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
  }
}
</style>
