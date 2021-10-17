<script setup lang="ts">
import { ref, computed, watch } from 'vue-demi';
import SlideAnimation from '@lib/shared/components/SlideAnimation.vue';
import RangePickerSliderControllers from './RangePickerSliderControllers.vue';
import useCalendar from '../shared/hooks/useRangePicker';
import RangePickerSliderGridContainer from './RangePickerSliderGridContainer/index.vue';

const {
  date, direction, currentFirstSliderDate, setCurrentFirstSliderDate,
} = useCalendar();

const currentSecondDate = computed(() => date.getNextMonth(
  { year: currentFirstSliderDate.value.year, month: currentFirstSliderDate.value.month },
));

const isAnimationInverted = ref(false);

function incrementStartingMonth() {
  const { month, year } = date.getNextMonth({
    month: currentFirstSliderDate.value.month,
    year: currentFirstSliderDate.value.year,
  });

  setCurrentFirstSliderDate({
    year, month,
  });
}

function decreaseStartingMonth() {
  const { month, year } = date.getPrevMonth({
    month: currentFirstSliderDate.value.month,
    year: currentFirstSliderDate.value.year,
  });

  setCurrentFirstSliderDate({
    year, month,
  });
}

watch(currentFirstSliderDate, (old, newVal) => {
  if (date.compare([old.year, old.month, 1], [newVal.year, newVal.month, 1]) === -1) {
    isAnimationInverted.value = false;
  } else {
    isAnimationInverted.value = true;
  }
});
</script>

<template>
  <div class="RangePickerSlider">
    <header>
      <RangePickerSliderControllers
        :is-animation-inverted="isAnimationInverted"
        :first-month="currentFirstSliderDate.month"
        :first-year="currentFirstSliderDate.year"
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
          :key="`${currentFirstSliderDate.year}-${currentFirstSliderDate.month}`"
          :current-month="currentFirstSliderDate.month"
          :current-year="currentFirstSliderDate.year"
          class="RangePickerSlider__grid-item"
        />

        <RangePickerSliderGridContainer
          :key="`${currentSecondDate.year}-${currentSecondDate.month}`"
          :current-month="currentSecondDate.month"
          :current-year="currentSecondDate.year"
          class="RangePickerSlider__grid-item RangePickerSlider__grid-item--second"
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

  @include mobile(){
    box-sizing: border-box;
  }

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

    &--second {
      @include mobile(){
        display: none!important;
      }
    }
  }
}
</style>
