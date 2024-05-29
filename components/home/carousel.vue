<template>
	<view class="carousel">
		<view class="carousel-wrapper">
			<template v-if="length > 1">
				<swiper class="swiper" next-margin="20%" circular>
					<swiper-item>
						<view class="swiper-item uni-bg-red">A</view>
					</swiper-item>
				</swiper>
			</template>
			<template v-else>
				<view class="only-slider"></view>
			</template>
		</view>
	</view>
</template>

<script lang="ts" setup>
	const length = 1
	// import { toRefs } from 'vue';
	// import { useBaseInfo } from '@/store/userinfo';
	// const { baseInfo } = toRefs(useBaseInfo())
</script>

<style lang="scss" scoped>
	.carousel {
		width: 100%;
	}

	.carousel-wrapper {
		width: 100%;
		height: 240rpx;
		overflow: hidden;
	}

	.swiper {
		height: 100%;
	}

	.only-slider {
		@include full-page;
		background-color: red;
		border-radius: $box-radius;

	}

	.swiper-item {
		width: 95%;
		height: 240rpx;
		border-radius: $box-radius;
	}

	.uni-bg-red {
		background-color: red;
	}

	.uni-bg-green {
		background-color: green;
	}

	.uni-bg-blue {
		background-color: blue;
	}
</style>