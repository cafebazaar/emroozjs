<script setup lang="ts">
import { toRef } from 'vue-demi';
import CalendarShamsi from './CalendarShamsi/index.vue';

interface Props {
  lang?: 'en' | 'fa';
}

const props = withDefaults(defineProps<Props>(), {
  lang: 'fa',
});

const lang = toRef(props, 'lang');
</script>

<template>
  <CalendarShamsi :lang="lang" />
</template>
