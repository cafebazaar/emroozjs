<script setup lang="ts">
import RangePicker from '@lib/RangePicker/index.vue';

</script>

<template>
  <div
    class="RangePickerInputPopOver"
  >
    <RangePicker />
  </div>
</template>

<style lang="scss">
.RangePickerInputPopOver {
  position: absolute;
  z-index: 100;

  transition-duration: 0.3s;
}
</style>
