<script setup lang="ts">
import { toRef } from 'vue-demi';
import {
  AllowedDates, CalendarType, CommonDates, Lang, RangePickerSelectOutput,
} from '@lib/shared/types';
import RangePicker from '@lib/RangePicker/index.vue';
import PickerInput from '@lib/shared/components/PickerInput/index.vue';
import useDirection from '@lib/shared/hooks/useDirection';
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
const lang = toRef(props, 'lang');

function setSelectedRangeAndEmit(rangeInfo: RangePickerSelectOutput) {
  emit('select', rangeInfo);
}

const direction = useDirection(lang);
</script>

<template>
  <PickerInput
    :direction="direction"
    :value="props.value"
    :text="props.strings.rangeText"
  >
    <template #default="{ close }">
      <RangePicker
        :common-dates="props.commonDates"
        :allowed-dates="props.allowedDates"
        :lang="props.lang"
        :type="props.type"
        @select="(rangeInfo)=>{
          setSelectedRangeAndEmit(rangeInfo);
          close();
        }"
      />
    </template>
  </PickerInput>
</template>
