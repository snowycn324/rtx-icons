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
  <svg :width="size" :height="size * 0.67" viewBox="0 0 12 8" :fill="finalColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.59 0.59L6 5.17L1.41 0.589999L5.24537e-07 2L6 8L12 2L10.59 0.59Z" :fill="finalColor" />
  </svg>
</template>