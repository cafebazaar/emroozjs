<script setup lang="ts">
import {
  toRef, ref, Ref, computed,
} from 'vue-demi';
import {
  Lang, AllowedDates, CalendarType, UnifyDateItem, SetUnifyDateItem, DatePickerSelectOutput,
} from '@lib/shared/types';
import DatePickerShamsi from './DatePickerShamsi/index.vue';
import DatePickerMiladi from './DatePickerMiladi/index.vue';
import { SelectDate } from './shared/types';

interface Props {
  lang?: Lang;
  allowedDates?: AllowedDates;
  type?: CalendarType;
}

interface Events {
  (e: 'select', date: DatePickerSelectOutput): void;
}

const props = withDefaults(defineProps<Props>(), {
  lang: 'fa',
  commonDates: () => [],
  allowedDates: () => null,
  type: 'shamsi',
});

const emit = defineEmits<Events>();

const DATE_PICKER_TYPE_TO_COMPONENT = {
  shamsi: DatePickerShamsi,
  miladi: DatePickerMiladi,
};

const selectedDate: Ref<UnifyDateItem> = ref(null);

const setSelectedDate: SetUnifyDateItem = (date) => {
  selectedDate.value = date;
};

const selectDate: SelectDate = () => {
  if (selectedDate.value) {
    emit('select', selectedDate.value);
  }
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
      :select-date="selectDate"
    />
  </div>
</template>
