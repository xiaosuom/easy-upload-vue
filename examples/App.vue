<template>
	<div class="wrapper">
		<EasyUpload>
			<button>上传</button>
		</EasyUpload>
	</div>
</template>

<script setup lang="ts">
import EasyUpload from '../packages/EasyUpload.vue';
</script>

<style scoped>
.wrapper {
	width: 100vw;
	height: 100vh;
	text-align: center;
	line-height: 100vh;
}
</style>
