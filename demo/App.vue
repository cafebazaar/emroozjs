<script setup lang="ts">
import './stylesheets/main.scss';
import { ref } from 'vue';
import {
  EMRangePicker, EMDatePicker, EMRangePickerInput, EMDatePickerInput,
} from '@lib';

const range = ref(null);
const date = ref(null);

setTimeout(() => {
  range.value = null;
}, 5000);

const lastWeek = new Date();
lastWeek.setDate(lastWeek.getDate() - 7);
const last2Week = new Date();
last2Week.setDate(lastWeek.getDate() - 14);

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
  <div style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
    <hr>
    <EMRangePickerInput
      v-model="range"
      :type="isShamsi ? 'shamsi' : 'miladi'"
      :lang="isPersian ? 'fa' : 'en'"
    />
    <hr>
    <EMDatePickerInput
      v-model="date"
      :type="isShamsi ? 'shamsi' : 'miladi'"
      :lang="isPersian ? 'fa' : 'en'"
    />
    <hr>
    <EMRangePicker
      :type="isShamsi ? 'shamsi' : 'miladi'"
      :lang="isPersian ? 'fa' : 'en'"
      :common-dates="[
        {
          to: new Date(),
          from: lastWeek,
          label: 'هفته اخیر'
        },
        {
          to: new Date(),
          from: last2Week,
          label: '۲ هفته  اخیر'
        },
        {
          to: new Date(),
          from: lastWeek,
          label: 'هفته اخیر'
        },
        {
          to: new Date(),
          from: last2Week,
          label: '۲ هفته  اخیر'
        },
        {
          to: new Date(),
          from: lastWeek,
          label: 'هفته اخیر'
        },
        {
          to: new Date(),
          from: last2Week,
          label: '۲ هفته  اخیر'
        },
        {
          to: new Date(),
          from: lastWeek,
          label: 'هفته اخیر'
        },
        {
          to: new Date(),
          from: last2Week,
          label: '۲ هفته  اخیر'
        },
        {
          to: new Date(),
          from: lastWeek,
          label: 'هفته اخیر'
        },
        {
          to: new Date(),
          from: last2Week,
          label: '۲ هفته  اخیر'
        },
        {
          to: new Date(),
          from: lastWeek,
          label: 'هفته اخیر'
        },
        {
          to: new Date(),
          from: last2Week,
          label: '۲ هفته  اخیر'
        },
      ]"
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
  </div>
</template>
