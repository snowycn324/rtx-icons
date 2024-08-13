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
  <svg :width="size * 0.92" :height="size" viewBox="0 0 11 13" :fill="finalColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.6 10.2667C3.27 10.2667 2.9875 10.1492 2.7525 9.91425C2.5175 9.67925 2.4 9.39675 2.4 9.06675V1.86675C2.4 1.53675 2.5175 1.25425 2.7525 1.01925C2.9875 0.784248 3.27 0.666748 3.6 0.666748H9C9.33 0.666748 9.6125 0.784248 9.8475 1.01925C10.0825 1.25425 10.2 1.53675 10.2 1.86675V9.06675C10.2 9.39675 10.0825 9.67925 9.8475 9.91425C9.6125 10.1492 9.33 10.2667 9 10.2667H3.6ZM3.6 9.06675H9V1.86675H3.6V9.06675ZM1.2 12.6667C0.87 12.6667 0.5875 12.5492 0.3525 12.3142C0.1175 12.0792 0 11.7967 0 11.4667V3.06675H1.2V11.4667H7.8V12.6667H1.2Z" :fill="finalColor" />
  </svg>
</template>