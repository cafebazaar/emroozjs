<script setup lang="ts">
import {
  toRef, ref, Ref, computed, watch,
} from 'vue';
import {
  AllowedDates, CalendarType, CommonDates, Lang,
  RangePickerSelectOutput, SetUnifyDateItem, UnifyDateItem,
  RangePickerSelectInput,
} from '@lib/shared/types';
import useDirection from '@lib/shared/hooks/useDirection';
import RangePickerShamsi from './RangePickerShamsi/index.vue';
import RangePickerMiladi from './RangePickerMiladi/index.vue';
import { SelectRange } from './shared/types';

interface Props {
  lang?: Lang;
  commonDates?: CommonDates;
  allowedDates?: AllowedDates;
  type?: CalendarType;
  rangePickerClass?: any;
  modelValue?: RangePickerSelectInput;
}

const props = withDefaults(defineProps<Props>(), {
  lang: 'fa',
  commonDates: () => [],
  allowedDates: () => null,
  type: 'shamsi',
  rangePickerClass: '',
  modelValue: () => null,
});

const emit = defineEmits<{(e: 'update:modelValue', rangePickerSelectOutput: RangePickerSelectOutput): void;
}>();

const RANGE_PICKER_TYPE_TO_COMPONENT = {
  shamsi: RangePickerShamsi,
  miladi: RangePickerMiladi,
};

const fromDate: Ref<UnifyDateItem> = ref(props.modelValue?.from || null);
const toDate: Ref<UnifyDateItem> = ref(props.modelValue?.to || null);
watch(() => props.modelValue, () => {
  fromDate.value = props.modelValue?.from || null;
  toDate.value = props.modelValue?.to || null;
});

const setFromDate: SetUnifyDateItem = (date) => {
  fromDate.value = date;
};

const setToDate: SetUnifyDateItem = (date) => {
  toDate.value = date;
};

const selectRange: SelectRange = () => {
  if (fromDate.value && toDate.value) {
    emit('update:modelValue', {
      from: fromDate.value,
      to: toDate.value,
    });
  }
};

const lang = toRef(props, 'lang');
const allowedDates = toRef(props, 'allowedDates');

const CalendarComponent = computed(() => RANGE_PICKER_TYPE_TO_COMPONENT[props.type]);

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
      :from-date="fromDate"
      :to-date="toDate"
      :set-from-date="setFromDate"
      :set-to-date="setToDate"
      :common-dates="commonDates"
      :allowed-dates="allowedDates"
      :select-range="selectRange"
      :class="props.rangePickerClass"
    />
  </div>
</template>
