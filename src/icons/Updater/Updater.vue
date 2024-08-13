<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
	defineProps<{
		size?: number;
		color?: string;
	}>(),
	{
		size: 12,
	},
);

const finalColor = computed<string>(() => props.color || 'currentColor')
</script>

<template>
  <svg :width="size" :height="size * 1.33" viewBox="0 0 15 13" :fill="finalColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.11362 3.27194L0.213548 2.06686L1.14021 6.20707L5.28041 5.28041L3.38034 4.07533C4.70994 1.97892 7.49423 1.35574 9.59065 2.68534C10.2303 3.09105 10.7379 3.63502 11.0829 4.25344L12.594 3.91521C12.1283 2.9271 11.3884 2.04929 10.394 1.41863C7.59459 -0.356856 3.88911 0.472502 2.11362 3.27194ZM10.9806 8.89565C9.65103 10.9921 6.86674 11.6152 4.77032 10.2856C4.13063 9.87993 3.62303 9.33596 3.27811 8.71755L1.76693 9.05578C2.23264 10.0439 2.97257 10.9217 3.96694 11.5524C6.76638 13.3278 10.4719 12.4985 12.2473 9.69904L14.1474 10.9041L13.2208 6.76391L9.08056 7.69057L10.9806 8.89565Z" :fill="finalColor" />
  </svg>
</template>