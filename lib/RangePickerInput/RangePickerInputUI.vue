<script setup lang="ts">
import ArrowDownIcon from './ArrowDownIcon.vue';

interface Events {
  (e: 'click'): void;
}

const emit = defineEmits<Events>();
</script>

<template>
  <div
    class="RangePickerInputUI"
    @click="emit('click')"
  >
    <span class="RangePickerInputUI__text">
      بازه زمانی:
    </span>
    <input
      class="RangePickerInputUI__input"
      readonly
      value="18 مهر 1400 تا 26 مهر 1400"
    >
    <ArrowDownIcon />
  </div>
</template>

<style lang="scss">
.RangePickerInputUI {
  background-color: $em-white;
  display: inline-flex;
  align-items: center;

  padding: $em-global-padding $em-global-padding * 1.6;
  border: $em-border;
  border-radius: $em-border-radius;

  cursor: pointer;

  direction: rtl;
  @include ltr {
    direction: ltr;
  }

  &__text {
    color: $em-gray-color;
    margin-left: math.div($em-global-padding, 2);
  }

  &__input {
    border: none;
    outline: none;
    cursor: pointer;

    font-family: inherit;
  }

  &__icon {
    color: $em-dark-gray;
  }
}
</style>
