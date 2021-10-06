<script setup lang="ts">
import {
  toRef, ref, Ref, computed,
} from 'vue-demi';
import {
  AllowedDates, CalendarType, Lang, SetUnifyDateItem, UnifyDateItem,
} from '@lib/shared/types';
import {
  CommonDates,
} from './shared/types';
import RangePickerShamsi from './RangePickerShamsi/index.vue';
import RangePickerMiladi from './RangePickerMiladi/index.vue';

interface Props {
  lang?: Lang;
  commonDates?: CommonDates;
  allowedDates?: AllowedDates;
  type?: CalendarType;
}

const props = withDefaults(defineProps<Props>(), {
  lang: 'fa',
  commonDates: () => [],
  allowedDates: () => null,
  type: 'shamsi',
});

const RANGE_PICKER_TYPE_TO_COMPONENT = {
  shamsi: RangePickerShamsi,
  miladi: RangePickerMiladi,
};

const fromDate: Ref<UnifyDateItem> = ref(null);
const toDate: Ref<UnifyDateItem> = ref(null);

const setFromDate: SetUnifyDateItem = (date) => {
  fromDate.value = date;
};

const setToDate: SetUnifyDateItem = (date) => {
  toDate.value = date;
};

const lang = toRef(props, 'lang');
const allowedDates = toRef(props, 'allowedDates');

const CalendarComponent = computed(() => RANGE_PICKER_TYPE_TO_COMPONENT[props.type]);

const direction = computed(() => (lang.value === 'fa' ? 'rtl' : 'ltr'));
</script>

<template>
  <div
    class="EMRoot"
    :lang="lang"
  >
    <Component
      :is="CalendarComponent"
      :lang="lang"
      :direction="direction"
      :from-date="fromDate"
      :to-date="toDate"
      :set-from-date="setFromDate"
      :set-to-date="setToDate"
      :common-dates="commonDates"
      :allowed-dates="allowedDates"
    />
  </div>
</template>