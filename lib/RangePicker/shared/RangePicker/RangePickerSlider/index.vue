<script setup lang="ts">
import { ref, computed } from 'vue-demi';
import SlideAnimation from '@lib/shared/components/SlideAnimation.vue';
import RangePickerSliderControllers from './RangePickerSliderControllers.vue';
import useCalendar from '../shared/hooks/useRangePicker';
import RangePickerSliderGridContainer from './RangePickerSliderGridContainer/index.vue';

const { currentDate, date, direction } = useCalendar();

const currentFirstDate = ref({
  year: currentDate.value[0],
  month: currentDate.value[1],
});

const currentSecondDate = computed(() => date.getNextMonth(
  { year: currentFirstDate.value.year, month: currentFirstDate.value.month },
));

const isAnimationInverted = ref(false);

function incrementStartingMonth() {
  const { month, year } = date.getNextMonth({
    month: currentFirstDate.value.month,
    year: currentFirstDate.value.year,
  });

  isAnimationInverted.value = false;

  currentFirstDate.value = {
    year,
    month,
  };
}

function decreaseStartingMonth() {
  const { month, year } = date.getPrevMonth({
    month: currentFirstDate.value.month,
    year: currentFirstDate.value.year,
  });

  isAnimationInverted.value = true;

  currentFirstDate.value = {
    year,
    month,
  };
}
</script>

<template>
  <div class="RangePickerSlider">
    <header>
      <RangePickerSliderControllers
        :first-month="currentFirstDate.month"
        :first-year="currentFirstDate.year"
        :second-month="currentSecondDate.month"
        :second-year="currentSecondDate.year"
        @prev="decreaseStartingMonth"
        @next="incrementStartingMonth"
      />
    </header>

    <div class="RangePickerSlider__content">
      <SlideAnimation
        :is-inverted="isAnimationInverted"
        :direction="direction"
      >
        <RangePickerSliderGridContainer
          :key="`${currentFirstDate.year}-${currentFirstDate.month}`"
          :current-month="currentFirstDate.month"
          :current-year="currentFirstDate.year"
          class="RangePickerSlider__grid-item"
        />

        <RangePickerSliderGridContainer
          :key="`${currentSecondDate.year}-${currentSecondDate.month}`"
          :current-month="currentSecondDate.month"
          :current-year="currentSecondDate.year"
          class="RangePickerSlider__grid-item"
        />
      </SlideAnimation>
    </div>
  </div>
</template>

<style lang="scss">
.RangePickerSlider {
  display: flex;
  flex-direction: column;

  overflow: hidden;

  &__content {
    position: relative;

    flex: 1;

    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  &__grid-item {
    transition-duration: $em-transition-duration;
    transition-property: transform, opacity;
    display: inline-block;

    height: 100%;
  }
}
</style>
