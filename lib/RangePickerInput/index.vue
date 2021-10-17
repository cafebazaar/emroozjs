<script setup lang="ts">
import { computed, toRef } from 'vue-demi';
import {
  AllowedDates, CalendarType, CommonDates, Lang, RangePickerSelectOutput,
} from '@lib/shared/types';
import useDirection from '@lib/shared/hooks/useDirection';
import RangePickerInputShamsi from './RangePickerInputShamsi/index.vue';
import RangePickerInputMiladi from './RangePickerInputMiladi/index.vue';

const RANGE_PICKER_INPUT_TYPE_TO_COMPONENT = {
  shamsi: RangePickerInputShamsi,
  miladi: RangePickerInputMiladi,
};

// @todo: Import this from types
interface RangePickerProps {
  lang?: Lang;
  commonDates?: CommonDates;
  allowedDates?: AllowedDates;
  type?: CalendarType;
  modelValue?: RangePickerSelectOutput | null;
}

const props = withDefaults(defineProps<RangePickerProps>(), {
  lang: 'fa',
  commonDates: () => [],
  allowedDates: () => null,
  type: 'shamsi',
  modelValue: () => null,
});

const emit = defineEmits<{(e: 'update:modelValue', rangeInfo: RangePickerSelectOutput): void;
}>();

const CalendarComponent = computed(() => RANGE_PICKER_INPUT_TYPE_TO_COMPONENT[props.type]);

const lang = toRef(props, 'lang');
const direction = useDirection(lang);

function emitSelectedRange(rangeInfo: RangePickerSelectOutput) {
  emit('update:modelValue', rangeInfo);
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
