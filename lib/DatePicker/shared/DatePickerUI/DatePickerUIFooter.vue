<script setup lang="ts">
import { computed } from 'vue-demi';
import Button from '@lib/shared/components/Button.vue';
import useDatePicker from './shared/hooks/useDatePicker';

const { strings, selectedDate } = useDatePicker();

const datePreviewString = computed(() => {
  if (!selectedDate.value) return '';

  return `
    ${selectedDate.value[2]} ${strings.value.monthNames[selectedDate.value[1]]} ${selectedDate.value[0]}
    `;
});
</script>

<template>
  <div class="DatePickerUIFooter">
    <span class="DatePickerUIFooter__report">
      {{ datePreviewString }}
    </span>

    <Button>
      {{ strings.action }}
    </Button>
  </div>
</template>

<style lang="scss">
.DatePickerUIFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: $em-global-padding * 1.6;

  &__report {
    color: $em-footer-report-text-color;
    font-size: $em-footer-font-size;
  }
}
</style>
