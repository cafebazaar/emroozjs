<script setup lang="ts">
import {
  provide, toRefs, reactive, ref, Ref,
} from 'vue';
import {
  AllowedDates, CurrentDate, DateItem, Direction, SetDateItem,
} from '@lib/shared/types';
import RangePickerCommonDates from './RangePickerCommonDates/index.vue';
import RangePickerSlider from './RangePickerSlider/index.vue';
import RangePickerFooter from './RangePickerFooter/index.vue';
import {
  RangePickerDate, RangePickerLanguageStrings,
  LocalCommonDates,
  SelectRange,
} from '../types';
import { CurrentFirstSliderDate, SetCurrentFirstSliderDate } from './shared/types';

interface Props {
  date: RangePickerDate,
  strings: RangePickerLanguageStrings;
  fromDate: DateItem,
  toDate: DateItem,
  currentDate: CurrentDate,
  commonDates: LocalCommonDates,
  direction: Direction,
  setFromDate: SetDateItem,
  setToDate: SetDateItem,
  allowedDates: AllowedDates,
  selectRange: SelectRange,
}

const props = defineProps<Props>();

const refProps = toRefs(props);

const currentFirstSliderDate: Ref<CurrentFirstSliderDate> = ref({
  year: props.currentDate[0],
  month: props.currentDate[1],
});

const setCurrentFirstSliderDate: SetCurrentFirstSliderDate = (slideInfo) => {
  currentFirstSliderDate.value = {
    year: slideInfo.year,
    month: slideInfo.month,
  };
};

provide('date', props.date);
provide('strings', refProps.strings);
provide('fromDate', refProps.fromDate);
provide('toDate', refProps.toDate);
provide('currentDate', refProps.currentDate);
provide('direction', refProps.direction);
provide('commonDates', reactive(refProps.commonDates.value));
provide('setFromDate', props.setFromDate);
provide('setToDate', props.setToDate);
provide('allowedDates', props.allowedDates);
provide('selectRange', props.selectRange);
provide('currentFirstSliderDate', currentFirstSliderDate);
provide('setCurrentFirstSliderDate', setCurrentFirstSliderDate);
</script>

<template>
  <div
    class="RangePicker"
    :class="{
      'RangePicker--with-common-dates': commonDates?.length
    }"
  >
    <div class="RangePicker__content">
      <RangePickerCommonDates
        v-if="commonDates?.length"
        class="RangePicker__common-dates"
      />

      <RangePickerSlider class="RangePicker__slider" />
    </div>
    <footer class="RangePicker__footer">
      <RangePickerFooter />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
  .RangePicker {
    direction: rtl;
    @include ltr {
      direction: ltr;
    }

    background-color: var(--em-background-color);
    border-radius: var(--em-border-radius);

    display: flex;
    flex-direction: column;

    border: var(--em-border);
    padding: 16px 24px;
    width: 400px;

    &--with-common-dates {
      width: 560px;
    }

    @include mobile(){
      width: 100%;
      box-sizing: border-box;
    }

    &__content {
      display: flex;
      width: 100%;
      flex: 1;
      margin-bottom: 20px;

      @include mobile(){
        flex-direction: column;
      }
    }

    &__common-dates {
      flex-basis: 160px;

      @include mobile(){
        flex-basis: 50px;
        margin-bottom: var(--em-global-margin);
      }
    }

    &__slider {
      flex: 1;
    }

    &__footer {
      border-top: var(--em-footer-border-top);
    }
  }
</style>
