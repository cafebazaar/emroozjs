<script setup lang="ts">
import { computed, toRef } from 'vue';
import {
  CommonDates,
  Direction, Lang, SetUnifyDateItem, AllowedDates, TupleDate, UnifyDateItem, SetDateItem,
} from '@lib/shared/types';
import RangePicker from '../shared/RangePicker/index.vue';

import date from './date';
import strings from './strings';
import { SelectRange } from '../shared/types';

const props = defineProps<{
  lang: Lang;
  direction: Direction;
  fromDate: UnifyDateItem;
  toDate: UnifyDateItem;
  setFromDate:SetUnifyDateItem;
  setToDate:SetUnifyDateItem;
  commonDates: CommonDates,
  allowedDates: AllowedDates;
  selectRange: SelectRange;
}>();

const fromDateTuple = computed(() => (props.fromDate ? [
  props.fromDate.getFullYear(),
  props.fromDate.getMonth(),
  props.fromDate.getDate(),
] as TupleDate : null));

const toDateTuple = computed(() => (props.toDate ? [
  props.toDate.getFullYear(),
  props.toDate.getMonth(),
  props.toDate.getDate(),
] as TupleDate : null));

const currentDate: TupleDate = [
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate(),
];

const setLocalFromDate: SetDateItem = (fromDate) => {
  if (!fromDate) {
    props.setFromDate(null);
    return;
  }

  props.setFromDate(new Date(fromDate[0], fromDate[1], fromDate[2]));
};

const setLocalToDate: SetDateItem = (toDate) => {
  if (!toDate) {
    props.setToDate(null);
    return;
  }

  props.setToDate(new Date(toDate[0], toDate[1], toDate[2]));
};

const selectedLanguageStrings = computed(() => strings[props.lang]);

const localCommonDates = computed(() => props.commonDates.map(({ from, to, label }) => ({
  from: [from.getFullYear(), from.getMonth(), from.getDate()] as TupleDate,
  to: [to.getFullYear(), to.getMonth(), to.getDate()] as TupleDate,
  label,
})));

const allowedDates = toRef(props, 'allowedDates');
</script>

<template>
  <RangePicker
    :date="date"
    :direction="direction"
    :from-date="fromDateTuple"
    :to-date="toDateTuple"
    :strings="selectedLanguageStrings"
    :current-date="currentDate"
    :common-dates="localCommonDates"
    :allowed-dates="allowedDates"
    :set-from-date="setLocalFromDate"
    :set-to-date="setLocalToDate"
    :select-range="props.selectRange"
  />
</template>
