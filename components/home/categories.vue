<!-- 类别列表 -->
<template>
	<view class="app-categories">
		<Title title="CATEGORIES">
			<SeeAll />
		</Title>
		<scroll-view scroll-x class="categories-list" :show-scrollbar="false">
			<view class="categories-list-circle">
				<image class="circle-img " mode="widthFix" :src="MenuIcon" />
				<label class="circle-label">All</label>
			</view>
			<view class="categories-list-circle" v-for="item in baseInfo.categoryCollection" :key="item.id">
				<image class="circle-img " mode="widthFix" :src="MenuIcon" />
				<label class="circle-label">{{ item.name }}</label>
			</view>
		</scroll-view>
	</view>
</template>

<script lang="ts" setup>
	import Title from '@/components/title.vue';
	import SeeAll from '@/components/see-all.vue';
	import MenuIcon from '@/static/icon/menu.svg'
	import { toRefs } from 'vue';
	import { useBaseInfo } from '@/store/userinfo';
	const { baseInfo } = toRefs(useBaseInfo())
</script>

<style lang="scss" scoped>
	.app-categories {
		height: 100%;
	}

	.categories-list {
		height: 120rpx;
		padding: calc($base-padding / 2) 0 0;
		width: 100%;
		white-space: nowrap;
	}

	.categories-list-circle {
		display: inline-block;
		height: 100%;
		width: calc(120rpx - $base-padding);
		overflow: hidden;

		&:nth-child(n-1) {
			margin-right: 20rpx;
		}

		.circle-img {
			width: 50rpx;
		}

		.circle-label {
			width: 50rpx;
			display: block;
			text-align: center;
			font-size: 24rpx;
			vertical-align: bottom;
		}

	}
</style>