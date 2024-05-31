<template>
	<view class="app-strategy">
		<component :is="renderComponent" />
	</view>
</template>

<script lang="ts" setup>
	import { computed, onMounted, toRefs } from 'vue';
	import { useStrategyInfo } from '@/store/userinfo';
	const strategyInfo = useStrategyInfo()
	const { pageinfo } = toRefs(strategyInfo)
	
	const renderComponent = computed(() => pageinfo.value.component)
	
	onMounted(() => {
		strategyInfo.push("shop")
	})
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