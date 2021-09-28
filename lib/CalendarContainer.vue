<script setup lang="ts">
import { toRef, ref, Ref } from 'vue-demi';
import CalendarShamsi from './CalendarShamsi/index.vue';
import {
  IsSelected, Lang, SetIsSelected, SetUnifyDateRangeItem, UnifyDateRangeItem,
} from './shared/types';

interface Props {
  lang?: Lang;
}

const props = withDefaults(defineProps<Props>(), {
  lang: 'fa',
});

const fromDate: Ref<UnifyDateRangeItem> = ref(null);
const toDate: Ref<UnifyDateRangeItem> = ref(null);
// Whether the selection is final or not
const isSelected: Ref<IsSelected> = ref(false);

const setIsSelected: SetIsSelected = (val) => {
  isSelected.value = val;
};

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
    :is-selected="isSelected"
    :set-from-date="setFromDate"
    :set-to-date="setToDate"
    :set-is-selected="setIsSelected"
  />
</template>
