<template>
  <div
    class="PickerInputPopOver"
  >
    <slot />
  </div>
</template>

<style lang="scss">
.PickerInputPopOver {
  position: absolute;
  z-index: 100;

  transition-duration: 0.3s;
}
</style>
