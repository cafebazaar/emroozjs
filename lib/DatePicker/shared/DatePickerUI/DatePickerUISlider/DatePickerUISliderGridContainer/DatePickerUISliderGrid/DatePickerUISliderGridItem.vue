<script setup lang="ts">
import { toRefs, computed } from 'vue-demi';
import GridItemUI from '@lib/shared/components/GridItemUI.vue';
import useDatePicker from '../../../shared/hooks/useDatePicker';
import useDateCompares from './useDateCompares';

interface Props {
  currentYear: number
  currentMonth: number;
  currentDay: number;
}

interface Events {
  (e: 'click'): void;
}

const { allowedDates, date } = useDatePicker();

const props = defineProps<Props>();
const { currentDay, currentMonth, currentYear } = toRefs(props);

const emit = defineEmits<Events>();

const {
  isActive,
  isToday,
} = useDateCompares({ currentMonth, currentYear, currentDay });

const dateOfTuple = computed(
  () => date.tupleToDate([currentYear.value, currentMonth.value, currentDay.value]),
);

const isDisabled = computed(
  () => {
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
    :is-today="isToday"
    :is-edge="isActive"
    :is-disabled="isDisabled"
    :is-closed="isClosed"
    @click="checkAndEmitClicked"
  >
    {{ currentDay }}
  </GridItemUI>
</template>
