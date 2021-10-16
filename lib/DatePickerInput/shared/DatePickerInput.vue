<script setup lang="ts">
import {
  AllowedDates, CalendarType, CommonDates, Lang, DatePickerSelectOutput,
} from '@lib/shared/types';
import DatePicker from '@lib/DatePicker/index.vue';
import PickerInput from '@lib/shared/components/PickerInput/index.vue';
import { DatePickerInputLanguageStrings } from './types';

// @todo: Import this from types
interface DatePickerProps {
  lang: Lang;
  commonDates: CommonDates;
  allowedDates: AllowedDates;
  type: CalendarType;
  value: string;
  strings: DatePickerInputLanguageStrings;
}

// @todo: Import this from types
const emit = defineEmits<{(e: 'select', date: DatePickerSelectOutput): void;}>();

const props = defineProps<DatePickerProps>();
</script>

<template>
  <PickerInput
    :value="props.value"
    :text="props.strings.dateText"
  >
    <DatePicker
      :common-dates="props.commonDates"
      :allowed-dates="props.allowedDates"
      :lang="props.lang"
      :type="props.type"
      @select="(date) => emit('select', date)"
    />
  </PickerInput>
</template>
