<template>
	<view class="app-user-bar">
		<ImgDescribeVue size="80" position="left">
			<template #media>
				<view class="app-user-avatar">
					<image style="width: 80rpx;" mode="widthFix" :src="userinfo.avatar"/>
				</view>
			</template>
			<template #describe>
				<view class="app-user-info">
					<ImgDescribeVue size="60" position="right">
						<template #media>
							<image style="width: 40rpx;" mode="widthFix" src="https://developer.mozilla.org/static/media/theme-dark.2204a73b9b7fbc5e0219.svg" />
						</template>
						<template #describe>
							<label class="app-user-name">Hello {{ userinfo.name }}</label>
							<view class="app-user-welcome">What Do You Want?</view>
						</template>
						
					</ImgDescribeVue>
					
				</view>
			</template>
		</ImgDescribeVue>
	</view>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import ImgDescribeVue from '@/components/layout/img-describe.vue';
import { useUserinfo } from '@/store/userinfo';

const {userinfo} = toRefs(useUserinfo())


</script>


<style scoped lang="scss">
	.app-user-bar {
		position: relative;
		width: 100%;
		height: 80rpx;
		background-color: transparent;
	}
	.app-user-avatar {
		height: 100%;
		width: 100%;
		@include flex-c-c;
		border-radius: 100%;
		overflow: hidden;
	}
	.app-user-info {
		@include full-page;
		display: flex;
		padding-left: $base-padding/2;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
	}
	.app-user-name {
		color: #ccc;
		opacity: .4;
		font-size: 24rpx;
	}
	.app-user-welcome {
		color: #fff;
		font-size: 28rpx;
	}
</style>