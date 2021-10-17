<template>
  <TransitionGroup
    name="em-vertical-slide"
    mode="out-in"
  >
    <slot />
  </TransitionGroup>
</template>

<style lang="scss">
.em-vertical-slide {
  &-enter-from{
    opacity: 0;
    transform: translateY(-100%);
  }
  &-leave-active {
    transform: translateY(100%);
    opacity: 0;
  }
  &-leave-active {
    user-select: none;
    pointer-events: none;
  }
  &-enter-active {
    user-select: none;
    pointer-events: none;
  }
}
</style>
