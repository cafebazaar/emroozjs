<script setup lang="ts">
import ArrowDownIcon from './ArrowDownIcon.vue';

interface Props {
  value: string;
  text: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{(e: 'click'): void;}>();
</script>

<template>
  <div
    class="EMPickerInputBox"
    @click="emit('click')"
  >
    <span class="EMPickerInputBox__text">
      {{ props.text }}:
    </span>
    <input
      class="EMPickerInputBox__input"
      readonly
      :value="props.value"
    >
    <ArrowDownIcon class="EMPickerInputBox__icon" />
  </div>
</template>

<style lang="scss" scoped>
.EMPickerInputBox {
  background-color: var(--em-white);
  display: inline-flex;
  align-items: center;

  padding: var(--em-global-padding) calc(var(--em-global-padding) * 1.6);
  border: var(--em-border);
  border-radius: var(--em-border-radius);

  cursor: pointer;

  box-sizing: border-box;
  width: 100%;

  direction: rtl;
  @include ltr {
    direction: ltr;
  }

  &__text {
    color: var(--em-gray-color);
    @include endMargin(calc(var(--em-global-padding) / 2));
  }

  &__input {
    border: none;
    outline: none;
    cursor: pointer;

    flex: 1;
    width: 100%;

    font-family: inherit;

    text-align: center;
  }

  &__icon {
    color: var(--em-dark-gray);
    @include startMargin(auto);
  }
}
</style>
