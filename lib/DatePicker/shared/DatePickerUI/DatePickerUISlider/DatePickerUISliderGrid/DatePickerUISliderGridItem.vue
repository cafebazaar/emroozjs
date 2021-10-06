<script setup lang="ts">
import { toRefs, computed } from 'vue-demi';
import GridItemUI from '@lib/shared/components/GridItemUI.vue';

interface Props {
  currentYear: number
  currentMonth: number;
  currentDay: number;
}

interface Events {
  (e: 'click'): void;
}

const props = defineProps<Props>();
const { currentDay } = toRefs(props);

const emit = defineEmits<Events>();

const isDisabled = false;
const isClosed = false;

function checkAndEmitClicked() {
  if (isDisabled) return;

  emit('click');
}

const isToday = false;
const isEdge = true;
</script>

<template>
  <GridItemUI
    :is-today="isToday"
    :is-edge="isEdge"
    :is-disabled="isDisabled"
    :is-closed="isClosed"
    @click="checkAndEmitClicked"
  >
    {{ currentDay }}
  </GridItemUI>
</template>
