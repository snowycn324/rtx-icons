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
  <svg :width="size" :height="size * 0.92" viewBox="0 0 12 12" :fill="finalColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.434 5.26736L8.4 6.23336V5.26736H7.434ZM9 2.86736H6.6V4.00736H9C10.026 4.00736 10.86 4.84136 10.86 5.86736C10.86 6.62936 10.398 7.28936 9.738 7.57136L10.578 8.41136C11.43 7.88336 12 6.94136 12 5.86736C12 4.21136 10.656 2.86736 9 2.86736ZM0 1.22936L1.866 3.09536C0.774 3.53936 0 4.61336 0 5.86736C0 7.52336 1.344 8.86736 3 8.86736H5.4V7.72736H3C1.974 7.72736 1.14 6.89336 1.14 5.86736C1.14 4.91336 1.866 4.12736 2.796 4.02536L4.038 5.26736H3.6V6.46736H5.238L6.6 7.82936V8.86736H7.638L10.044 11.2734L10.89 10.4274L0.846 0.383362L0 1.22936Z" :fill="finalColor" />
  </svg>
</template>