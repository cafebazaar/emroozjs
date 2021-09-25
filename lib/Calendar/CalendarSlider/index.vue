<script setup lang="ts">
import CalendarSliderControllers from './CalendarSliderControllers.vue';
import CalendarSliderContent from './CalendarSliderContent.vue';
</script>

<template>
  <div class="CalendarSlider">
    <header>
      <CalendarSliderControllers />
    </header>

    <CalendarSliderContent class="CalendarSlider__content" />
  </div>
</template>

<style lang="scss">
.CalendarSlider {
  display: flex;
  flex-direction: column;

  &__content {
    flex: 1;

    margin-top: 10px;
  }
}
</style>
