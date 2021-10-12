<script setup lang="ts">
import { RangePickerInputLanguageStrings } from '../types';
import ArrowDownIcon from './ArrowDownIcon.vue';

interface Props {
  value: string;
  strings: RangePickerInputLanguageStrings;
}

interface Events {
  (e: 'click'): void;
}

const props = defineProps<Props>();

const emit = defineEmits<Events>();
</script>

<template>
  <div
    class="RangePickerInputUI"
    @click="emit('click')"
  >
    <span class="RangePickerInputUI__text">
      {{ props.strings.rangeText }}:
    </span>
    <input
      class="RangePickerInputUI__input"
      readonly
      :value="props.value"
    >
    <ArrowDownIcon />
  </div>
</template>

<style lang="scss">
.RangePickerInputUI {
  background-color: $em-white;
  display: inline-flex;
  align-items: center;

  padding: $em-global-padding $em-global-padding * 1.6;
  border: $em-border;
  border-radius: $em-border-radius;

  cursor: pointer;

  direction: rtl;
  @include ltr {
    direction: ltr;
  }

  &__text {
    color: $em-gray-color;
    @include endMargin(math.div($em-global-padding, 2));
  }

  &__input {
    border: none;
    outline: none;
    cursor: pointer;

    font-family: inherit;
  }

  &__icon {
    color: $em-dark-gray;
  }
}
</style>
