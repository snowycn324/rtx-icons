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
	<svg :width="size * 1.16" :height="size" viewBox="0 0 14 12" :fill="finalColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 0H0.136364C0.0613636 0 0 0.0613636 0 0.136364V1.22727C0 1.30227 0.0613636 1.36364 0.136364 1.36364H13.5C13.575 1.36364 13.6364 1.30227 13.6364 1.22727V0.136364C13.6364 0.0613636 13.575 0 13.5 0ZM13.5 10.6364H0.136364C0.0613636 10.6364 0 10.6977 0 10.7727V11.8636C0 11.9386 0.0613636 12 0.136364 12H13.5C13.575 12 13.6364 11.9386 13.6364 11.8636V10.7727C13.6364 10.6977 13.575 10.6364 13.5 10.6364ZM13.5 5.31818H0.136364C0.0613636 5.31818 0 5.37955 0 5.45455V6.54545C0 6.62045 0.0613636 6.68182 0.136364 6.68182H13.5C13.575 6.68182 13.6364 6.62045 13.6364 6.54545V5.45455C13.6364 5.37955 13.575 5.31818 13.5 5.31818Z" :fill="finalColor" />
  </svg>
</template>