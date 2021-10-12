<script setup lang="ts">
import './stylesheets/main.scss';
import { ref } from 'vue';
import { EMRangePicker, EMDatePicker, EMRangePickerInput } from '@lib';

const range = ref(null);

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

function changeRange(r) {
  console.log('HERE', r);
  range.value = r;
}
</script>

<template>
  <div style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
    <EMRangePicker
      :type="isShamsi ? 'shamsi' : 'miladi'"
      :lang="isPersian ? 'fa' : 'en'"
      :common-dates="[
        {
          to: new Date(),
          from: lastWeek,
          label: 'هفته اخیر'
        }
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
    <hr>
    <EMRangePickerInput
      v-model="range"
      :type="isShamsi ? 'shamsi' : 'miladi'"
      :lang="isPersian ? 'fa' : 'en'"
    />
  </div>
</template>
