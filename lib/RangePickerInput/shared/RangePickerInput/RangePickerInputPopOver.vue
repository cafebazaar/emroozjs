<script setup lang="ts">
import RangePicker from '@lib/RangePicker/index.vue';
import {
  AllowedDates, CalendarType, CommonDates, Lang, RangePickerSelectOutput,
} from '@lib/shared/types';

// @todo: Import this from types
interface RangePickerProps {
  lang: Lang;
  commonDates: CommonDates;
  allowedDates: AllowedDates;
  type: CalendarType;
}

// @todo: Import this from types
interface Events {
  (e: 'select', rangePickerSelectOutput: RangePickerSelectOutput): void;
}

const emit = defineEmits<Events>();

const props = defineProps<RangePickerProps>();
</script>

<template>
  <div
    class="RangePickerInputPopOver"
  >
    <RangePicker
      v-bind="props"
      @select="(rangeInfo) => emit('select', rangeInfo)"
    />
  </div>
</template>

<style lang="scss">
.RangePickerInputPopOver {
  position: absolute;
  z-index: 100;

  transition-duration: 0.3s;
}
</style>
