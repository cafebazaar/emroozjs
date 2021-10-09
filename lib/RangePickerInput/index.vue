<script setup lang="ts">
import { ref } from 'vue-demi';
import RangePickerInputUI from './RangePickerInputUI.vue';
import RangePickerInputPopOver from './RangePickerInputPopOver.vue';

const isOpen = ref(false);

function toggleIsOpen() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div
    class="EMRoot"
    lang="fa"
  >
    <div class="RangePickerInput">
      <RangePickerInputUI
        ref="inputRef"
        @click="toggleIsOpen"
      />

      <RangePickerInputPopOver
        v-show="isOpen"
        class="RangePickerInput__input"
      />
    </div>
  </div>
</template>

<style lang="scss">
.RangePickerInput {
  display: inline-block;
  position: relative;

  &__input {
    top: 100%;
    margin-top: math.div($em-global-margin, 2);
    right: 0;

    @include ltr {
      left: 0;
      right: auto;
    }
  }
}
</style>
