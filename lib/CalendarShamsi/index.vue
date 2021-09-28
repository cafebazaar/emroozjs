<script setup lang="ts">
import {
  Lang, SetDateRangeItem, SetUnifyDateRangeItem, UnifyDateRangeItem,
} from '@lib/shared/types';
import { computed } from 'vue-demi';
import Calendar from '../shared/Calendar/index.vue';
import { toGregorian, toJalali } from './convertor';

import date from './date';
import strings from './strings';

const props = defineProps<{
  lang: Lang;
  fromDate: UnifyDateRangeItem;
  toDate: UnifyDateRangeItem;
  setFromDate:SetUnifyDateRangeItem;
  setToDate:SetUnifyDateRangeItem;
}>();

const fromShamsiDate = computed(() => (props.fromDate ? toJalali(
  props.fromDate.getFullYear(),
  props.fromDate.getMonth(),
  props.fromDate.getDate(),
) : null));

const toShamsiDate = computed(() => (props.toDate ? toJalali(
  props.toDate.getFullYear(),
  props.toDate.getMonth(),
  props.toDate.getDate(),
) : null));

const currentDate = toJalali(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate(),
);

const setLocalFromDate: SetDateRangeItem = (date) => {
  if (!date) return props.setFromDate(date);

  const gDate = toGregorian(date[0], date[1], date[2]);
  props.setFromDate(new Date(gDate[0], gDate[1], gDate[2]));
};

const setLocalToDate: SetDateRangeItem = (date) => {
  if (!date) return props.setToDate(date);

  const gDate = toGregorian(date[0], date[1], date[2]);
  props.setToDate(new Date(gDate[0], gDate[1], gDate[2]));
};

const selectedLanguageStrings = computed(() => strings[props.lang]);
</script>

<template>
  <Calendar
    :date="date"
    :from-date="fromShamsiDate"
    :to-date="toShamsiDate"
    :strings="selectedLanguageStrings"
    :current-date="currentDate"
    :set-from-date="setLocalFromDate"
    :set-to-date="setLocalToDate"
  />
</template>
