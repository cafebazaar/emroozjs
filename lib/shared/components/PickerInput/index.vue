<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue-demi';
import PickerInputBox from './PickerInputBox/index.vue';
import PickerInputPopOver from './PickerInputPopOver.vue';
import PickerInputTransition from './PickerInputTransition.vue';

// @todo: Import this from types
interface Props {
  text: string;
  value: string;
}

const props = defineProps<Props>();

const isOpen = ref(false);

function toggleIsOpen() {
  isOpen.value = !isOpen.value;
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
    class="PickerInput"
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
        class="PickerInput__input"
        v-bind="props"
      >
        <slot />
      </PickerInputPopOver>
    </PickerInputTransition>
  </div>
</template>

<style lang="scss" scoped>
.PickerInput {
  width: 100%;

  display: inline-block;
  position: relative;

  &__input {
    top: 100%;
    margin-top: math.div($em-global-margin, 2);
    right: 0;

    @include ltr() {
      left: 0;
      right: auto;
    }
  }
}
</style>
