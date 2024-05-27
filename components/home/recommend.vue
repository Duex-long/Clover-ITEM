<template>
	<view class="app-recommend">
		<Title title="FOR YOU">
			<SeeAll />
		</Title>
	</view>
</template>

<script lang="ts" setup>
	import Title from '@/components/title.vue';
	import SeeAll from '@/components/see-all.vue';
	import { toRefs } from 'vue';
	import { useBaseInfo,useUserinfo } from '@/store/userinfo';
	
	const { baseInfo } = toRefs(useBaseInfo())
	const { userInfo } = toRefs(useUserinfo())
</script>

<style lang="scss" scoped>
</style>