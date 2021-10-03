<script setup lang="ts">
import { provide, toRefs, reactive } from 'vue-demi';
import CalendarMostlyUsed from './CalendarMostlyUsed.vue';
import CalendarSlider from './CalendarSlider/index.vue';
import CalendarFooter from './CalendarFooter.vue';
import {
  CalendarDate, CalendarLanguageStrings, CurrentDate,
  DateRangeItem, LocalCommonDates, SetDateRangeItem,
} from '../types';

const props = defineProps<{
  date: CalendarDate,
  strings: CalendarLanguageStrings;
  fromDate: DateRangeItem,
  toDate: DateRangeItem,
  currentDate: CurrentDate,
  commonDates: LocalCommonDates,
  setFromDate: SetDateRangeItem,
  setToDate: SetDateRangeItem,
}>();

const refProps = toRefs(props);

provide('date', props.date);
provide('strings', refProps.strings);
provide('fromDate', refProps.fromDate);
provide('toDate', refProps.toDate);
provide('currentDate', refProps.currentDate);
provide('commonDates', reactive(refProps.commonDates.value));
provide('setFromDate', props.setFromDate);
provide('setToDate', props.setToDate);
</script>

<template>
  <div class="Calendar">
    <div class="Calendar__content">
      <CalendarMostlyUsed class="Calendar__mostly-used" />

      <CalendarSlider class="Calendar__slider" />
    </div>
    <footer class="Calendar__footer">
      <CalendarFooter />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
  @import './shared/styles/vars.scss';
  .Calendar {
    direction: rtl;

    background-color: $cl-background-color;
    border-radius: $cl-border-radius;

    display: flex;
    flex-direction: column;

    border: $cl-border;
    padding: 16px 24px;
    width: 600px;
    height: 310px;

    &__content {
      display: flex;
      width: 100%;
      flex: 1;
      margin-bottom: 20px;
    }

    &__mostly-used {
      flex-basis: 160px;
    }

    &__slider {
      flex: 1;
    }

    &__footer {
      border-top: $cl-border;
    }
  }
</style>
