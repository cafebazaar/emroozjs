<script setup lang="ts">
import { computed } from 'vue';
import { Direction } from '@lib/shared/types';
import Button from '@lib/shared/components/Button.vue';
import ArrowLeft from './icons/ArrowLeft.vue';
import ArrowRight from './icons/ArrowRight.vue';

interface Props {
  direction: Direction;
}

const props = defineProps<Props>();
const emit = defineEmits<{(e: 'click'): void;}>();

const ArrowEnd = computed(() => (props.direction === 'ltr' ? ArrowRight : ArrowLeft));
</script>

<template>
  <Button
    :icon="true"
    @click="emit('click')"
  >
    <ArrowEnd />
  </Button>
</template>
