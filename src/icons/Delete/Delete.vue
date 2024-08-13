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
    <path d="M10.8235 2.16H8.94118V0.96C8.94118 0.4305 8.51912 0 8 0H3.29412C2.775 0 2.35294 0.4305 2.35294 0.96V2.16H0.470588C0.210294 2.16 0 2.3745 0 2.64V3.12C0 3.186 0.0529412 3.24 0.117647 3.24H1.00588L1.36912 11.085C1.39265 11.5965 1.80735 12 2.30882 12H8.98529C9.48823 12 9.90147 11.598 9.925 11.085L10.2882 3.24H11.1765C11.2412 3.24 11.2941 3.186 11.2941 3.12V2.64C11.2941 2.3745 11.0838 2.16 10.8235 2.16ZM7.88235 2.16H3.41176V1.08H7.88235V2.16Z" :fill="finalColor" />
  </svg>
</template>