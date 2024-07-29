<template>
	<div class="wrapper">
		<EUpload>
			<button>上传</button>
		</EUpload>
	</div>
</template>

<script setup lang="ts">
import EUpload from '../packages/EUpload.vue';
</script>

<style scoped>
.wrapper {
	width: 100vw;
	height: 100vh;
	text-align: center;
	line-height: 100vh;
}
</style>
