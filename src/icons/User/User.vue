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
  <svg :width="size" :height="size" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 1.5C6.825 1.5 7.5 2.175 7.5 3C7.5 3.825 6.825 4.5 6 4.5C5.175 4.5 4.5 3.825 4.5 3C4.5 2.175 5.175 1.5 6 1.5ZM6 9C8.025 9 10.35 9.9675 10.5 10.5H1.5C1.6725 9.96 3.9825 9 6 9ZM6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0ZM6 7.5C3.9975 7.5 0 8.505 0 10.5V12H12V10.5C12 8.505 8.0025 7.5 6 7.5Z" :fill="finalColor" />
  </svg>
</template>