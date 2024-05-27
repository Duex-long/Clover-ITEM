<template>
	<view class="app-recommend">
		<Title title="FOR YOU">
			<SeeAll />
		</Title>
		
		<view class="recommend-list">
			<RecommendItem/>
		
	
		</view>
	</view>
</template>

<script lang="ts" setup>
	import Title from '@/components/title.vue';
	import SeeAll from '@/components/see-all.vue';
	import RecommendItem from '@/components/home/recommend-item.vue';
	import { toRefs } from 'vue';
	import { useBaseInfo,useUserinfo } from '@/store/userinfo';
	
	const { baseInfo } = toRefs(useBaseInfo())
	const { userinfo } = toRefs(useUserinfo())
</script>

<style lang="scss" scoped>
	.recommend-list {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>