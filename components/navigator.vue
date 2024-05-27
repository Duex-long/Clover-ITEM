<template>
	<view class="navigator">
		<view class="navigator-item">
			<ImgDescribeVue position="top" size="40">
				<template #media>
					<image  style="width:40rpx; margin: auto;" mode="widthFix" :src="SearchIcon" />
				</template>
				<template #describe>
					<view>
						<label>Home</label>
					</view>
				</template>
			</ImgDescribeVue>
		</view>
	
	<!--  -->
	<view class="navigator-item">
		<ImgDescribeVue position="top" size="40">
			<template #media>
				<image  style="width:40rpx; margin: auto;" mode="widthFix" :src="SearchIcon" />
			</template>
			<template #describe>
				<view>
					<label>Home</label>
				</view>
			</template>
		</ImgDescribeVue>
	</view>
	<view class="navigator-item">
		<ImgDescribeVue position="top" size="40">
			<template #media>
				<image  style="width:40rpx; margin: auto;" mode="widthFix" :src="SearchIcon" />
			</template>
			<template #describe>
				<view>
					<label>Home</label>
				</view>
			</template>
		</ImgDescribeVue>
	</view>
	<view class="navigator-item">
		<ImgDescribeVue position="top" size="40">
			<template #media>
				<image  style="width:40rpx; margin: auto;" mode="widthFix" :src="SearchIcon" />
			</template>
			<template #describe>
				<view>
					<label>Home</label>
				</view>
			</template>
		</ImgDescribeVue>
	</view>
	<!--  -->
	</view>
</template>

<script setup lang="ts">
	import ImgDescribeVue from '@/components/layout/img-describe.vue';
	import SearchIcon from '@/static/icon/search.svg'
</script>

<style lang="scss" scoped>
	.navigator {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: $bottom-navigator;
		box-sizing: content-box;
		box-shadow: 0 0 20px 0px #838484;
		background: transparent;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding: calc($base-padding / 2) calc($base-padding * 2);
		font-size: 24rpx;
	}
	:deep(.img-describe-media) {
		text-align: center;
	}
</style>