<script setup lang="ts">
import { toRef } from 'vue';

interface Props {
  icon?: boolean;
  disabled?: boolean;
  plain?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  icon: false,
  disabled: false,
});

const emit = defineEmits<{(e: 'click'): void;}>();

const icon = toRef(props, 'icon');
const disabled = toRef(props, 'disabled');
const plain = toRef(props, 'plain');

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
      'Button--disabled': disabled,
      'Button--plain': plain
    }"
    @click="checkAndEmitClick"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>

  .Button {
    background-color: var(--em-button-background-color);
    border-radius: var(--em-button-border-radius);
    color: var(--em-button-color);

    transition-duration: var(--em-button-transition-duration);

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
      background-color: var(--em-button-disabled-background-color);
      color: var(--em-button-disabled-color);
      cursor: not-allowed;
    }

    &--plain {
      background-color: transparent;
      color: var(--em-button-plain-color);
      padding: 0;

      &:hover {
        color: var(--em-button-plain-hover-color);
      }
    }
  }
</style>
