<script setup lang="ts">
import {
  toRef, ref, Ref, computed, watch,
} from 'vue';
import {
  Lang, AllowedDates, CalendarType, DatePickerSelectOutput,
  DatePickerSelectInput,
} from '@lib/shared/types';
import useDirection from '@lib/shared/hooks/useDirection';
import DatePickerShamsi from './DatePickerShamsi/index.vue';
import DatePickerMiladi from './DatePickerMiladi/index.vue';
import { SelectDate, SetDatePickerSelectInput } from './shared/types';

// @todo: Import this from types
interface DatePickerProps {
  lang?: Lang;
  allowedDates?: AllowedDates;
  type?: CalendarType;
  datePickerClass?: any;
  modelValue?: DatePickerSelectInput;
}

const props = withDefaults(defineProps<DatePickerProps>(), {
  lang: 'fa',
  commonDates: () => [],
  allowedDates: () => null,
  type: 'shamsi',
  datePickerClass: '',
  modelValue: () => null,
});

const emit = defineEmits<{(e: 'update:modelValue', date: DatePickerSelectOutput): void;}>();

const DATE_PICKER_TYPE_TO_COMPONENT = {
  shamsi: DatePickerShamsi,
  miladi: DatePickerMiladi,
};

const selectedDate: Ref<DatePickerSelectInput> = ref(props.modelValue);
watch(() => props.modelValue, () => {
  selectedDate.value = props.modelValue;
});

const setSelectedDate: SetDatePickerSelectInput = (date) => {
  selectedDate.value = date;
};

const selectDate: SelectDate = () => {
  if (selectedDate.value) {
    emit('update:modelValue', selectedDate.value);
  }
};

const lang = toRef(props, 'lang');
const allowedDates = toRef(props, 'allowedDates');

const CalendarComponent = computed(() => DATE_PICKER_TYPE_TO_COMPONENT[props.type]);

const direction = useDirection(lang);
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
      :class="props.datePickerClass"
    />
  </div>
</template>
