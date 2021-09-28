<script setup lang="ts">
import Button from '../shared/components/Button.vue';
import ArrowLeft from './icons/ArrowLeft.vue';
import ArrowRight from './icons/ArrowRight.vue';
</script>
<template>
  <div class="CalendarSliderControllers">
    <div>
      <Button
        disabled
        icon
      >
        <ArrowRight />
      </Button>
      <span class="CalendarSliderControllers__month">
        اردیبهشت
      </span>
    </div>
    <div>
      <span
        class="
          CalendarSliderControllers__month CalendarSliderControllers__month--reversed
        "
      >
        خرداد
      </span>
      <Button icon>
        <ArrowLeft />
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../shared/styles/vars.scss';
  .CalendarSliderControllers {
    font-size: $cl-controllers-font-size;

    display: flex;
    justify-content: space-between;

    &__month {
      $month-margin: 20px;
      margin-right: $month-margin;

      &--reversed {
        margin-right: 0;
        margin-left: $month-margin;
      }
    }
  }
</style>
