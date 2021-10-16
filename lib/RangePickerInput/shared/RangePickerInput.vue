<script setup lang="ts">
import { toRefs } from 'vue-demi';
import {
  AllowedDates, CalendarType, CommonDates, Lang, RangePickerSelectOutput,
} from '@lib/shared/types';
import RangePicker from '@lib/RangePicker/index.vue';
import PickerInput from '@lib/shared/components/PickerInput/index.vue';
import { RangePickerInputLanguageStrings } from './types';

// @todo: Import this from types
interface RangePickerProps {
  lang: Lang;
  commonDates: CommonDates;
  allowedDates: AllowedDates;
  type: CalendarType;
  value: string;
  strings: RangePickerInputLanguageStrings;
}

// @todo: Import this from types
const emit = defineEmits<{(e: 'select', rangePickerSelectOutput: RangePickerSelectOutput): void;}>();

const props = defineProps<RangePickerProps>();

function setSelectedRangeAndEmit(rangeInfo: RangePickerSelectOutput) {
  emit('select', rangeInfo);
}
</script>

<template>
  <PickerInput
    :value="props.value"
    :text="props.strings.rangeText"
  >
    <RangePicker
      :common-dates="props.commonDates"
      :allowed-dates="props.allowedDates"
      :lang="props.lang"
      :type="props.type"
      @select="setSelectedRangeAndEmit"
    />
  </PickerInput>
</template>
