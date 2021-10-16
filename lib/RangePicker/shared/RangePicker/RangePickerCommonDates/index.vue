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
    <header class="RangePickerCommonDates__title">
      {{ strings.commonDates }}
    </header>
    <ul class="RangePickerCommonDates__list">
      <RangePickerCommonDatesItem
        v-for="({label,from,to}) of commonDates"
        :key="label"
        class="RangePickerCommonDates__list-item"
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
  font-size: $em-mostly-used-font-size;
  display: flex;
  flex-direction: column;

  @include mobile(){
    flex-direction: row;
    width: 100%;
    position: relative;
    overflow-x: auto;
  }

  @include endPadding(1.6 * $em-global-padding);

  box-sizing: border-box;

  overflow: hidden;

  &__title {
    @include mobile(){
      display: none;
    }
  }

  &__list {
    list-style-type: none;
    padding: 0;
    margin-bottom: 0;
    margin-top: 12px;
    flex: 1;
    flex-basis: 0;

    overflow-y: auto;

    @include mobile(){
      display: flex;
      margin: 0;
      position: absolute;
      padding: 10px 0;
    }

    &-item {
      &:not(:first-child) {
        margin-top: 8px;

        @include mobile(){
          margin-top: 0;
          @include startMargin($em-global-margin);
        }
      }
    }
  }
}
</style>
