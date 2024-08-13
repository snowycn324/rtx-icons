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
    <path d="M1.41 7.41L6 2.83L10.59 7.41L12 6L6 0L0 6L1.41 7.41Z" :fill="finalColor" />
  </svg>
</template>