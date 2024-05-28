<template>
	<view class="app-wrapper">
		<NavBar />
		<scroll-view class="app-scroll-wrapper" scroll-y>
			<StrategyIndex/>
		</scroll-view>
		<Navigator />
	</view>
</template>

<script setup lang="ts">
	import NavBar from '@/components/nav-bar.vue';
	import Navigator from '@/components/navigator.vue'
	import StrategyIndex from '@/strategy/index.vue';
	import { ref } from 'vue';
	const title = ref<string>('')
</script>

<style scoped lang="scss">
	.app-wrapper {
		position: relative;
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		@include safe-area-inset-bottom;
		background: $primary-bg;
		padding-top: calc($base-padding * 2);
	}

	.app-scroll-wrapper {
		@include full-page;
		padding-bottom: $bottom-navigator;
	}
</style>