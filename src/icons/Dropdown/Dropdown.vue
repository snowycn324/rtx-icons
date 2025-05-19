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
    <path d="M0 0L6 8L12 0H0Z" :fill="finalColor" />
  </svg>

</template>