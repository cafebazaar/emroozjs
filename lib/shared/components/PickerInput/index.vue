<script setup lang="ts">
import { Direction } from '@lib/shared/types';
import {
  ref, onMounted, onBeforeUnmount,
} from 'vue';
import PickerInputBox from './PickerInputBox/index.vue';
import PickerInputPopOver from './PickerInputPopOver.vue';
import PickerInputTransition from './PickerInputTransition.vue';

// @todo: Import this from types
interface Props {
  text: string;
  value: string;
  direction: Direction;
}

const props = defineProps<Props>();

const inputRef = ref<HTMLElement | null>(null);
const isOpen = ref(false);
const domRect = ref<DOMRect | null>(null);

function toggleIsOpen() {
  isOpen.value = !isOpen.value;

  if (isOpen.value && inputRef.value) {
    domRect.value = inputRef.value.getBoundingClientRect();
  }
}

function handleBodySelect() {
  isOpen.value = false;
}

onMounted(() => {
  document.body.addEventListener('click', handleBodySelect);
});

onBeforeUnmount(() => {
  document.body.removeEventListener('click', handleBodySelect);
});
</script>

<template>
  <div
    ref="inputRef"
    class="EMPickerInput"
    @click.stop
  >
    <PickerInputBox
      :value="props.value"
      :text="props.text"
      @click="toggleIsOpen"
    />

    <PickerInputTransition>
      <PickerInputPopOver
        v-show="isOpen"
        class="EMPickerInput__input"
        :dom-rect="domRect"
        :direction="props.direction"
      >
        <slot :close="handleBodySelect" />
      </PickerInputPopOver>
    </PickerInputTransition>
  </div>
</template>

<style lang="scss" scoped>
.EMPickerInput {
  width: 100%;

  display: inline-block;
  position: relative;

  &__input {
    margin-top: calc(var(--em-global-margin) / 2);
  }
}
</style>
