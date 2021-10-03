<script setup lang="ts">
import './stylesheets/main.scss';
import { ref } from 'vue';
import { Calendar } from '@lib';

const lastWeek = new Date();
lastWeek.setDate(lastWeek.getDate() - 7);

const isShamsi = ref(true);
const isPersian = ref(true);

function toggleType() {
  isShamsi.value = !isShamsi.value;
}

function toggleLang() {
  isPersian.value = !isPersian.value;
}
</script>

<template>
  <Calendar
    :common-dates="[{
      label: 'یک هفته اخیر',
      from: lastWeek,
      to: new Date(),
    }]"
    :allowed-dates="()=>true"
    :type="isShamsi ? 'shamsi' : 'miladi'"
    :lang="isPersian ? 'fa' : 'en'"
  />

  <button @click="toggleType">
    تاگل نوع تاریخ
  </button>
  <button @click="toggleLang">
    تاگل زبان
  </button>
</template>
