<script setup lang="ts">
import { ref } from 'vue-demi';
import {
  AllowedDates, CalendarType, CommonDates, Lang, RangePickerSelectOutput,
} from '@lib/shared/types';
import RangePicker from '@lib/RangePicker/index.vue';
import RangePickerInputUI from '@lib/shared/components/PickerInput/index.vue';
import RangePickerInputPopOver from '@lib/shared/components/PickerInputPopOver.vue';
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
const emit = defineEmits<{(e: 'select', rangePickerSelectOutput: RangePickerSelectOutput): void;}>();

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
  <div class="RangePickerInput">
    <RangePickerInputUI
      :value="props.value"
      :text="props.strings.rangeText"
      @click="toggleIsOpen"
    />

    <RangePickerInputPopOver
      v-show="isOpen"
      class="RangePickerInput__input"
      v-bind="props"
      @select="setSelectedRangeAndEmit"
    >
      <RangePicker
        v-bind="props"
        @select="(rangeInfo) => emit('select', rangeInfo)"
      />
    </RangePickerInputPopOver>
  </div>
</template>

<style lang="scss">
.RangePickerInput {
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
