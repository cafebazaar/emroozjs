<script setup lang="ts">
import { computed, toRef } from 'vue';
import GridItemUI from '@lib/shared/components/GridItemUI.vue';
import RangePickerSliderGridEmptyItem from './RangePickerSliderGridEmptyItem.vue';
import RangePickerSliderGridItem from './RangePickerSliderGridItem.vue';

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
  <div class="RangePickerSliderGrid">
    <GridItemUI
      v-for="i of props.headerNames"
      :key="i"
      is-header
    >
      {{ i }}
    </GridItemUI>

    <RangePickerSliderGridEmptyItem
      v-for="(_, index) in emptyFirstDays"
      :key="`1-${index}`"
      :current-year="currentYear"
      :current-month="currentMonth"
      :current-day="1"
    />

    <RangePickerSliderGridItem
      v-for="currentDay in dayItems"
      :key="`${currentYear}-${currentMonth}-${currentDay}`"
      :current-year="currentYear"
      :current-month="currentMonth"
      :current-day="currentDay"
      @click="() => selectDate(currentDay)"
    />

    <RangePickerSliderGridEmptyItem
      v-for="(_, index) in emptyLastDays"
      :key="`${monthDays}-${index}`"
      :current-year="currentYear"
      :current-month="currentMonth"
      :current-day="monthDays"
    />
  </div>
</template>

<style lang="scss" scoped>

.RangePickerSliderGrid {
  border: var(--em-grid-border);

  width: 191px;

  @include mobile(){
    width: 100%;
  }

  box-sizing: border-box;

  border-radius: var(--em-grid-border-radius);

  display: flex;
  flex-wrap: wrap;
}
</style>
