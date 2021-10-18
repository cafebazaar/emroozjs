<script setup lang="ts">
import { computed } from 'vue';
import Button from '@lib/shared/components/Button.vue';
import VerticalSlideAnimation from '@lib/shared/components/VerticalSlideAnimation.vue';
import useCalendar from '../shared/hooks/useRangePicker';
import useRangeHelpers from '../shared/hooks/useRangeHelpers';
import RangePickerFooterClose from './RangePickerFooterClose.vue';

const {
  strings, fromDate, toDate, selectRange, setToDate,
  setFromDate, setCurrentFirstSliderDate, currentDate,
} = useCalendar();
const { isRangeSelected } = useRangeHelpers();

const datePreviewString = computed(() => {
  if (!fromDate.value || !toDate.value) return '';

  return `
    ${fromDate.value[2]} ${strings.value.monthNames[fromDate.value[1]]} ${toDate.value[0]}
    ${strings.value.to}
    ${toDate.value[2]} ${strings.value.monthNames[toDate.value[1]]} ${toDate.value[0]}
    `;
});

function removeRange() {
  setToDate(null);
  setFromDate(null);
}

function resetSlider() {
  setCurrentFirstSliderDate({
    year: currentDate.value[0],
    month: currentDate.value[1],
  });
}
</script>

<template>
  <div class="RangePickerFooter">
    <Button
      plain
      @click="resetSlider"
    >
      {{ strings.goToToday }}
    </Button>
    <div class="RangePickerFooter__sep" />
    <div>
      <VerticalSlideAnimation>
        <span
          v-show="datePreviewString"
          :key="datePreviewString"
          class="RangePickerFooter__report"
        >
          <RangePickerFooterClose
            class="RangePickerFooter__close"
            @click="removeRange"
          />
          {{ datePreviewString }}
        </span>
      </VerticalSlideAnimation>
    </div>

    <Button
      class="RangePickerFooter__action"
      :disabled="!isRangeSelected"
      @click="selectRange"
    >
      {{ strings.action }}
    </Button>
  </div>
</template>

<style lang="scss" scoped>
.RangePickerFooter {
  padding-top: $em-global-padding * 1.6;
  box-sizing: border-box;

  display: flex;
  align-items: center;

  color: $em-footer-report-text-color;
  font-size: $em-footer-font-size;

  &__report {
    transition-duration: $em-transition-duration;

    display: flex;
    align-items: center;
  }

  &__sep {
    align-self: stretch;
    width: 1px;
    background-color: $em-footer-sep-color;
    margin: math.div($em-global-margin, 2) $em-global-margin * 1.5;
  }

  &__close {
    color: $em-grey-90;
    cursor: pointer;
    @include endMargin($em-global-margin);
  }

  &__action {
    @include startMargin(auto);
  }
}
</style>
