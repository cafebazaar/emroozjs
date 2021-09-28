<script setup lang="ts">
import CalendarSliderGrid from './CalendarSliderGrid.vue';

const props = defineProps<{
  currentFirstMonth: number;
  currentFirstYear: number;
  currentSecondMonth: number;
  currentSecondYear: number;
}>();
</script>

<template>
  <div class="CalendarSliderContent">
    <CalendarSliderGrid
      :current-month="props.currentFirstMonth"
      :current-year="props.currentFirstYear"
    />

    <CalendarSliderGrid
      :current-month="props.currentSecondMonth"
      :current-year="props.currentSecondYear"
    />
  </div>
</template>

<style lang="scss" scoped>
.CalendarSliderContent {
  display: flex;
  justify-content: space-between;
}
</style>
