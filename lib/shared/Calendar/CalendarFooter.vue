<script setup lang="ts">
import Button from './shared/components/Button.vue';
import useCalendar from './shared/hooks/useCalendar';

const { strings } = useCalendar();
</script>

<template>
  <div class="CalendarFooter">
    <span class="CalendarFooter__report">
      ۱۲ اردیبهشت تا ۲۳ اردیبهشت
    </span>

    <Button>
      {{ strings.action }}
    </Button>
  </div>
</template>

<style lang="scss" scoped>
@import './shared/styles/vars.scss';
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
