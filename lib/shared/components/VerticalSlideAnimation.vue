<template>
  <TransitionGroup
    name="EMVerticalSlide"
    mode="out-in"
  >
    <slot />
  </TransitionGroup>
</template>

<style lang="scss">
.EMVerticalSlide {
  &-enter-from{
    opacity: 0;
    transform: translateY(-100%);
  }
  &-leave-to {
    transform: translateY(100%);
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
