<script setup lang="ts">
import { Direction } from '@lib/shared/types';
import {
  onMounted, ref, watch, onBeforeUnmount,
} from 'vue';

interface Props {
  domRect: DOMRect | null;
  direction: Direction;
}

const props = defineProps<Props>();
const el = ref<HTMLElement | null>(null);

onMounted(() => {
  if (el.value) {
    document.body.appendChild(el.value);
  }
});

onBeforeUnmount(() => {
  if (el.value) {
    document.body.removeChild(el.value);
  }
});

watch(props, () => {
  if (!el.value || !props.domRect) return;

  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  el.value.style.top = `${props.domRect.top + props.domRect.height + scrollTop}px`;

  if (props.direction === 'rtl') {
    el.value.style.right = `${document.body.offsetWidth - props.domRect.right - scrollLeft}px`;
    return;
  }
  el.value.style.left = `${props.domRect.left + scrollLeft}px`;
});
</script>

<template>
  <div
    ref="el"
    class="EMPickerInputPopOver"
  >
    <div @click.stop>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.EMPickerInputPopOver {
  position: absolute;
  z-index: 100;

  transition-duration: 0.3s;

  @include mobile(){
    position: fixed;

    right: 0!important;
    bottom: 0!important;
    top: auto !important;
    left: 0 !important;

    width: 100%;

  }
}
</style>
