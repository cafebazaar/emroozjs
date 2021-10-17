<script setup lang="ts">
import { computed } from 'vue-demi';
import {
  AllowedDates, CalendarType, CommonDates, Lang, RangePickerSelectOutput, RangePickerSelectInput,
} from '@lib/shared/types';
import RangePickerInput from './shared/RangePickerInput.vue';
import strings from './shared/strings';

// @todo: Import this from types
interface RangePickerProps {
  lang: Lang;
  commonDates: CommonDates;
  allowedDates: AllowedDates;
  modelValue: RangePickerSelectInput;
  type: CalendarType;
}

const props = defineProps<RangePickerProps>();
const emit = defineEmits<{(e: 'update:modelValue', rangeInfo: RangePickerSelectOutput): void;}>();

const selectedLanguageStrings = computed(() => strings[props.lang]);

function emitSelectedRange(rangeInfo: RangePickerSelectOutput) {
  emit('update:modelValue', rangeInfo);
}

const convertRangeItemToString = (date: Date) => `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;

const selectedRangeString = computed(() => {
  if (!props.modelValue) {
    return selectedLanguageStrings.value.notSpecified;
  }

  return `${convertRangeItemToString(props.modelValue.from)}
  ${selectedLanguageStrings.value.to}
  ${convertRangeItemToString(props.modelValue.to)}`;
});

</script>

<template>
  <RangePickerInput
    :common-dates="props.commonDates"
    :allowed-dates="props.allowedDates"
    :lang="props.lang"
    :type="props.type"
    :model-value="props.modelValue"
    :selected-range-string="selectedRangeString"
    :strings="selectedLanguageStrings"
    @update:modelValue="emitSelectedRange"
  />
</template>
