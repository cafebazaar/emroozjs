<script setup lang="ts">
import {
  toRef, ref, Ref, computed,
} from 'vue-demi';
import {
  AllowedDates,
  CalendarType,
  CommonDates,
  Lang, SetUnifyDateRangeItem, UnifyDateRangeItem,
} from './shared/types';
import CalendarShamsi from './CalendarShamsi/index.vue';
import CalendarMiladi from './CalendarMiladi/index.vue';

interface Props {
  lang?: Lang;
  commonDates?: CommonDates;
  allowedDates?: AllowedDates;
  type?: CalendarType
}

const props = withDefaults(defineProps<Props>(), {
  lang: 'fa',
  commonDates: () => [],
  allowedDates: () => null,
  type: 'shamsi',
});

const CALENDAR_TYPE_TO_COMPONENR = {
  shamsi: CalendarShamsi,
  miladi: CalendarMiladi,
};

const fromDate: Ref<UnifyDateRangeItem> = ref(null);
const toDate: Ref<UnifyDateRangeItem> = ref(null);

const setFromDate: SetUnifyDateRangeItem = (date) => {
  fromDate.value = date;
};

const setToDate: SetUnifyDateRangeItem = (date) => {
  toDate.value = date;
};

const lang = toRef(props, 'lang');
const allowedDates = toRef(props, 'allowedDates');

const CalendarComponent = computed(() => CALENDAR_TYPE_TO_COMPONENR[props.type]);

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
