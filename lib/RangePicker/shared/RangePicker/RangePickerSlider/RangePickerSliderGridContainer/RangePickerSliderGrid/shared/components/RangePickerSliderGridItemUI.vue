<script setup lang="ts">
import { toRefs } from 'vue-demi';

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

interface Events {
  (e: 'click'): void;
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

const emit = defineEmits<Events>();

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
    class="RangePickerSliderGridItemUI"
    :class="{
      'RangePickerSliderGridItemUI--header': isHeader,
      'RangePickerSliderGridItemUI--empty': isEmpty,
      'RangePickerSliderGridItemUI--active': isMiddle,
      'RangePickerSliderGridItemUI--active-start': isActiveStart,
      'RangePickerSliderGridItemUI--active-end': isActiveEnd,
      'RangePickerSliderGridItemUI--disabled': isDisabled,
      'RangePickerSliderGridItemUI--today': isToday,
      'RangePickerSliderGridItemUI--closed': isClosed,
    }"
    @click="emit('click')"
  >
    <span
      class="RangePickerSliderGridItemUI__inner"
      :class="{
        'RangePickerSliderGridItemUI__inner--active': isEdge,
      }"
    >
      <slot />
    </span>
  </div>
</template>

<style lang="scss" scoped>

.RangePickerSliderGridItemUI {
  transition-duration: $em-range-picker-grid-transition-duration;

  width: 27px;
  height: 20px;

  cursor: pointer;
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: $em-range-picker-grid-item-font-size;
  color: $em-text-color;

  margin: 4px 0;

  &--header {
    color: $em-range-picker-grid-header-color;
    cursor: default;
  }

  &--empty {
    cursor: default;
  }

  &--closed {
    color: $em-range-picker-grid-closed-color;
  }

  &--disabled {
    cursor: not-allowed;
    color: $em-range-picker-grid-disabled-color;
  }

  &--active {
    background: $em-range-picker-grid-active-background-color;

    &-start {
      background:
        linear-gradient(
          to left,
          transparent 0%,
          transparent 50%,
          $em-range-picker-grid-active-background-color 50%,
          $em-range-picker-grid-active-background-color 100%
        );
      @include ltr {
        background:
          linear-gradient(
            to right,
            transparent 0%,
            transparent 50%,
            $em-range-picker-grid-active-background-color 50%,
            $em-range-picker-grid-active-background-color 100%
        );
      }
    }
    &-end {
      background:
        linear-gradient(
          to right,
          transparent 0%,
          transparent 50%,
          $em-range-picker-grid-active-background-color 50%,
          $em-range-picker-grid-active-background-color 100%
        );
      @include ltr {
        background:
          linear-gradient(
            to left,
            transparent 0%,
            transparent 50%,
            $em-range-picker-grid-active-background-color 50%,
            $em-range-picker-grid-active-background-color 100%
          );
      }
    }
  }

  &--today:not(&--active):not(&--disabled) {
    color: $em-range-picker-grid-hover-color;
  }

  &:not(&--header):not(&--active):not(&--disabled) {
    &:hover {
      color: $em-range-picker-grid-hover-color;
    }
  }

  &__inner {
    transition-duration: $em-range-picker-grid-transition-duration;

    border-radius: 50%;

    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    &--active {
      background-color: $em-range-picker-grid-active-color;
      color: $em-range-picker-grid-active-text-color;
    }
  }
}
</style>
