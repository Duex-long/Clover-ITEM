<!-- 分类 -->
<template>
	<view class="app-shop">
		<!-- 分类 -->
		<Keywords/>
	</view>
</template>

<script lang="ts" setup>
		import Keywords from '@/components/goods/keywords.vue';
</script>

<style lang="scss" scoped>
	.app-shop {
		& > *{
			margin-bottom: $base-padding;
		}
		& > *:nth-last-child(1){
			margin-bottom: 0;
			padding-bottom: calc($base-padding / 1.5) ;
		}
	}
	
</style>