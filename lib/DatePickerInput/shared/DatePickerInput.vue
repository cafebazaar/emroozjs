<script setup lang="ts">
import { ref } from 'vue-demi';
import {
  AllowedDates, CalendarType, CommonDates, Lang, DatePickerSelectOutput,
} from '@lib/shared/types';
import DatePicker from '@lib/DatePicker/index.vue';
import PickerInputUI from '@lib/shared/components/PickerInput/index.vue';
import PickerInputPopOver from '@lib/shared/components/PickerInputPopOver.vue';
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

const isOpen = ref(false);

function toggleIsOpen() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="DatePickerInput">
    <PickerInputUI
      :value="props.value"
      :text="props.strings.dateText"
      @click="toggleIsOpen"
    />

    <PickerInputPopOver
      v-show="isOpen"
      class="RangePickerInput__input"
      v-bind="props"
    >
      <DatePicker
        v-bind="props"
        @select="(date) => emit('select', date)"
      />
    </PickerInputPopOver>
  </div>
</template>

<style lang="scss" scoped>
.DatePickerInput {
  width: 100%;

  display: inline-block;
  position: relative;

  &__input {
    top: 100%;
    margin-top: math.div($em-global-margin, 2);
    right: 0;

    @include ltr() {
      left: 0;
      right: auto;
    }
  }
}
</style>
