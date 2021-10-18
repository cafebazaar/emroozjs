<script setup lang="ts">
import { toRefs } from 'vue';
import GridItemUI from '@lib/shared/components/GridItemUI.vue';
import useDateCompares from './shared/hooks/useDateCompares';

interface Props {
  currentYear: number
  currentMonth: number;
  currentDay: number;
}

const props = defineProps<Props>();
const { currentDay, currentMonth, currentYear } = toRefs(props);

const {
  isMiddleEmpty,
} = useDateCompares({ currentMonth, currentYear, currentDay });
</script>

<template>
  <GridItemUI
    :is-middle="isMiddleEmpty"
    is-empty
  />
</template>
