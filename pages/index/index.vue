<template>
	<view class="app-wrapper">
		<NavBar/>
		<view class="app-content">
			
			<Home/>
		</view>
		<Navigator/>
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
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		background: $primary-bg;
	}
	.app-content {
		width: 100%;
		padding: 0 $base-padding;
		flex: 1;
	}
</style>