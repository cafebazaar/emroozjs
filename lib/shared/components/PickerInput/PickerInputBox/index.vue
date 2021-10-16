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
    class="PickerInputBox"
    @click="emit('click')"
  >
    <span class="PickerInputBox__text">
      {{ props.text }}:
    </span>
    <input
      class="PickerInputBox__input"
      readonly
      :value="props.value"
    >
    <ArrowDownIcon class="PickerInputBox__icon" />
  </div>
</template>

<style lang="scss">
.PickerInputBox {
  background-color: $em-white;
  display: inline-flex;
  align-items: center;

  padding: $em-global-padding $em-global-padding * 1.6;
  border: $em-border;
  border-radius: $em-border-radius;

  cursor: pointer;

  box-sizing: border-box;
  width: 100%;

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

    flex: 1;
    width: 100%;

    font-family: inherit;

    text-align: center;
  }

  &__icon {
    color: $em-dark-gray;
    @include startMargin(auto);
  }
}
</style>
