<template>
	<view class="keywords">
		<view class="keyword-item">
			<ImgDescribeVue position="right" size="30">
				<template #media>
					<image :src="ARROW_RIGHT_SVG" style="width: 30rpx;" mode="widthFix" />
				</template>
				<template #describe>
					<span>KeyWord</span>
				</template>
			</ImgDescribeVue>
		</view>

	</view>
</template>
<!--  -->
<script lang="ts" setup>
	import { PropType } from 'vue';
	import { KeywordInterface } from '@/interface/shop/goods';
	import ImgDescribeVue from '@/components/layout/img-describe.vue';
	import ARROW_RIGHT_SVG from '@/static/icon/arrow_right.svg'

	defineProps({
		fixKeyword: {
			type: Object as unknown as PropType<KeywordInterface>,
			default: () => ({
				name: 'More',
				id: '1'
			})
		}
	})
</script>

<style lang="scss" scoped>
	.keywords {
		width: calc(100% + 80rpx);
		margin: 0 -40rpx 0 -40rpx;
		overflow: hidden;
		background: $primary-navigate;
	}

	.keyword-item {
		display: inline-block;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: no-wrap;
		box-sizing: border-box;
		padding: calc($base-padding / 6) calc($base-padding / 4);
		border: 1px solid #ccc;
		color: #ccc;
		font-size: 22rpx;
		border-radius: $box-radius;
		&:nth-child(n) {
			margin: 0 calc($base-padding / 4) 0 0;
		}
	}
</style>