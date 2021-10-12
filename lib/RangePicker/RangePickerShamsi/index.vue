<script setup lang="ts">
import { computed, toRef } from 'vue-demi';
import {
  AllowedDates, CommonDates, Direction, Lang, SetDateItem, SetUnifyDateItem, UnifyDateItem,
} from '@lib/shared/types';
import { toGregorian, toJalali } from '@lib/shared/utilities/convertor';
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

const setLocalFromDate: SetDateItem = (fromDate) => {
  if (!fromDate) {
    props.setFromDate(fromDate);
    return;
  }

  const gDate = toGregorian(fromDate[0], fromDate[1], fromDate[2]);
  props.setFromDate(new Date(gDate[0], gDate[1], gDate[2]));
};

const setLocalToDate: SetDateItem = (toDate) => {
  if (!toDate) {
    props.setToDate(toDate);
    return;
  }

  const gDate = toGregorian(toDate[0], toDate[1], toDate[2]);
  props.setToDate(new Date(gDate[0], gDate[1], gDate[2]));
};

const selectedLanguageStrings = computed(() => strings[props.lang]);

const localCommonDates = computed(() => props.commonDates.map(({ from, to, label }) => ({
  from: toJalali(from.getFullYear(), from.getMonth(), from.getDate()),
  to: toJalali(to.getFullYear(), to.getMonth(), to.getDate()),
  label,
})));

const allowedDates = toRef(props, 'allowedDates');
</script>

<template>
  <RangePicker
    :date="date"
    :direction="direction"
    :from-date="fromShamsiDate"
    :to-date="toShamsiDate"
    :strings="selectedLanguageStrings"
    :current-date="currentDate"
    :common-dates="localCommonDates"
    :allowed-dates="allowedDates"
    :set-from-date="setLocalFromDate"
    :set-to-date="setLocalToDate"
    :select-range="props.selectRange"
  />
</template>
