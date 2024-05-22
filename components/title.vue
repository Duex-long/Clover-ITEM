<template>
	<view class="app-title">
		<label class="app-title-label"> {{ title }}</label>
		<view class="app-title-slot"> <slot/></view>
	</view>
</template>

<script lang="ts" setup>
	defineProps(["title"])
</script>

<style lang="scss" scoped>
	.app-title {
		width: 100%;
		margin-bottom: $base-padding;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.app-title-label {
		color: #000;
		font-size: 32rpx;
		font-weight: bold;
		letter-spacing: -4rpx;
	}
	.app-title-slot {
		height: 100%;
	}
</style>