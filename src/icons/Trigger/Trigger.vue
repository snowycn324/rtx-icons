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
  <svg :width="size * 0.58" :height="size" viewBox="0 0 7 12" :fill="finalColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66414 12H1.99747L2.66414 7.33333H0.330805C-0.0558618 7.33333 -0.0491952 7.12 0.0774715 6.89333C0.204138 6.66667 0.110805 6.84 0.124138 6.81333C0.984138 5.29333 2.27747 3.02667 3.99747 0H4.66414L3.99747 4.66667H6.3308C6.65747 4.66667 6.70414 4.88667 6.64414 5.00667L6.59747 5.10667C3.9708 9.7 2.66414 12 2.66414 12Z" :fill="finalColor" />
  </svg>
</template>