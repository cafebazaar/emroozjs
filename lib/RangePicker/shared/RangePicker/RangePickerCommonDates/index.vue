<script setup lang="ts">
import useCalendar from '../shared/hooks/useRangePicker';
import RangePickerCommonDatesItem from './RangePickerCommonDatesItem.vue';

const { commonDates } = useCalendar();

const {
  strings,
} = useCalendar();
</script>

<template>
  <div class="EMRangePickerCommonDates">
    <header class="EMRangePickerCommonDates__title">
      {{ strings.commonDates }}
    </header>
    <ul class="EMRangePickerCommonDates__list">
      <RangePickerCommonDatesItem
        v-for="({label,from,to}) of commonDates"
        :key="label"
        class="EMRangePickerCommonDates__list-item"
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

.EMRangePickerCommonDates {
  font-size: var(--em-mostly-used-font-size);
  display: flex;
  flex-direction: column;

  @include mobile(){
    flex-direction: row;
    width: 100%;
    position: relative;
    overflow-x: auto;
  }

  @include endPadding(calc(1.6 * var(--em-global-padding)));

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
          @include startMargin(var(--em-global-margin));
        }
      }
    }
  }
}
</style>
