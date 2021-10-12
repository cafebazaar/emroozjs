<script setup lang="ts">
import { ref } from 'vue-demi';
import {
  AllowedDates, CalendarType, CommonDates, Lang, RangePickerSelectOutput,
} from '@lib/shared/types';
import RangePickerInputUI from './RangePickerInputUI.vue';
import RangePickerInputPopOver from './RangePickerInputPopOver.vue';
import { RangePickerInputLanguageStrings } from '../types';

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
interface Events {
  (e: 'select', rangePickerSelectOutput: RangePickerSelectOutput): void;
}

const emit = defineEmits<Events>();

const props = defineProps<RangePickerProps>();

const isOpen = ref(false);

function toggleIsOpen() {
  isOpen.value = !isOpen.value;
}

function setSelectedRangeAndEmit(rangeInfo: RangePickerSelectOutput) {
  emit('select', rangeInfo);
}
</script>

<template>
  <div
    class="EMRoot"
    :lang="props.lang"
  >
    <div class="RangePickerInput">
      <RangePickerInputUI
        :value="props.value"
        :strings="props.strings"
        @click="toggleIsOpen"
      />

      <RangePickerInputPopOver
        v-show="isOpen"
        class="RangePickerInput__input"
        v-bind="props"
        @select="setSelectedRangeAndEmit"
      />
    </div>
  </div>
</template>

<style lang="scss">
.RangePickerInput {
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
