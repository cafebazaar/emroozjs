<script setup lang="ts">
import { computed } from 'vue-demi';
import Button from '@lib/shared/components/Button.vue';
import useCalendar from './shared/hooks/useRangePicker';

const { strings, fromDate, toDate } = useCalendar();

const datePreviewString = computed(() => {
  if (!fromDate.value || !toDate.value) return '';

  return `
    ${fromDate.value[2]} ${strings.value.monthNames[fromDate.value[1]]} ${toDate.value[0]}
    ${strings.value.to}
    ${toDate.value[2]} ${strings.value.monthNames[toDate.value[1]]} ${toDate.value[0]}
    `;
});
</script>

<template>
  <div class="RangePickerFooter">
    <span class="RangePickerFooter__report">
      {{ datePreviewString }}
    </span>

    <Button>
      {{ strings.action }}
    </Button>
  </div>
</template>

<style lang="scss" scoped>
.RangePickerFooter {
  height: 54px;

  padding-top: 16px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &__report {
    color: $em-range-picker-footer-report-text-color;
    font-size: $em-range-picker-footer-font-size;
  }
}
</style>
