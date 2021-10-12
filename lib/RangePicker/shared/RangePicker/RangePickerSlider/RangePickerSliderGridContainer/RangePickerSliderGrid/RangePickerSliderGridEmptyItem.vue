<script setup lang="ts">
import { toRefs, computed } from 'vue-demi';
import GridItemUI from '@lib/shared/components/GridItemUI.vue';
import useDateCompares from './shared/hooks/useDateCompares';
import useRangeHelpers from '../../../shared/hooks/useRangeHelpers';

interface Props {
  currentYear: number
  currentMonth: number;
  currentDay: number;
}

const props = defineProps<Props>();
const { currentDay, currentMonth, currentYear } = toRefs(props);

const {
  isMiddle, isEdge,
} = useDateCompares({ currentMonth, currentYear, currentDay });
const { isRangeSelected } = useRangeHelpers();

const isEdgeOfRange = computed(() => (isRangeSelected.value ? isEdge.value : false));
</script>

<template>
  <GridItemUI
    :is-middle="isMiddle || isEdgeOfRange"
    is-empty
  />
</template>
