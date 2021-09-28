<script setup lang="ts">
import Calendar from '../shared/Calendar/index.vue';
import { toJalali } from './convertor';

import date from './date';
import strings from './strings';

const props = defineProps<{
  lang: 'fa' | 'en';
  fromDate: null | Date;
  toDate: null | Date;
}>();

const fromShamsiDate = props.fromDate ? toJalali(
  props.fromDate.getFullYear(),
  props.fromDate.getMonth(),
  props.fromDate.getDate(),
) : null;

const toShamsiDate = props.toDate ? toJalali(
  props.toDate.getFullYear(),
  props.toDate.getMonth(),
  props.toDate.getDate(),
) : null;

const currentDate = toJalali(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate(),
);

const selectedLanguageStrings = strings[props.lang];
</script>

<template>
  <Calendar
    :date="date"
    :from-date="fromShamsiDate"
    :to-date="toShamsiDate"
    :strings="selectedLanguageStrings"
    :current-date="currentDate"
  />
</template>
