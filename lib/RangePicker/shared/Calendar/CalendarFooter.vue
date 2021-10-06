<script setup lang="ts">
import { computed } from 'vue-demi';
import Button from './shared/components/Button.vue';
import useCalendar from './shared/hooks/useCalendar';

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
  <div class="CalendarFooter">
    <span class="CalendarFooter__report">
      {{ datePreviewString }}
    </span>

    <Button>
      {{ strings.action }}
    </Button>
  </div>
</template>

<style lang="scss" scoped>
@import './shared/styles/imports.scss';
.CalendarFooter {
  height: 54px;

  padding-top: 16px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &__report {
    color: $cl-footer-report-text-color;
    font-size: $cl-footer-font-size;
  }
}
</style>
