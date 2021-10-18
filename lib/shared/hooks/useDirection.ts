import { computed } from 'vue';
import type { Ref } from 'vue';
import { Direction, Lang } from '../types';

export default function useDirection(lang: Ref<Lang>): Ref<Direction> {
  return computed(() => (lang.value === 'fa' ? 'rtl' : 'ltr'));
}
