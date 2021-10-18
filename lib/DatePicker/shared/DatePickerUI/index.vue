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
  <div class="DatePickerUI">
    <DatePickerUISlider />

    <DatePickerUIFooter class="DatePickerUI__footer" />
  </div>
</template>

<style lang="scss" scoped>
.DatePickerUI {
  direction: rtl;
  @include ltr {
    direction: ltr;
  }

  padding: $em-global-padding * 1.6 $em-global-padding * 2.4;
  background-color: $em-background-color;
  border-radius: $em-border-radius;
  border: $em-border;

  width: 241px;

  @include mobile(){
    width: 100%;
    padding: $em-global-padding * 2.4;
  }

  box-sizing: border-box;

  &__footer {
    border-top: $em-footer-border-top;
  }
}
</style>
