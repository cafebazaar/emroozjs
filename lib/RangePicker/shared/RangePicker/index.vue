<script setup lang="ts">
import { provide, toRefs, reactive } from 'vue-demi';
import RangePickerCommonDates from './RangePickerCommonDates/index.vue';
import RangePickerSlider from './RangePickerSlider/index.vue';
import RangePickerFooter from './RangePickerFooter.vue';
import {
  AllowedDates,
  RangePickerDate, RangePickerLanguageStrings, CurrentDate,
  DateItem, Direction, LocalCommonDates, SetDateItem,
} from '../types';

const props = defineProps<{
  date: RangePickerDate,
  strings: RangePickerLanguageStrings;
  fromDate: DateItem,
  toDate: DateItem,
  currentDate: CurrentDate,
  commonDates: LocalCommonDates,
  direction: Direction,
  setFromDate: SetDateItem,
  setToDate: SetDateItem,
  allowedDates: AllowedDates,
}>();

const refProps = toRefs(props);

provide('date', props.date);
provide('strings', refProps.strings);
provide('fromDate', refProps.fromDate);
provide('toDate', refProps.toDate);
provide('currentDate', refProps.currentDate);
provide('direction', refProps.direction);
provide('commonDates', reactive(refProps.commonDates.value));
provide('setFromDate', props.setFromDate);
provide('setToDate', props.setToDate);
provide('allowedDates', props.allowedDates);
</script>

<template>
  <div
    class="RangePicker"
  >
    <div class="RangePicker__content">
      <RangePickerCommonDates class="RangePicker__common-dates" />

      <RangePickerSlider class="RangePicker__slider" />
    </div>
    <footer class="RangePicker__footer">
      <RangePickerFooter />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
  .RangePicker {
    direction: rtl;
    @include ltr {
      direction: ltr;
    }

    background-color: $em-background-color;
    border-radius: $em-border-radius;

    display: flex;
    flex-direction: column;

    border: $em-border;
    padding: 16px 24px;
    width: 600px;

    &__content {
      display: flex;
      width: 100%;
      flex: 1;
      margin-bottom: 20px;
    }

    &__common-dates {
      flex-basis: 160px;
    }

    &__slider {
      flex: 1;
    }

    &__footer {
      border-top: $em-footer-border-top;
    }
  }
</style>
