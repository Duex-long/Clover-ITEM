<template>
	<view class="app-home">
		<Userinfo/>
		<Search/>
	</view>
</template>

<script lang="ts" setup>
	import Userinfo from '@/components/userinfo.vue';
	import Search from '@/components/search.vue';
	
</script>

<style lang="scss" scoped>
	.app-home {
		view:nth-child(n) {
			margin-bottom: $base-padding;
		}
	}

</style>