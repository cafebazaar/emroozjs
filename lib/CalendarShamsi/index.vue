<script setup lang="ts">
import Calendar from '../shared/Calendar/index.vue';

import date from './date';
import strings from './strings';
</script>

<template>
  <Calendar
    :date="date"
    :strings="strings"
  />
</template>
