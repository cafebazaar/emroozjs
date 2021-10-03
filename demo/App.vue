<script setup lang="ts">
import './stylesheets/main.scss';
import { Calendar } from '@lib';

const lastWeek = new Date();
lastWeek.setDate(lastWeek.getDate() - 7);
</script>

<template>
  <Calendar
    :common-dates="[{
      label: 'یک هفته اخیر',
      from: lastWeek,
      to: new Date(),
    }]"
    :allowed-dates="(d) => d.getDate() % 2 === 0"
  />
</template>
