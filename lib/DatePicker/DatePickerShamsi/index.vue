<script setup lang="ts">
import { computed, toRef } from 'vue-demi';
import {
  AllowedDates, Direction, Lang, SetDateItem, SetUnifyDateItem, UnifyDateItem,
} from '@lib/shared/types';
import { toGregorian, toJalali } from '@lib/shared/utilities/convertor';
import DatePickerUI from '../shared/DatePickerUI/index.vue';

import date from './date';
import strings from './strings';

const props = defineProps<{
  lang: Lang;
  direction: Direction;
  selectedDate: UnifyDateItem;
  setSelectedDate: SetUnifyDateItem;
  allowedDates: AllowedDates;
}>();

const shamsiSelectedDate = computed(() => (props.selectedDate ? toJalali(
  props.selectedDate.getFullYear(),
  props.selectedDate.getMonth(),
  props.selectedDate.getDate(),
) : null));

const currentDate = toJalali(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate(),
);

const setLocalSelectedDate: SetDateItem = (selectedDate) => {
  if (!selectedDate) {
    props.setSelectedDate(selectedDate);
    return;
  }

  const gDate = toGregorian(selectedDate[0], selectedDate[1], selectedDate[2]);
  props.setSelectedDate(new Date(gDate[0], gDate[1], gDate[2]));
};

const selectedLanguageStrings = computed(() => strings[props.lang]);

const allowedDates = toRef(props, 'allowedDates');
</script>

<template>
  <DatePickerUI
    :date="date"
    :direction="direction"
    :selected-date="shamsiSelectedDate"
    :set-selected-date="setLocalSelectedDate"
    :strings="selectedLanguageStrings"
    :current-date="currentDate"
    :allowed-dates="allowedDates"
  />
</template>
