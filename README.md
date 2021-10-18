# Emrooz

Emrooz is a multilingual calendar built for Vue3. It also supports both Shamsi (Persian / Jalali) and Gregorian (English) calendars.

![Emrooz Calendar](https://user-images.githubusercontent.com/11475858/137792765-9812bd4f-4e88-4cb7-869b-0816eefb95c7.png)

## Installation

```
$ npm i @cafebazaar/emrooz
```
Or
```
$ yarn add @cafebazaar/emrooz
```

## Basic Usage

```js
<script setup>
import { ref } from 'vue';
import { EMDatePicker } from '@cafebazaar/emrooz';
import '@cafebazaar/emrooz/dist/style.css';

const value = ref(null)
</script>
<template>
  <EMDatePicker v-model="value" />
</template>
```

For further and more advanced usages please visit our storybook [here](https://emroozjs.netlify.app/).

## License
MIT
