<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
	defineProps<{
		size?: number;
		color?: string;
	}>(),
	{
		size: 10,
	},
);

const finalColor = computed<string>(() => props.color || 'currentColor')
</script>

<template>
	<svg :width="size * 0.7" :height="size" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M7 1.175L3.18333 5L7 8.825L5.825 10L0.825001 5L5.825 -1.02722e-07L7 1.175Z" :fill="finalColor"/>
	</svg>
</template>