<script setup lang="ts">
import { ref, computed } from 'vue-demi';
import CalendarSliderControllers from './CalendarSliderControllers.vue';
import useCalendar from '../shared/hooks/useCalendar';
import CalendarSliderGridContainer from './CalendarSliderGridContainer/index.vue';

const { currentDate, date } = useCalendar();

const currentFirstDate = ref({
  year: currentDate.value[0],
  month: currentDate.value[1],
});

const currentSecondDate = computed(() => date.getNextMonth(
  { year: currentFirstDate.value.year, month: currentFirstDate.value.month },
));

function incrementStartingMonth() {
  const { month, year } = date.getNextMonth({
    month: currentFirstDate.value.month,
    year: currentFirstDate.value.year,
  });
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
  currentFirstDate.value = {
    year,
    month,
  };
}
</script>

<template>
  <div class="CalendarSlider">
    <header>
      <CalendarSliderControllers
        :first-month="currentFirstDate.month"
        :first-year="currentFirstDate.year"
        :second-month="currentSecondDate.month"
        :second-year="currentSecondDate.year"
        @prev="decreaseStartingMonth"
        @next="incrementStartingMonth"
      />
    </header>

    <div class="CalendarSlider__content">
      <CalendarSliderGridContainer
        :current-month="currentFirstDate.month"
        :current-year="currentFirstDate.year"
      />

      <CalendarSliderGridContainer
        :current-month="currentSecondDate.month"
        :current-year="currentSecondDate.year"
      />
    </div>
  </div>
</template>

<style lang="scss">
.CalendarSlider {
  display: flex;
  flex-direction: column;

  &__content {
    flex: 1;

    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
