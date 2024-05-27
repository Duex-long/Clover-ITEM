<template>
	<view class="recommend-item">
		<ImgDescribeVue position="top" size="190">
			<template #media>
				<view class="recommend-img"></view>
			</template>
			<template #describe>
				<view class="recommend-desc">
					<view class="goods-text goods-title">
						Title
					</view>
					<view class="goods-text goods-desc">
						descdescdescdescdescdescdesc
					</view>
				</view>
			</template>
		</imgDescribeVue>
	</view>
</template>

<script setup lang="ts">
	import ImgDescribeVue from '@/components/layout/img-describe.vue';
</script>

<style scoped lang="scss">
	.recommend-item {
		width: 210rpx;
		height: 260rpx;
		background-color: yellow;
		margin-top: 20rpx;
		border-radius:$box-radius;
		overflow: hidden
	}
	.recommend-img {
		@include full-page;
		background-color: lightgreen;
	}
	.recommend-desc {
		@include full-page;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.goods-text {
		width: 80%;
		@include text-ellipsis
	}
	.goods-title {
		color: #000;
		font-size: 32rpx;
		white-space: nowrap;
		overflow: hidden;
		
	}
	.goods-desc {
		color: #ccc;
		font-size: 24rpx;
	}
	
</style>