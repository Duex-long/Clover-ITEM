<template>
	<view class="app-wrapper">
		<NavBar />
		<scroll-view class="app-scroll-wrapper" scroll-y>
			<view class="app-content">
				<Home />
			</view>
		</scroll-view>
		<Navigator />
	</view>
</template>

<script setup lang="ts">
	import NavBar from '@/components/nav-bar.vue';
	import Navigator from '@/components/navigator.vue'
	import Home from '@/strategy/home.vue'
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
	}

	.app-content {
		width: 100%;
		height: 100%;
		padding: 0 $base-padding;
		flex: 1;
		flex-grow: 0;
	}
	.app-scroll-wrapper {
		@include full-page;
		padding-bottom: $bottom-navigator;
	}
</style>