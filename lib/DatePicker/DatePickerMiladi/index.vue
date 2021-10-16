<script setup lang="ts">
import { computed, toRef } from 'vue-demi';
import {
  AllowedDates, Direction, Lang, SetDateItem, SetUnifyDateItem, TupleDate, UnifyDateItem,
} from '@lib/shared/types';
import DatePickerUI from '../shared/DatePickerUI/index.vue';

import date from './date';
import strings from './strings';
import { SelectDate } from '../shared/types';

const props = defineProps<{
  lang: Lang;
  direction: Direction;
  selectedDate: UnifyDateItem;
  setSelectedDate: SetUnifyDateItem;
  allowedDates: AllowedDates;
  selectDate: SelectDate;
}>();

const selectedDateTuple = computed(() => (props.selectedDate ? [
  props.selectedDate.getFullYear(),
  props.selectedDate.getMonth(),
  props.selectedDate.getDate(),
] as TupleDate : null));

const currentDate: TupleDate = [
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate(),
];

const setLocalSelectedDate: SetDateItem = (selectedDate) => {
  if (!selectedDate) {
    props.setSelectedDate(selectedDate);
    return;
  }

  props.setSelectedDate(new Date(selectedDate[0], selectedDate[1], selectedDate[2]));
};

const selectedLanguageStrings = computed(() => strings[props.lang]);

const allowedDates = toRef(props, 'allowedDates');
</script>

<template>
  <DatePickerUI
    :date="date"
    :direction="direction"
    :selected-date="selectedDateTuple"
    :set-selected-date="setLocalSelectedDate"
    :strings="selectedLanguageStrings"
    :current-date="currentDate"
    :allowed-dates="allowedDates"
    :select-date="selectDate"
  />
</template>
