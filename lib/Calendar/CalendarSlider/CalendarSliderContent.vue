<script setup lang="ts">
import CalendarGrid from '@lib/shared/components/CalendarGrid.vue';

</script>

<template>
  <div class="CalendarSliderContent">
    <CalendarGrid />

    <CalendarGrid />
  </div>
</template>

<style lang="scss" scoped>
.CalendarSliderContent {
  display: flex;
  justify-content: space-between;
}
</style>
