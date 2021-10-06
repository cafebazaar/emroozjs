<script setup lang="ts">
import useCalendar from '../shared/hooks/useRangePicker';
import RangePickerCommonDatesItem from './RangePickerCommonDatesItem.vue';

const { commonDates } = useCalendar();

const {
  strings,
} = useCalendar();
</script>

<template>
  <div class="RangePickerCommonDates">
    <header>
      {{ strings.commonDates }}
    </header>
    <ul class="RangePickerCommonDates__list">
      <RangePickerCommonDatesItem
        v-for="({label,from,to}) of commonDates"
        :key="label"
        :label="label"
        :from="from"
        :to="to"
      >
        {{ label }}
      </RangePickerCommonDatesItem>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

.RangePickerCommonDates {
  font-size: $em-range-picker-mostly-used-font-size;
  display: flex;
  flex-direction: column;

  @include endPadding(1.6 * $em-global-padding);

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
