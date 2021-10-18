<script setup lang="ts">
import { toRef } from 'vue';
import {
  AllowedDates, CalendarType, CommonDates, Lang, DatePickerSelectOutput, DatePickerSelectInput,
} from '@lib/shared/types';
import DatePicker from '@lib/DatePicker/index.vue';
import PickerInput from '@lib/shared/components/PickerInput/index.vue';
import useDirection from '@lib/shared/hooks/useDirection';
import { DatePickerInputLanguageStrings } from './types';

// @todo: Import this from types
interface DatePickerProps {
  lang: Lang;
  commonDates: CommonDates;
  allowedDates: AllowedDates;
  type: CalendarType;
  selectedDateString: string;
  strings: DatePickerInputLanguageStrings;
  modelValue: DatePickerSelectInput;
}

// @todo: Import this from types
const emit = defineEmits<{(e: 'update:modelValue', date: DatePickerSelectOutput): void;}>();

const props = defineProps<DatePickerProps>();
const lang = toRef(props, 'lang');
const direction = useDirection(lang);
</script>

<template>
  <PickerInput
    :value="props.selectedDateString"
    :text="props.strings.dateText"
    :direction="direction"
    class="DatePickerInputUI"
  >
    <template #default="{close}">
      <DatePicker
        :model-value="props.modelValue"
        :common-dates="props.commonDates"
        :allowed-dates="props.allowedDates"
        :lang="props.lang"
        :type="props.type"
        date-picker-class="DatePickerInputUI__date-picker"
        @update:model-value="(date)=>{
          emit('update:modelValue', date);
          close();
        }"
      />
    </template>
  </PickerInput>
</template>

<style lang="scss">
.DatePickerInputUI {
  &__date-picker {
    @include mobile(){
      border-top-right-radius: $em-mobile-corners-border-radius!important;
      border-top-left-radius: $em-mobile-corners-border-radius!important;
    }
  }
}
</style>
