<script setup lang="ts">
import {
  ref, computed, watch, onMounted, onBeforeUnmount,
} from 'vue';
import SlideAnimation from '@lib/shared/components/SlideAnimation.vue';
import { MOBILE_WIDTH_VIEWPORT } from '@config/UI';
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

const isMobile = ref(false);

function detectMobile(mqEvent: MediaQueryListEvent): undefined {
  if (mqEvent.matches) {
    isMobile.value = true;
    return;
  }
  isMobile.value = false;
}

onMounted(() => {
  const mql = window.matchMedia(`(max-width: ${MOBILE_WIDTH_VIEWPORT})`);

  mql.addEventListener('change', detectMobile);

  isMobile.value = mql.matches;
});
</script>

<template>
  <div class="EMRangePickerSlider">
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

    <div class="EMRangePickerSlider__content">
      <SlideAnimation
        :is-inverted="isAnimationInverted"
        :direction="direction"
      >
        <div
          :key="`${currentFirstSliderDate.year}-${currentFirstSliderDate.month}`"
          class="EMRangePickerSlider__grid-item"
        >
          <RangePickerSliderGridContainer
            :current-month="currentFirstSliderDate.month"
            :current-year="currentFirstSliderDate.year"
          />
        </div>

        <div
          v-if="!isMobile"
          :key="`${currentSecondDate.year}-${currentSecondDate.month}`"
          class="EMRangePickerSlider__grid-item"
        >
          <RangePickerSliderGridContainer
            :current-month="currentSecondDate.month"
            :current-year="currentSecondDate.year"
          />
        </div>
      </SlideAnimation>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.EMRangePickerSlider {
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
    transition-duration: var(--em-transition-duration);
    transition-property: transform, opacity;
    display: inline-block;

    height: 100%;
  }
}
</style>
