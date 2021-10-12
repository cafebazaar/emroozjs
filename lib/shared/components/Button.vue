<script setup lang="ts">
import { toRef } from 'vue-demi';

interface Props {
  icon?: boolean;
  disabled?: boolean;
}

interface Events {
  (e: 'click'): void;
}

const props = withDefaults(defineProps<Props>(), {
  icon: false,
  disabled: false,
});

const emit = defineEmits<Events>();

const icon = toRef(props, 'icon');
const disabled = toRef(props, 'disabled');

function checkAndEmitClick() {
  if (!disabled.value) {
    emit('click');
  }
}
</script>

<template>
  <button
    class="Button"
    :class="{
      'Button--icon': icon,
      'Button--disabled': disabled
    }"
    @click="checkAndEmitClick"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>

  .Button {
    background-color: $em-button-background-color;
    border-radius: $em-button-border-radius;
    color: $em-button-color;

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
      background-color: $em-button-disabled-background-color;
      color: $em-button-disabled-color;
      cursor: not-allowed;
    }
  }
</style>
