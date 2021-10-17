<script setup lang="ts">
import { computed } from 'vue-demi';
import {
  AllowedDates, CalendarType, CommonDates, Lang, DatePickerSelectOutput, DatePickerSelectInput,
} from '@lib/shared/types';
import { toJalali } from '@lib/shared/utilities/convertor';
import DatePickerInput from './shared/DatePickerInput.vue';
import strings from './shared/strings';

// @todo: Import this from types
interface RangePickerProps {
  lang: Lang;
  commonDates: CommonDates;
  allowedDates: AllowedDates;
  modelValue: DatePickerSelectInput;
  type: CalendarType;
}

const props = defineProps<RangePickerProps>();
const emit = defineEmits<{(e: 'update:modelValue', date: DatePickerSelectOutput): void;}>();

const selectedLanguageStrings = computed(() => strings[props.lang]);

function emitSelectedRange(date: DatePickerSelectOutput) {
  emit('update:modelValue', date);
}

const convertRangeItemToString = (date: Date) => {
  const jDate = toJalali(date.getFullYear(), date.getMonth(), date.getDate());

  return `${jDate[0]}/${jDate[1]}/${jDate[2]}`;
};

const selectedDateString = computed(() => {
  if (!props.modelValue) {
    return selectedLanguageStrings.value.notSpecified;
  }

  return convertRangeItemToString(props.modelValue);
});

</script>

<template>
  <DatePickerInput
    :common-dates="props.commonDates"
    :allowed-dates="props.allowedDates"
    :lang="props.lang"
    :type="props.type"
    :model-value="props.modelValue"
    :selected-date-string="selectedDateString"
    :strings="selectedLanguageStrings"
    @update:modelValue="emitSelectedRange"
  />
</template>
