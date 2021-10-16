<script setup lang="ts">
import { computed } from 'vue-demi';
import { Direction } from '@lib/shared/types';
import Button from '@lib/shared/components/Button.vue';
import ArrowLeft from './icons/ArrowLeft.vue';
import ArrowRight from './icons/ArrowRight.vue';

interface Props {
  direction: Direction;
}

const props = defineProps<Props>();
const emit = defineEmits<{(e: 'click'): void;}>();

const ArrowStart = computed(() => (props.direction === 'ltr' ? ArrowLeft : ArrowRight));
</script>

<template>
  <Button
    icon
    @click="emit('click')"
  >
    <ArrowStart />
  </Button>
</template>
