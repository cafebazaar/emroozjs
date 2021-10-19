<script setup lang="ts">
import { ref } from 'vue';
import SlideAnimation from '@lib/shared/components/SlideAnimation.vue';
import useDatePicker from '../shared/hooks/useDatePicker';
import DatePickerUISliderControllers from './DatePickerUISliderControllers.vue';
import DatePickerUISliderGridContainer from './DatePickerUISliderGridContainer/index.vue';

const {
  currentDate, date, direction,
} = useDatePicker();

const currentDateSlide = ref({
  year: currentDate.value[0],
  month: currentDate.value[1],
});

const isAnimationInverted = ref(false);

function nextMonth() {
  const { month, year } = date.getNextMonth({
    month: currentDateSlide.value.month,
    year: currentDateSlide.value.year,
  });

  isAnimationInverted.value = false;

  currentDateSlide.value = {
    year,
    month,
  };
}

function prevMonth() {
  const { month, year } = date.getPrevMonth({
    month: currentDateSlide.value.month,
    year: currentDateSlide.value.year,
  });

  isAnimationInverted.value = true;

  currentDateSlide.value = {
    year,
    month,
  };
}
</script>

<template>
  <div class="EMDatePickerUISlider">
    <DatePickerUISliderControllers
      :current-month="currentDateSlide.month"
      :current-year="currentDateSlide.year"
      @next="nextMonth"
      @prev="prevMonth"
    />

    <div class="EMDatePickerUISlider__content">
      <SlideAnimation
        :is-inverted="isAnimationInverted"
        :direction="direction"
      >
        <DatePickerUISliderGridContainer
          :key="`${currentDateSlide.year}-${currentDateSlide.month}`"
          :current-month="currentDateSlide.month"
          :current-year="currentDateSlide.year"
          class="EMDatePickerUISlider__grid"
        />
      </SlideAnimation>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.EMDatePickerUISlider {
  overflow: hidden;

  &__content {
    position: relative;
  }

  &__grid {
    box-sizing: border-box;
    margin-top: var(--em-global-margin);
    margin-bottom: calc(var(--em-global-margin) * 2);

    transition-duration: var(--em-transition-duration);
    transition-property: transform, opacity;

    height: 100%;
  }
}
</style>
