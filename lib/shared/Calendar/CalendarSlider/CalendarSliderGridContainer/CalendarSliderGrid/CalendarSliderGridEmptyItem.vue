<script setup lang="ts">
import { toRefs } from 'vue-demi';
import CalendarSliderGridItemUI from './shared/components/CalendarSliderGridItemUI.vue';
import useDateCompares from './shared/hooks/useDateCompares';

interface Props {
  currentYear: number
  currentMonth: number;
  currentDay: number;
}

const props = defineProps<Props>();
const { currentDay, currentMonth, currentYear } = toRefs(props);

const {
  isMiddle,
} = useDateCompares({ currentMonth, currentYear, currentDay });
</script>

<template>
  <CalendarSliderGridItemUI
    :is-middle="isMiddle"
    is-empty
  />
</template>
