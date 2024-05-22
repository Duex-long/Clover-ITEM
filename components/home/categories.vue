<template>
	<view class="app-categories">
		<Title title="CATEGORIES">
			<SeeAll/>
		</Title>
	</view>
</template>

<script lang="ts" setup>
	import Title from '@/components/title.vue';
	import SeeAll from '@/components/see-all.vue';
	
</script>

<style lang="scss" scoped>
	.app-categories {
		height: 100%;
	}

</style>