<script setup lang="ts">
import { computed, ref } from 'vue-demi';
import Button from '../shared/components/Button.vue';
import useCalendar from '../shared/hooks/useRangePicker';
import ArrowLeft from './icons/ArrowLeft.vue';
import ArrowRight from './icons/ArrowRight.vue';
import SlideAnimation from '../shared/components/SlideAnimation.vue';

const { strings, direction } = useCalendar();

const props = defineProps<{
  firstMonth: number;
  firstYear: number;
  secondMonth: number;
  secondYear: number;
}>();

const emit = defineEmits<{(e: 'next'): void; (e: 'prev'): void;}>();

const ArrowStart = computed(() => (direction.value === 'ltr' ? ArrowLeft : ArrowRight));
const ArrowEnd = computed(() => (direction.value === 'ltr' ? ArrowRight : ArrowLeft));

const isAnimationInverted = ref(false);

function next() {
  isAnimationInverted.value = false;
  emit('next');
}

function prev() {
  isAnimationInverted.value = true;
  emit('prev');
}
</script>
<template>
  <div class="RangePickerSliderControllers">
    <Button
      icon
      @click="prev"
    >
      <ArrowStart />
    </Button>
    <div class="RangePickerSliderControllers__month-wrapper">
      <SlideAnimation
        :is-inverted="isAnimationInverted"
      >
        <span
          :key="`${props.firstYear}-${props.firstMonth}`"
          class="RangePickerSliderControllers__month"
        >
          {{ strings.monthNames[props.firstMonth] }}
          {{ props.firstYear }}
        </span>

        <span
          :key="`${props.secondYear}-${props.secondMonth}`"
          class="RangePickerSliderControllers__month"
        >
          {{ strings.monthNames[props.secondMonth] }}
          {{ props.secondYear }}
        </span>
      </SlideAnimation>
    </div>
    <Button
      icon
      @click="next"
    >
      <ArrowEnd />
    </Button>
  </div>
</template>

<style lang="scss" scoped>
@import '../shared/styles/imports.scss';
.RangePickerSliderControllers {
  font-size: $cl-controllers-font-size;

  display: flex;
  align-items: center;

  &__month-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    position: relative;

    padding: 0 $cl-global-padding;
  }

  &__month {
    transition-duration: 0.5s;
    transition-property: transform, opacity;
    display: inline-block;
  }
}
</style>
