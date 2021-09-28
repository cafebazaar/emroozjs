<script setup lang="ts">
import CalendarSliderGrid from './CalendarSliderGrid.vue';

</script>

<template>
  <div class="CalendarSliderContent">
    <CalendarSliderGrid />

    <CalendarSliderGrid />
  </div>
</template>

<style lang="scss" scoped>
.CalendarSliderContent {
  display: flex;
  justify-content: space-between;
}
</style>
