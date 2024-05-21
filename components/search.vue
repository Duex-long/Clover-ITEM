<template>
	<view class="app-search">
		<ImgDescribeVue size="80" position="left">
			<template #media>
				<view class="app-search-icon">
					<image :src="SEARCH_SVG" mode="widthFix" style="width: 40rpx;" />
				</view>
			</template>
			<template #describe>
				<view class="app-search-insert">
					<input v-model="searchValue" placeholder="search product" />
				</view>
			</template>
		</ImgDescribeVue>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
import ImgDescribeVue from '@/components/layout/img-describe.vue';
	const SEARCH_SVG = "https://developer.mozilla.org/static/media/search.cebfd63a204ba9fefa74.svg"
	
	const searchValue = ref("")
</script>

<style lang="scss" scoped>
	.app-search {
		width: 100%;
		height: 80rpx;
		background-color: #fff;
	}
	.app-search-icon {
		@include full-page;
		@include flex-c-c;
	}
	.app-search-insert {
		@include full-page;
		@include flex-c-c;
		justify-content: flex-start;
	}
</style>