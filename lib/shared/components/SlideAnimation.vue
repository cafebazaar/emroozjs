<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  isInverted?: boolean;
  direction: 'rtl' | 'ltr';
}

const props = withDefaults(defineProps<Props>(), {
  isInverted: false,
});

const animationName = computed(() => {
  if (props.isInverted) {
    if (props.direction === 'rtl') return 'EMSlide-prev';
    return 'EMSlide';
  }
  if (props.direction === 'rtl') return 'EMSlide';
  return 'EMSlide-prev';
});
</script>

<template>
  <TransitionGroup
    :name="animationName"
    mode="out-in"
  >
    <slot />
  </TransitionGroup>
</template>

<style lang="scss">
.EMSlide {
  &-enter-from{
    opacity: 0;
    transform: translateX(-100%);
  }
  &-leave-active {
    transform: translateX(100%);
    opacity: 0;
  }
  &-leave-active {
    position: absolute;
    user-select: none;
    pointer-events: none;
  }
  &-enter-active {
    user-select: none;
    pointer-events: none;
  }

  &-prev {
    &-enter-from {
      opacity: 0;
      transform: translateX(100%);
    }
    &-leave-to {
      transform: translateX(-100%);
      opacity: 0;
    }

    &-leave-active {
      left: 0;
      position: absolute;
      user-select: none;
      pointer-events: none;
    }

    &-enter-active {
      user-select: none;
      pointer-events: none;
    }
  }
}
</style>
