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
	<svg :width="size * 0.67" :height="size" viewBox="0 0 8 12" :fill="finalColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M8 1.41L3.42 6L8 10.59L6.59 12L0.590001 6L6.59 -1.23266e-07L8 1.41Z" :fill="finalColor" />
	</svg>
</template>