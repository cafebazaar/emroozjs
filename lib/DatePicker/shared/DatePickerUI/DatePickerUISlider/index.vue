<script setup lang="ts">
import DatePickerUISliderControllers from './DatePickerUISliderControllers.vue';
import DatePickerUISliderGrid from './DatePickerUISliderGrid/index.vue';
</script>

<template>
  <div class="DatePickerUISlider">
    <DatePickerUISliderControllers />

    <DatePickerUISliderGrid
      class="DatePickerUISlider__grid"
      :header-names="[
        'ش',
        'ی',
        'د',
        'س',
        'چ',
        'پ',
        'ج',
      ]"
      :first-day-of-month="1"
      :last-day-of-month="4"
      :month-days="31"
      :current-month="6"
      :current-year="1400"
    />
  </div>
</template>

<style lang="scss">
.DatePickerUISlider {
  &__grid {
    margin-top: $em-global-margin;
    margin-bottom: $em-global-margin * 2;
  }
}
</style>
