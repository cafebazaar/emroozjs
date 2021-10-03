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
    class="CalendarSliderGridItemUI"
    :class="{
      'CalendarSliderGridItemUI--header': isHeader,
      'CalendarSliderGridItemUI--empty': isEmpty,
      'CalendarSliderGridItemUI--active': isMiddle,
      'CalendarSliderGridItemUI--active-start': isActiveStart,
      'CalendarSliderGridItemUI--active-end': isActiveEnd,
      'CalendarSliderGridItemUI--disabled': isDisabled,
      'CalendarSliderGridItemUI--today': isToday,
      'CalendarSliderGridItemUI--closed': isClosed,
    }"
    @click="emit('click')"
  >
    <span
      class="CalendarSliderGridItemUI__inner"
      :class="{
        'CalendarSliderGridItemUI__inner--active': isEdge,
      }"
    >
      <slot />
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../../../shared/styles/vars.scss';
.CalendarSliderGridItemUI {
  transition-duration: $cl-calendar-grid-transition-duration;

  width: 27px;
  height: 20px;

  cursor: pointer;
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: $cl-calendar-grid-item-font-size;
  color: $cl-text-color;

  margin: 4px 0;

  &--header {
    color: $cl-calendar-grid-header-color;
    cursor: default;
  }

  &--empty {
    cursor: default;
  }

  &--disabled {
    cursor: not-allowed;
    color: $cl-calendar-grid-disabled-color;
  }

  &--closed {
    color: $cl-calendar-grid-closed-color;
  }

  &--active {
    background: $cl-calendar-grid-active-background-color;

    &-start {
      background:
        linear-gradient(
          to left,
          transparent 0%,
          transparent 50%,
          $cl-calendar-grid-active-background-color 50%,
          $cl-calendar-grid-active-background-color 100%
        );
    }
    &-end {
      background:
        linear-gradient(
          to right,
          transparent 0%,
          transparent 50%,
          $cl-calendar-grid-active-background-color 50%,
          $cl-calendar-grid-active-background-color 100%
        );
    }
  }

  &--today:not(&--active):not(&--disabled) {
    color: $cl-calendar-grid-hover-color;
  }

  &:not(&--header):not(&--active):not(&--disabled) {
    &:hover {
      color: $cl-calendar-grid-hover-color;
    }
  }

  &__inner {
    transition-duration: $cl-calendar-grid-transition-duration;

    border-radius: 50%;

    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    &--active {
      background-color: $cl-calendar-grid-active-color;
      color: $cl-calendar-grid-active-text-color;
    }
  }
}
</style>
