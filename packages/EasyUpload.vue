<template>
	<Upload
		:accept
		:action
		:maxCount
	>
		<slot></slot>
	</Upload>
</template>

<script setup lang="ts">
import { Upload } from 'ant-design-vue';
const props = defineProps<{
	accept?: string;
	action?: string;
	maxCount?: number;
}>();
</script>

<style scoped>
.wrapper {
	display: flex;
	place-items: flex-start;
	flex-wrap: wrap;
}
</style>
