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
	<svg :width="size" :height="size" viewBox="0 0 12 12" :fill="finalColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 6.85714H6.85714V12H5.14286V6.85714H0V5.14286H5.14286V0H6.85714V5.14286H12V6.85714Z" :fill="finalColor"/>
	</svg>
</template>