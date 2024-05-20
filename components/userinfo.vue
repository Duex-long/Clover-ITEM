<template>
	<view class="app-user-bar"></view>
</template>

<script setup lang="ts">
import { useUserinfo } from '@/store/userinfo';

const userinfo = useUserinfo()
console.log(userinfo,'111')
	
</script>

<style scoped lang="scss">
	.app-user-bar {
		width: 100%;
		height: 80rpx;
	}
</style>