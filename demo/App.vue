<script setup lang="ts">
import './stylesheets/main.scss';
import { ref } from 'vue';
import { EMRangePicker, EMDatePicker } from '@lib';

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
  <EMRangePicker
    :common-dates="[{
      label: 'یک هفته اخیر',
      from: lastWeek,
      to: new Date(),
    }]"
    :type="isShamsi ? 'shamsi' : 'miladi'"
    :lang="isPersian ? 'fa' : 'en'"
  />

  <button @click="toggleType">
    تاگل نوع تاریخ
  </button>
  <button @click="toggleLang">
    تاگل زبان
  </button>
  <hr>
  <EMDatePicker
    :type="isShamsi ? 'shamsi' : 'miladi'"
    :lang="isPersian ? 'fa' : 'en'"
  />
</template>
