<script setup lang="ts">
import { POPOVER_WRAPPER_ELEMENT_ID } from '@lib/shared/config';
import { Direction } from '@lib/shared/types';
import {
  onMounted, ref, watch, onBeforeUnmount,
} from 'vue-demi';

interface Props {
  domRect: DOMRect | null;
  direction: Direction;
}

const props = defineProps<Props>();
const el = ref<HTMLElement | null>(null);

onMounted(() => {
  if (el.value) {
    if (!document.body.querySelector(`#${POPOVER_WRAPPER_ELEMENT_ID}`)) {
      const popoverWrapper = document.createElement('div');
      popoverWrapper.setAttribute('id', POPOVER_WRAPPER_ELEMENT_ID);
      document.body.appendChild(popoverWrapper);
    }

    document.body.querySelector(`#${POPOVER_WRAPPER_ELEMENT_ID}`)?.appendChild(el.value);
  }
});

onBeforeUnmount(() => {
  if (el.value) {
    document.body.removeChild(el.value);
  }
});

watch(props, () => {
  console.log('props');
  if (!el.value || !props.domRect) return;

  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  el.value.style.top = `${props.domRect.top + props.domRect.height + scrollTop}px`;

  if (props.direction === 'rtl') {
    el.value.style.right = `${window.innerWidth - props.domRect.right + scrollLeft}px`;
    return;
  }
  el.value.style.left = `${props.domRect.left + scrollLeft}px`;
});
</script>

<template>
  <div
    ref="el"
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
