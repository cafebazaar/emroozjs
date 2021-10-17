<script setup lang="ts">
import { computed } from 'vue-demi';
import Button from '@lib/shared/components/Button.vue';
import VerticalSlideAnimation from '@lib/shared/components/VerticalSlideAnimation.vue';
import useCalendar from '../shared/hooks/useRangePicker';
import useRangeHelpers from '../shared/hooks/useRangeHelpers';
import RangePickerFooterClose from './RangePickerFooterClose.vue';

const {
  strings, fromDate, toDate, selectRange, setToDate, setFromDate,
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
</script>

<template>
  <div class="RangePickerFooter">
    <span>
      {{ strings.goToToday }}
    </span>
    <div class="RangePickerFooter__sep" />
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
    margin: math.div($em-global-margin, 2) $em-global-margin * 2.4;
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