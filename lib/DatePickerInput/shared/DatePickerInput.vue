<script setup lang="ts">
import { toRef } from 'vue-demi';
import {
  AllowedDates, CalendarType, CommonDates, Lang, DatePickerSelectOutput,
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
  value: string;
  strings: DatePickerInputLanguageStrings;
}

// @todo: Import this from types
const emit = defineEmits<{(e: 'select', date: DatePickerSelectOutput): void;}>();

const props = defineProps<DatePickerProps>();
const lang = toRef(props, 'lang');
const direction = useDirection(lang);
</script>

<template>
  <PickerInput
    :value="props.value"
    :text="props.strings.dateText"
    :direction="direction"
    class="DatePickerInputUI"
  >
    <template #default="{close}">
      <DatePicker
        :common-dates="props.commonDates"
        :allowed-dates="props.allowedDates"
        :lang="props.lang"
        :type="props.type"
        date-picker-class="DatePickerInputUI__date-picker"
        @select="(date)=>{
          emit('select', date);
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
