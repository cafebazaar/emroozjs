<script setup lang="ts">
import { computed } from 'vue';
import Button from '@lib/shared/components/Button.vue';
import VerticalSlideAnimation from '@lib/shared/components/VerticalSlideAnimation.vue';
import useDatePicker from './shared/hooks/useDatePicker';
import useDateHelpers from './shared/hooks/useDateHelpers';

const {
  strings, selectedDate, selectDate,
} = useDatePicker();
const { isDateSelected } = useDateHelpers();

const datePreviewString = computed(() => {
  if (!selectedDate.value) return '';

  return `
    ${selectedDate.value[2]} ${strings.value.monthNames[selectedDate.value[1]]} ${selectedDate.value[0]}
    `;
});
</script>

<template>
  <div class="DatePickerUIFooter">
    <VerticalSlideAnimation>
      <span
        :key="datePreviewString"
        class="DatePickerUIFooter__report"
      >
        {{ datePreviewString }}
      </span>
    </VerticalSlideAnimation>

    <Button
      class="DatePickerUIFooter__action"
      :disabled="!isDateSelected"
      @click="selectDate"
    >
      {{ strings.action }}
    </Button>
  </div>
</template>

<style lang="scss">
.DatePickerUIFooter {
  display: flex;
  align-items: center;

  padding-top: calc(var(--em-global-padding) * 1.6);

  &__report {
    color: var(--em-footer-report-text-color);
    font-size: var(--em-footer-font-size);

    transition-duration: var(--em-transition-duration);
  }

  &__action {
    @include startMargin(auto);
  }
}
</style>
