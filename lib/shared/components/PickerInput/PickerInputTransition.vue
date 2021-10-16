<script setup lang="ts">
</script>

<template>
  <Transition name="em-slide-up-fade">
    <slot />
  </Transition>
</template>

<style lang="scss">
.em-slide-up-fade {
  &-enter-from{
    opacity: 0;
    transform: translateY(-20px);
  }
  &-leave-active {
    transform: translateY(-20px);
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
}
</style>
