<script setup lang="ts">
import {
  toRef, ref, Ref, computed,
} from 'vue-demi';
import {
  Lang, AllowedDates, CalendarType, UnifyDateItem, SetUnifyDateItem,
} from '@lib/shared/types';
import DatePickerShamsi from './DatePickerShamsi/index.vue';

interface Props {
  lang?: Lang;
  allowedDates?: AllowedDates;
  type?: CalendarType;
}

const props = withDefaults(defineProps<Props>(), {
  lang: 'fa',
  commonDates: () => [],
  allowedDates: () => null,
  type: 'shamsi',
});

const DATE_PICKER_TYPE_TO_COMPONENT = {
  shamsi: DatePickerShamsi,
  miladi: null,
};

const selectedDate: Ref<UnifyDateItem> = ref(null);

const setSelectedDate: SetUnifyDateItem = (date) => {
  selectedDate.value = date;
};

const lang = toRef(props, 'lang');
const allowedDates = toRef(props, 'allowedDates');

const CalendarComponent = computed(() => DATE_PICKER_TYPE_TO_COMPONENT[props.type]);

const direction = computed(() => (lang.value === 'fa' ? 'rtl' : 'ltr'));
</script>

<template>
  <div
    class="EMRoot"
    :lang="lang"
  >
    <Component
      :is="CalendarComponent"
      :lang="lang"
      :direction="direction"
      :selected-date="selectedDate"
      :set-selected-date="setSelectedDate"
      :allowed-dates="allowedDates"
    />
  </div>
</template>
