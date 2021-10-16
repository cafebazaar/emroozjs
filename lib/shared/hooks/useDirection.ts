import { computed } from 'vue-demi';
import type { Ref } from 'vue-demi';
import { Direction, Lang } from '../types';

export default function useDirection(lang: Ref<Lang>): Ref<Direction> {
  return computed(() => (lang.value === 'fa' ? 'rtl' : 'ltr'));
}
