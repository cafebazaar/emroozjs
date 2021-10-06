<script setup lang="ts">
import Button from '@lib/shared/components/Button.vue';
</script>

<template>
  <div class="DatePickerUIFooter">
    <Button>
      اعمال تاریخ
    </Button>
  </div>
</template>

<style lang="scss">
.DatePickerUIFooter {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-top: $em-global-padding * 1.6;
}
</style>
