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
  <svg :width="size" :height="size" viewBox="0 0 14 15" fill="transparent" xmlns="http://www.w3.org/2000/svg">
    <path :stroke="finalColor" d="M9.21045 11.7368H12.9999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path :stroke="finalColor" d="M9.21045 1V3.52631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path :stroke="finalColor" d="M11.1055 9.84204V13.6315" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path :stroke="finalColor" d="M12.3685 7.6936V3.52646C12.3685 3.19145 12.2354 2.87016 11.9985 2.63327C11.7616 2.39639 11.4403 2.26331 11.1053 2.26331H2.26316C1.92815 2.26331 1.60686 2.39639 1.36997 2.63327C1.13308 2.87016 1 3.19145 1 3.52646V12.3685C1 12.7035 1.13308 13.0248 1.36997 13.2617C1.60686 13.4986 1.92815 13.6317 2.26316 13.6317H7.63161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path :stroke="finalColor" d="M1 6.05261H12.3685" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path :stroke="finalColor" d="M4.15771 1V3.52631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>