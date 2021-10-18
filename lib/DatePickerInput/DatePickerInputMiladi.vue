<script setup lang="ts">
import { computed } from 'vue';
import {
  AllowedDates, CalendarType, CommonDates, DatePickerSelectOutput, DatePickerSelectInput, Lang,
} from '@lib/shared/types';
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

const convertRangeItemToString = (date: Date) => `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;

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
    :selected-date-string="selectedDateString"
    :model-value="props.modelValue"
    :strings="selectedLanguageStrings"
    @update:modelValue="emitSelectedRange"
  />
</template>
