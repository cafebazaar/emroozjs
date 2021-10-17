<script setup lang="ts">
import { computed, toRef } from 'vue-demi';
import {
  AllowedDates, CalendarType, CommonDates, Lang, DatePickerSelectOutput,
} from '@lib/shared/types';
import useDirection from '@lib/shared/hooks/useDirection';
import DatePickerInputShamsi from './DatePickerInputShamsi.vue';
import DatePickerInputMiladi from './DatePickerInputMiladi.vue';

const DATE_PICKER_INPUT_TYPE_TO_COMPONENT = {
  shamsi: DatePickerInputShamsi,
  miladi: DatePickerInputMiladi,
};

// @todo: Import this from types
interface RangePickerProps {
  lang?: Lang;
  commonDates?: CommonDates;
  allowedDates?: AllowedDates;
  type?: CalendarType;
  modelValue?: DatePickerSelectOutput | null;
}

const props = withDefaults(defineProps<RangePickerProps>(), {
  lang: 'fa',
  commonDates: () => [],
  allowedDates: () => null,
  type: 'shamsi',
  modelValue: () => null,
});

const emit = defineEmits<{(e: 'update:modelValue', date: DatePickerSelectOutput): void;
}>();

const CalendarComponent = computed(() => DATE_PICKER_INPUT_TYPE_TO_COMPONENT[props.type]);
const lang = toRef(props, 'lang');
const direction = useDirection(lang);

function emitSelectedRange(date: DatePickerSelectOutput) {
  emit('update:modelValue', date);
}
</script>

<template>
  <div
    class="EMRoot"
    :lang="lang"
  >
    <Component
      :is="CalendarComponent"
      :lang="props.lang"
      :direction="direction"
      :common-dates="props.commonDates"
      :allowed-dates="props.allowedDates"
      :type="props.type"
      :value="props.modelValue"
      @select="emitSelectedRange"
    />
  </div>
</template>
