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
	<svg :width="size" :height="size * 0.79" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.0982 2.18183H4V3.63638H9.0982V5.8182L12 2.9091L9.0982 0V2.18183Z" :fill="finalColor" />
    <path d="M2.9018 7.27234L8 7.27234L8 5.81779L2.9018 5.81779L2.9018 3.63596L-2.74022e-05 6.54506L2.9018 9.45416L2.9018 7.27234Z" :fill="finalColor" />
  </svg>
</template>