<script setup lang="ts">
import { toRef, ref, Ref } from 'vue-demi';
import CalendarShamsi from './CalendarShamsi/index.vue';
import {
  Lang, SetUnifyDateRangeItem, UnifyDateRangeItem,
} from './shared/types';

interface Props {
  lang?: Lang;
}

const props = withDefaults(defineProps<Props>(), {
  lang: 'fa',
});

const fromDate: Ref<UnifyDateRangeItem> = ref(null);
const toDate: Ref<UnifyDateRangeItem> = ref(null);

const setFromDate: SetUnifyDateRangeItem = (date) => {
  fromDate.value = date;
};

const setToDate: SetUnifyDateRangeItem = (date) => {
  toDate.value = date;
};

const lang = toRef(props, 'lang');
</script>

<template>
  <CalendarShamsi
    :lang="lang"
    :from-date="fromDate"
    :to-date="toDate"
    :set-from-date="setFromDate"
    :set-to-date="setToDate"
  />
</template>
