<template>
	<view class="app-user-bar"></view>
</template>

<script setup lang="ts">
import { useUserinfo } from '@/store/userinfo';

const userinfo = useUserinfo()

console.log(userinfo.name)
</script>

<style scoped lang="scss">
	.app-user-bar {
		position: relative;
		width: 100%;
		height: 80rpx;
		background-color: #fff;
	    padding-left: 60px;
	}
</style>