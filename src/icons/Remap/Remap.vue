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
  <svg :width="size" :height="size / 2" viewBox="0 0 12 6" :fill="finalColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 0H6.6V1.2H9C9.99 1.2 10.8 2.01 10.8 3C10.8 3.99 9.99 4.8 9 4.8H6.6V6H9C10.656 6 12 4.656 12 3C12 1.344 10.656 0 9 0ZM5.4 4.8H3C2.01 4.8 1.2 3.99 1.2 3C1.2 2.01 2.01 1.2 3 1.2H5.4V0H3C1.344 0 0 1.344 0 3C0 4.656 1.344 6 3 6H5.4V4.8ZM3.6 2.4H8.4V3.6H3.6V2.4Z" :fill="finalColor" />
  </svg>
</template>