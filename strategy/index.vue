<template>
	<view class="app-strategy">
		<component :is="renderComponent" />
	</view>
</template>

<script lang="ts" setup>
	import { computed, toRefs } from 'vue';
	import { useStrategyInfo } from '@/store/userinfo';
	const { pageinfo } = toRefs(useStrategyInfo())
	
	const renderComponent = computed(() => pageinfo.value.component)
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