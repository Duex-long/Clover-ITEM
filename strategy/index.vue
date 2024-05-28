<template>
	<view class="app-strategy">
		<Home />
	</view>
</template>

<script lang="ts" setup>
	import Home from '@/strategy/home.vue'
</script>

<style lang="scss" scoped>
	.app-strategy {

		width: 100%;
		height: 100%;
		padding: 0 $base-padding;
		flex: 1;
		flex-grow: 0;
	}
</style>