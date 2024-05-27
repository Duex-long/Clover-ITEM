<template>
	<view class="app-wrapper">
		<scroll-view class="app-scroll-wrapper" scroll-y>
			<NavBar />
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
		background: $primary-bg;
		@include safe-area-inset-bottom;
	}

	.app-content {
		width: 100%;
		padding: 0 $base-padding;
		flex: 1;
	}
	.app-scroll-wrapper {
		@include full-page;
		padding-bottom: $bottom-navigator;
	}
</style>