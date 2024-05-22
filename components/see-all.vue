<template>
	<view class="see-all">
		<label>See All</label>
		<image :src="ArrowUpRight" mode="widthFix" style="width: 14rpx;margin-left: 12rpx;" />
	</view>
</template>

<script lang="ts" setup>
	import ArrowUpRight from '@/static/icon/arrow_up_right.svg'
</script>

<style lang="scss" scoped>
	.see-all {
		color: #000;
		font-size: 26rpx;
		height: 100%;
		display: flex;
		align-items: center;
	}
</style>