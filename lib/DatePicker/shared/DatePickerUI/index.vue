<script setup lang="ts">
import { toRefs, provide } from 'vue';
import {
  AllowedDates, CurrentDate, DateItem, Direction, SetDateItem,
} from '@lib/shared/types';
import DatePickerUISlider from './DatePickerUISlider/index.vue';
import DatePickerUIFooter from './DatePickerUIFooter.vue';
import { DatePickerDate, DatePickerLanguageStrings, SelectDate } from '../types';

const props = defineProps<{
  date: DatePickerDate;
  strings: DatePickerLanguageStrings;
  currentDate: CurrentDate;
  direction: Direction;
  selectedDate: DateItem;
  setSelectedDate: SetDateItem;
  allowedDates: AllowedDates;
  selectDate: SelectDate;
}>();

const refProps = toRefs(props);

provide('date', props.date);
provide('strings', refProps.strings);
provide('selectedDate', refProps.selectedDate);
provide('currentDate', refProps.currentDate);
provide('direction', refProps.direction);
provide('setSelectedDate', props.setSelectedDate);
provide('allowedDates', props.allowedDates);
provide('selectDate', props.selectDate);
</script>

<template>
  <div class="EMDatePickerUI">
    <DatePickerUISlider />

    <DatePickerUIFooter class="EMDatePickerUI__footer" />
  </div>
</template>

<style lang="scss" scoped>
.EMDatePickerUI {
  direction: rtl;
  @include ltr {
    direction: ltr;
  }

  padding: calc(var(--em-global-padding) * 1.6) calc(var(--em-global-padding) * 2.4);
  background-color: var(--em-background-color);
  border-radius: var(--em-border-radius);
  border: var(--em-border);

  width: 241px;

  @include mobile(){
    width: 100%;
    padding: calc(var(--em-global-padding) * 2.4);
  }

  box-sizing: border-box;

  &__footer {
    border-top: var(--em-footer-border-top);
  }
}
</style>
