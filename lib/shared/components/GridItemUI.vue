<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
  isHeader?: boolean;
  isActiveStart?: boolean;
  isActiveEnd?: boolean;
  isMiddle?: boolean;
  isToday?: boolean;
  isEmpty?: boolean;
  isDisabled?: boolean;
  isEdge?: boolean;
  isClosed?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isHeader: false,
  isActiveStart: false,
  isActiveEnd: false,
  isMiddle: false,
  isToday: false,
  isEmpty: false,
  isDisabled: false,
  isEdge: false,
  isClosed: false,
});

const emit = defineEmits<{(e: 'click'): void;
}>();

const {
  isHeader,
  isActiveStart,
  isActiveEnd,
  isMiddle,
  isToday,
  isEmpty,
  isDisabled,
  isEdge,
  isClosed,
} = toRefs(props);
</script>

<template>
  <div
    class="GridItemUI"
    :class="{
      'GridItemUI--header': isHeader,
      'GridItemUI--empty': isEmpty,
      'GridItemUI--active': isMiddle,
      'GridItemUI--active-start': isActiveStart,
      'GridItemUI--active-end': isActiveEnd,
      'GridItemUI--disabled': isDisabled,
      'GridItemUI--today': isToday,
      'GridItemUI--closed': isClosed,
    }"
    @click="emit('click')"
  >
    <span
      class="GridItemUI__inner"
      :class="{
        'GridItemUI__inner--active': isEdge,
      }"
    >
      <slot />
    </span>
  </div>
</template>

<style lang="scss" scoped>

.GridItemUI {
  transition-duration: var(--em-grid-transition-duration);

  width: 27px;
  height: 20px;

  @include mobile(){
    width: calc(100% / 7);
    height: 40px;
  }

  cursor: pointer;
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: var(--em-grid-item-font-size);
  color: var(--em-text-color);

  margin: 4px 0;

  &--header {
    color: var(--em-grid-header-color);
    cursor: default;
  }

  &--empty {
    cursor: default;
  }

  &--closed {
    color: var(--em-grid-closed-color);
  }

  &--disabled {
    cursor: not-allowed;
    color: var(--em-grid-disabled-color);
  }

  &--active {
    background: var(--em-grid-active-background-color);

    &-start {
      background:
        linear-gradient(
          to left,
          transparent 0%,
          transparent 50%,
          var(--em-grid-active-background-color) 50%,
          var(--em-grid-active-background-color) 100%
        );
      @include ltr {
        background:
          linear-gradient(
            to right,
            transparent 0%,
            transparent 50%,
            var(--em-grid-active-background-color) 50%,
            var(--em-grid-active-background-color) 100%
        );
      }
    }
    &-end {
      background:
        linear-gradient(
          to right,
          transparent 0%,
          transparent 50%,
          var(--em-grid-active-background-color) 50%,
          var(--em-grid-active-background-color) 100%
        );
      @include ltr {
        background:
          linear-gradient(
            to left,
            transparent 0%,
            transparent 50%,
            var(--em-grid-active-background-color) 50%,
            var(--em-grid-active-background-color) 100%
          );
      }
    }
  }

  &--today:not(&--active):not(&--disabled) {
    color: var(--em-grid-hover-color);
  }

  &:not(&--header):not(&--active):not(&--disabled) {
    &:hover {
      color: var(--em-grid-hover-color);
    }
  }

  &__inner {
    transition-duration: var(--em-grid-transition-duration);

    border-radius: 50%;

    width: 20px;
    height: 20px;
    @include mobile(){
      width: 40px;
      height: 100%;
    }

    display: flex;
    align-items: center;
    justify-content: center;

    &--active {
      background-color: var(--em-grid-active-color);
      color: var(--em-grid-active-text-color);
    }
  }
}
</style>
