<script setup lang="ts">
import useCalendar from '@lib/shared/Calendar/shared/hooks/useCalendar';
import { toRefs, computed } from 'vue-demi';
import CalendarSliderGridItemUI from './shared/components/CalendarSliderGridItemUI.vue';
import useDateCompares from './shared/hooks/useDateCompares';

interface Props {
  currentYear: number
  currentMonth: number;
  currentDay: number;
}

interface Events {
  (e: 'click'): void;
}

const { allowedDates, date } = useCalendar();

const props = defineProps<Props>();
const { currentDay, currentMonth, currentYear } = toRefs(props);

const emit = defineEmits<Events>();

const {
  isMiddle,
  isStartingRangeEdge,
  isEndingRangeEdge,
  isToday,
  isEdge,
  isBeforeStartingEdge,
} = useDateCompares({ currentMonth, currentYear, currentDay });

const dateOfTuple = computed(
  () => date.tupleToDate([currentYear.value, currentMonth.value, currentDay.value]),
);

const isDisabled = computed(
  () => isBeforeStartingEdge.value || !allowedDates?.(dateOfTuple.value),
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
  <CalendarSliderGridItemUI
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
  </CalendarSliderGridItemUI>
</template>
