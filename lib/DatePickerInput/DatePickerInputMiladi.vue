<script setup lang="ts">
import { computed } from 'vue-demi';
import {
  AllowedDates, CalendarType, CommonDates, DatePickerSelectOutput, Lang,
} from '@lib/shared/types';
import DatePickerInput from './shared/DatePickerInput.vue';
import strings from './shared/strings';

// @todo: Import this from types
interface RangePickerProps {
  lang: Lang;
  commonDates: CommonDates;
  allowedDates: AllowedDates;
  value: DatePickerSelectOutput | null;
  type: CalendarType;
}

interface Events {
  (e: 'select', date: DatePickerSelectOutput): void;
}

const props = defineProps<RangePickerProps>();
const emit = defineEmits<Events>();

const selectedLanguageStrings = computed(() => strings[props.lang]);

function emitSelectedRange(date: DatePickerSelectOutput) {
  emit('select', date);
}

const convertRangeItemToString = (date: Date) => `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;

const selectedRangeString = computed(() => {
  if (!props.value) {
    return selectedLanguageStrings.value.notSpecified;
  }

  return convertRangeItemToString(props.value);
});

</script>

<template>
  <DatePickerInput
    :common-dates="props.commonDates"
    :allowed-dates="props.allowedDates"
    :lang="props.lang"
    :type="props.type"
    :value="selectedRangeString"
    :strings="selectedLanguageStrings"
    @select="emitSelectedRange"
  />
</template>
