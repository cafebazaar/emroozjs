<script setup lang="ts">
import { computed, watch } from 'vue-demi';
import Button from '../shared/components/Button.vue';
import useCalendar from '../shared/hooks/useCalendar';
import ArrowLeft from './icons/ArrowLeft.vue';
import ArrowRight from './icons/ArrowRight.vue';

const { strings, lang } = useCalendar();

const props = defineProps<{
  firstMonth: number;
  firstYear: number;
  secondMonth: number;
  secondYear: number;
}>();

const emit = defineEmits<{(e: 'next'): void; (e: 'prev'): void;}>();

const ArrowStart = computed(() => (lang.value === 'en' ? ArrowLeft : ArrowRight));
const ArrowEnd = computed(() => (lang.value === 'en' ? ArrowRight : ArrowLeft));
</script>
<template>
  <div class="CalendarSliderControllers">
    <div>
      <Button
        icon
        @click="emit('prev')"
      >
        <ArrowStart />
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
        <ArrowEnd />
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../shared/styles/imports.scss';
  .CalendarSliderControllers {
    font-size: $cl-controllers-font-size;

    display: flex;
    justify-content: space-between;

    &__month {
      $month-margin: 2;
      @include startMargin($month-margin);

      &--reversed {
        margin-right: 0;
        @include endMargin($month-margin);
      }
    }
  }
</style>
