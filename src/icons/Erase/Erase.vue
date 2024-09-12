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
    <path d="M9.14468 9.01679H12V10.219H7.94245L9.14468 9.01679ZM1.6307 10.219L0.353317 8.94165C0.122888 8.71122 0.0051692 8.42569 0.000159872 8.08505C-0.00484945 7.74442 0.10786 7.45388 0.338289 7.21343L6.9506 0.360671C7.18103 0.120224 7.46406 0 7.79968 0C8.1353 0 8.41833 0.115214 8.64876 0.345643L11.6393 3.33621C11.8698 3.56664 11.985 3.85217 11.985 4.19281C11.985 4.53344 11.8698 4.81897 11.6393 5.0494L6.58993 10.219H1.6307ZM6.07898 9.01679L10.7978 4.17778L7.82222 1.20224L1.17986 8.055L2.14165 9.01679H6.07898Z" :fill="finalColor" />
  </svg>
</template>