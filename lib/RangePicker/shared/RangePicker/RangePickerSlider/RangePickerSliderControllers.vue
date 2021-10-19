<script setup lang="ts">
import SlideAnimation from '@lib/shared/components/SlideAnimation.vue';
import StartingArrowButton from '@lib/shared/components/arrow-buttons/StartingArrowButton.vue';
import EndingArrowButton from '@lib/shared/components/arrow-buttons/EndingArrowButton.vue';
import useCalendar from '../shared/hooks/useRangePicker';

const { strings, direction } = useCalendar();

const props = defineProps<{
  firstMonth: number;
  firstYear: number;
  secondMonth: number;
  secondYear: number;
  isAnimationInverted: boolean;
}>();

const emit = defineEmits<{(e: 'next'): void; (e: 'prev'): void;}>();

function next() {
  emit('next');
}

function prev() {
  emit('prev');
}
</script>
<template>
  <div class="EMRangePickerSliderControllers">
    <StartingArrowButton
      :direction="direction"
      @click="prev"
    />
    <div class="EMRangePickerSliderControllers__month-wrapper">
      <SlideAnimation
        :direction="direction"
        :is-inverted="isAnimationInverted"
      >
        <span
          :key="`${props.firstYear}-${props.firstMonth}`"
          class="EMRangePickerSliderControllers__month"
        >
          {{ strings.monthNames[props.firstMonth] }}
          {{ props.firstYear }}
        </span>

        <span
          :key="`${props.secondYear}-${props.secondMonth}`"
          class="EMRangePickerSliderControllers__month"
        >
          {{ strings.monthNames[props.secondMonth] }}
          {{ props.secondYear }}
        </span>
      </SlideAnimation>
    </div>
    <EndingArrowButton
      :direction="direction"
      @click="next"
    />
  </div>
</template>

<style lang="scss" scoped>

.EMRangePickerSliderControllers {
  font-size: var(--em-controllers-font-size);

  display: flex;
  align-items: center;

  &__month-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    position: relative;

    padding: 0 var(--em-global-padding);
  }

  &__month {
    transition-duration: var(--em-transition-duration);
    transition-property: transform, opacity;
    display: inline-block;
  }
}
</style>
