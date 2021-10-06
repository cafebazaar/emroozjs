<script setup lang="ts">
import { toRef } from 'vue-demi';

interface Props {
  icon?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  icon: false,
  disabled: false,
});

const icon = toRef(props, 'icon');
const disabled = toRef(props, 'disabled');
</script>

<template>
  <button
    class="Button"
    :class="{
      'Button--icon': icon,
      'Button--disabled': disabled
    }"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  @import '../styles/imports.scss';
  .Button {
    background-color: $cl-button-background-color;
    border-radius: $cl-button-border-radius;
    color: $cl-button-color;

    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    border: 0;
    padding: 8px 16px;

    &--icon {
      padding: 6px 18px;
    }

    &--disabled {
      background-color: $cl-button-disabled-background-color;
      color: $cl-button-disabled-color;
      cursor: not-allowed;
    }
  }
</style>
