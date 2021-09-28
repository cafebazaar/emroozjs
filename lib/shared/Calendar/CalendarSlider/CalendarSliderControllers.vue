<script setup lang="ts">
import Button from '../shared/components/Button.vue';
import useCalendar from '../shared/hooks/useCalendar';
import ArrowLeft from './icons/ArrowLeft.vue';
import ArrowRight from './icons/ArrowRight.vue';

const { strings } = useCalendar();

const props = defineProps<{
  firstMonth: number;
  firstYear: number;
  secondMonth: number;
  secondYear: number;
}>();

const emit = defineEmits<{(e: 'next'): void; (e: 'prev'): void;}>();

</script>
<template>
  <div class="CalendarSliderControllers">
    <div>
      <Button
        icon
        @click="emit('prev')"
      >
        <ArrowRight />
      </Button>
      <span class="CalendarSliderControllers__month">
        {{ strings.monthNames[props.firstMonth] }}
        {{ props.firstYear }}
      </span>
    </div>
    <div>
      <span
        class="
          CalendarSliderControllers__month CalendarSliderControllers__month--reversed
        "
      >
        {{ strings.monthNames[props.secondMonth] }}
        {{ props.secondYear }}
      </span>
      <Button
        icon
        @click="emit('next')"
      >
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
