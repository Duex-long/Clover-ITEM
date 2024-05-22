<template>
	<view class="search">
		<ImgDescribeVue size="80" position="left">
			<template #media>
				<view class="search-icon">
					<image :src="SEARCH_SVG" mode="widthFix" style="width: 40rpx;" />
				</view>
			</template>
			<template #describe>
				<view class="search-insert">
					<input v-model="searchValue" placeholder="search product" />
				</view>
			</template>
		</ImgDescribeVue>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
    import ImgDescribeVue from '@/components/layout/img-describe.vue';
	import SEARCH_SVG from '@/static/icon/search.svg'
	
	const searchValue = ref("")
</script>

<style lang="scss" scoped>
	.search {
		width: 100%;
		height: 80rpx;
		background-color: #fff;
		border-radius: $box-radius;
	}
	.search-icon {
		@include full-page;
		@include flex-c-c;
	}
	.search-insert {
		@include full-page;
		@include flex-c-c;
		justify-content: flex-start;
	}
</style>