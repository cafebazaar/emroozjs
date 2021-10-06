<script setup lang="ts">
import DatePickerUISlider from './DatePickerUISlider/index.vue';
import DatePickerUIFooter from './DatePickerUIFooter.vue';
</script>

<template>
  <div class="DatePickerUI">
    <DatePickerUISlider />

    <DatePickerUIFooter class="DatePickerUI__footer" />
  </div>
</template>

<style lang="scss">
.DatePickerUI {
  direction: rtl;
  @include ltr {
    direction: ltr;
  }

  padding: $em-global-padding * 1.6 $em-global-padding * 2.4;
  background-color: $em-background-color;
  border-radius: $em-border-radius;
  border: $em-border;

  width: 240px;

  box-sizing: border-box;

  &__footer {
    border-top: $em-footer-border-top;
  }
}
</style>
