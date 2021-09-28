<script setup lang="ts">
import { toRef, ref, Ref } from 'vue-demi';
import CalendarShamsi from './CalendarShamsi/index.vue';

interface Props {
  lang?: 'en' | 'fa';
}

const props = withDefaults(defineProps<Props>(), {
  lang: 'fa',
});

const fromDate: Ref<null | Date> = ref(null);
const toDate: Ref<null | Date> = ref(null);

const lang = toRef(props, 'lang');
</script>

<template>
  <CalendarShamsi
    :lang="lang"
    :from-date="fromDate"
    :to-date="toDate"
  />
</template>
