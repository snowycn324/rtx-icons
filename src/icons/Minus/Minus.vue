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
  <svg :width="size" :height="size  * 0.17" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2H0V0H12V2Z" :fill="finalColor" />
  </svg>
</template>