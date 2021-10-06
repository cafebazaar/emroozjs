<script setup lang="ts">
import StartingArrowButton from '@lib/shared/components/arrow-buttons/StartingArrowButton.vue';
import EndingArrowButton from '@lib/shared/components/arrow-buttons/EndingArrowButton.vue';
</script>

<template>
  <div class="DatePickerUISliderControllers">
    <StartingArrowButton direction="rtl" />

    <span class="DatePickerUISliderControllers__month">
      شهریور 1400
    </span>

    <EndingArrowButton direction="rtl" />
  </div>
</template>

<style lang="scss">
.DatePickerUISliderControllers {
  display: flex;
  align-items: center;

  font-size: $em-controllers-font-size;

  &__month {
    flex: 1;
    text-align: center;
  }
}
</style>
