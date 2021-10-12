<script setup lang="ts">
import { computed } from 'vue-demi';
import {
  AllowedDates, CalendarType, CommonDates, Lang, RangePickerSelectOutput,
} from '@lib/shared/types';
import RangePickerInput from '../shared/RangePickerInput/index.vue';
import strings from '../shared/strings';

// @todo: Import this from types
interface RangePickerProps {
  lang: Lang;
  commonDates: CommonDates;
  allowedDates: AllowedDates;
  value: RangePickerSelectOutput | null;
  type: CalendarType;
}

interface Events {
  (e: 'select', rangeInfo: RangePickerSelectOutput): void;
}

const props = defineProps<RangePickerProps>();
const emit = defineEmits<Events>();

const selectedLanguageStrings = computed(() => strings[props.lang]);

function emitSelectedRange(rangeInfo: RangePickerSelectOutput) {
  emit('select', rangeInfo);
}

const convertRangeItemToString = (date: Date) => `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;

const selectedRangeString = computed(() => {
  if (!props.value) {
    return selectedLanguageStrings.value.notSpecified;
  }

  return `${convertRangeItemToString(props.value.from)}
  ${selectedLanguageStrings.value.to}
  ${convertRangeItemToString(props.value.to)}`;
});

</script>

<template>
  <RangePickerInput
    :common-dates="props.commonDates"
    :allowed-dates="props.allowedDates"
    :lang="props.lang"
    :type="props.type"
    :value="selectedRangeString"
    :strings="selectedLanguageStrings"
    @select="emitSelectedRange"
  />
</template>
