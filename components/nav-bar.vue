<template>
	<view class="navBar">
		<label>{{title}}</label>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	const title = ref('CLOVER_ITEM')
	
</script>

<style lang="scss" scoped>
	.navBar {
		position: fixed;
		top: 0;
		left: 0;
		color: #fff;
		width: 100%;
		height: 80rpx;
		text-align: center;
		@include flex-c-c;
		// background: $primary-bg;
	}
</style>