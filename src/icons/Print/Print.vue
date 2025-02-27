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
	<svg :width="size" :height="size  * 0.92" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.2 3.05556H1.8C0.804 3.05556 0 3.87444 0 4.88889V8.55556H2.4V11H9.6V8.55556H12V4.88889C12 3.87444 11.196 3.05556 10.2 3.05556ZM8.4 9.77778H3.6V6.72222H8.4V9.77778ZM10.2 5.5C9.87 5.5 9.6 5.225 9.6 4.88889C9.6 4.55278 9.87 4.27778 10.2 4.27778C10.53 4.27778 10.8 4.55278 10.8 4.88889C10.8 5.225 10.53 5.5 10.2 5.5ZM9.6 0H2.4V2.44444H9.6V0Z"  :fill="finalColor" />
	</svg>
</template>