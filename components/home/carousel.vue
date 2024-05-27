<template>
	<view class="carousel">
		<view class="carousel-wrapper">
			<swiper class="swiper" next-margin="20%" circular>
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>

			</swiper>
		</view>
	</view>
</template>

<script lang="ts" setup>
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
	.swiper-item {
		width: 95%;
		height: 240rpx;
		border-radius: $box-radius;
	}
	.uni-bg-red {
		background-color: red;
	}
	.uni-bg-green{
		background-color: green;
	}
	.uni-bg-blue {
		background-color: blue;
	}
</style>