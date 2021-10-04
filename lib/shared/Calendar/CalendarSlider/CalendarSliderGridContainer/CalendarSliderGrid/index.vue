<script setup lang="ts">
import { computed, toRef } from 'vue-demi';
import CalendarSliderGridItemUI from './shared/components/CalendarSliderGridItemUI.vue';
import CalendarSliderGridEmptyItem from './CalendarSliderGridEmptyItem.vue';
import CalendarSliderGridItem from './CalendarSliderGridItem.vue';

const props = defineProps<{
  headerNames: string[];
  firstDayOfMonth: number;
  lastDayOfMonth: number;
  monthDays: number;
  currentYear: number;
  currentMonth: number;
}>();

const currentMonth = toRef(props, 'currentMonth');
const currentYear = toRef(props, 'currentYear');

const emit = defineEmits<{(e: 'selectDate', day: number): number }>();

function selectDate(day: number) {
  emit('selectDate', day);
}

const fill = (count:number) => new Array(count).fill(0).map((_, index) => index + 1);
const fillEmpty = (count: number) => new Array(count).fill('');
const emptyFirstDays = computed(() => fillEmpty(props.firstDayOfMonth));
const dayItems = computed(() => fill(props.monthDays));
const emptyLastDays = computed(() => fillEmpty(6 - props.lastDayOfMonth));
</script>

<template>
  <div class="CalendarGrid">
    <CalendarSliderGridItemUI
      v-for="i of props.headerNames"
      :key="i"
      is-header
    >
      {{ i }}
    </CalendarSliderGridItemUI>

    <CalendarSliderGridEmptyItem
      v-for="(_, index) in emptyFirstDays"
      :key="`0-${index}`"
      :current-year="currentYear"
      :current-month="currentMonth"
      :current-day="0"
    />

    <CalendarSliderGridItem
      v-for="currentDay in dayItems"
      :key="`${currentYear}-${currentMonth}-${currentDay}`"
      :current-year="currentYear"
      :current-month="currentMonth"
      :current-day="currentDay"
      @click="() => selectDate(currentDay)"
    />

    <CalendarSliderGridEmptyItem
      v-for="(_, index) in emptyLastDays"
      :key="`${monthDays}-${index}`"
      :current-year="currentYear"
      :current-month="currentMonth"
      :current-day="monthDays"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '../../../shared/styles/imports.scss';
.CalendarGrid {
  border: $cl-calendar-grid-border;

  width: 191px;

  box-sizing: border-box;

  border-radius: $cl-calendar-grid-border-radius;

  display: flex;
  flex-wrap: wrap;
}
</style>
