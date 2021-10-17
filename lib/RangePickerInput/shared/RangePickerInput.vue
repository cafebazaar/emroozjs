<script setup lang="ts">
import { toRef } from 'vue-demi';
import {
  AllowedDates, CalendarType, CommonDates, Lang, RangePickerSelectOutput, RangePickerSelectInput,
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
  selectedRangeString: string;
  modelValue: RangePickerSelectInput;
  strings: RangePickerInputLanguageStrings;
}

// @todo: Import this from types
const emit = defineEmits<{(e: 'update:modelValue', rangePickerSelectOutput: RangePickerSelectOutput): void;}>();

const props = defineProps<RangePickerProps>();
const lang = toRef(props, 'lang');

function setSelectedRangeAndEmit(rangeInfo: RangePickerSelectOutput) {
  emit('update:modelValue', rangeInfo);
}

const direction = useDirection(lang);
</script>

<template>
  <PickerInput
    class="RangePickerInputUI"
    :direction="direction"
    :value="props.selectedRangeString"
    :text="props.strings.rangeText"
  >
    <template #default="{ close }">
      <RangePicker
        range-picker-class="RangePickerInputUI__range-picker"
        :common-dates="props.commonDates"
        :allowed-dates="props.allowedDates"
        :lang="props.lang"
        :type="props.type"
        :model-value="props.modelValue"
        @update:model-value="(rangeInfo)=>{
          setSelectedRangeAndEmit(rangeInfo);
          close();
        }"
      />
    </template>
  </PickerInput>
</template>

<style lang="scss">
.RangePickerInputUI {
  &__range-picker {
    @include mobile(){
      border-top-right-radius: $em-mobile-corners-border-radius!important;
      border-top-left-radius: $em-mobile-corners-border-radius!important;
    }
  }
}
</style>
