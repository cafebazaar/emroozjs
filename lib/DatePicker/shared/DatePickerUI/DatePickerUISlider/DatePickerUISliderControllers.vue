<script setup lang="ts">
import { ref } from 'vue';
import StartingArrowButton from '@lib/shared/components/arrow-buttons/StartingArrowButton.vue';
import EndingArrowButton from '@lib/shared/components/arrow-buttons/EndingArrowButton.vue';
import useDatePicker from '../shared/hooks/useDatePicker';

interface Props {
  currentMonth: number;
  currentYear: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{(e: 'next'): void; (e: 'prev'): void;}>();

const { strings, direction } = useDatePicker();

const isAnimationInverted = ref(false);

function next() {
  isAnimationInverted.value = false;
  emit('next');
}

function prev() {
  isAnimationInverted.value = true;
  emit('prev');
}
</script>

<template>
  <div class="DatePickerUISliderControllers">
    <StartingArrowButton
      :direction="direction"
      @click="prev"
    />

    <span class="DatePickerUISliderControllers__month">
      {{ strings.monthNames[props.currentMonth] }} {{ props.currentYear }}
    </span>

    <EndingArrowButton
      :direction="direction"
      @click="next"
    />
  </div>
</template>

<style lang="scss">
.DatePickerUISliderControllers {
  display: flex;
  align-items: center;

  font-size: $em-controllers-font-size;

  &__month {
    flex: 1;
    text-align: center;
  }
}
</style>
