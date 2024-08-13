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
  <svg :width="size * 0.83" :height="size" viewBox="0 0 10 12" :fill="finalColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.88235 4.23529H7.05882V0H2.82353V4.23529H0L4.94118 9.17647L9.88235 4.23529ZM0 10.5882V12H9.88235V10.5882H0Z" :fill="finalColor" />
  </svg>
</template>