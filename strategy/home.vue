<template>
	<view class="app-home">
		<Userinfo/>
		<view class="app-search">
			<ImgDescribeVue position="right" size="100">
				<template #media>
					<view class="menu-icon">
						<view class="menu-icon-wrapper">
						<image :src="MenuIcon" mode="widthFix" style="width: 40rpx;" />
						</view>
					</view>
				</template>
				<template #describe>
					<Search/>
				</template>
			</ImgDescribeVue>
		</view>
		<Carousel/>
		<Categories />
		<Recommend/>
	</view>
</template>

<script lang="ts" setup>
	import Userinfo from '@/components/userinfo.vue';
	import ImgDescribeVue from '@/components/layout/img-describe.vue';
	import Carousel from '@/components/home/carousel.vue';
	import Categories from '@/components/home/categories.vue';
	import Recommend from '@/components/home/recommend.vue';
	import Search from '@/components/search.vue';
	import MenuIcon from '@/static/icon/menu.svg'
	
</script>

<style lang="scss" scoped>
	.app-home {
		& > *{
			margin-bottom: $base-padding;
		}
		& > *:nth-last-child(1){
			margin-bottom: 0;
			padding-bottom: calc($base-padding / 1.5) ;
		}
	}

	.app-search {
		width: 100%;
		height: 80rpx;
	}
	
	.menu-icon {
		@include full-page;
		@include flex-c-c;
		justify-content: flex-end;
	}
	.menu-icon-wrapper {
		height: 80rpx;
		width: 80rpx;
		background-color: #000;
		border-radius: $box-radius;
		@include flex-c-c;
	}

</style>