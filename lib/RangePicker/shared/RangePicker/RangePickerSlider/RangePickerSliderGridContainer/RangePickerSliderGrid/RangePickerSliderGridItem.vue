<script setup lang="ts">
import { toRefs, computed } from 'vue-demi';
import GridItemUI from '@lib/shared/components/GridItemUI.vue';
import useCalendar from '../../../shared/hooks/useRangePicker';
import useDateCompares from './shared/hooks/useDateCompares';
import useRangeHelpers from '../../../shared/hooks/useRangeHelpers';

interface Props {
  currentYear: number
  currentMonth: number;
  currentDay: number;
}

const { allowedDates, date } = useCalendar();

const props = defineProps<Props>();
const { currentDay, currentMonth, currentYear } = toRefs(props);

const emit = defineEmits<{(e: 'click'): void;}>();

const {
  isMiddle,
  isStartingRangeEdge,
  isEndingRangeEdge,
  isToday,
  isEdge,
  isBeforeStartingEdge,
} = useDateCompares({ currentMonth, currentYear, currentDay });

const { isRangeSelected } = useRangeHelpers();

const dateOfTuple = computed(
  () => date.tupleToDate([currentYear.value, currentMonth.value, currentDay.value]),
);

const isDisabled = computed(
  () => {
    if (!isRangeSelected.value) {
      if (allowedDates) {
        return !allowedDates(dateOfTuple.value) || isBeforeStartingEdge.value;
      }

      return isBeforeStartingEdge.value;
    }

    if (allowedDates) { return !allowedDates(dateOfTuple.value); }

    return false;
  },
);
const isClosed = computed(
  () => date.isClosed([currentYear.value, currentMonth.value, currentDay.value]),
);

function checkAndEmitClicked() {
  if (isDisabled.value) return;

  emit('click');
}
</script>

<template>
  <GridItemUI
    :is-middle="isMiddle"
    :is-active-start="isStartingRangeEdge"
    :is-active-end="isEndingRangeEdge"
    :is-today="isToday"
    :is-edge="isEdge"
    :is-disabled="isDisabled"
    :is-closed="isClosed"
    @click="checkAndEmitClicked"
  >
    {{ currentDay }}
  </GridItemUI>
</template>
