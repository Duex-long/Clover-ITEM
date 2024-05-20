<template>
	<view class="img-describe">
		<view class="img-describe-media"></view>
		<view class="img-describe-content"></view>
	</view>
</template>

<script lang="ts" setup>
	const POSITION = ['top','left','right','bottom']

	defineProps({
		position:{
			type:String,
			default:(raw:string) => {
				const lowerRaw = raw.toLocaleLowerCase()
				return POSITION.includes(lowerRaw) ? raw.toLowerCase() : 'left'
			},
			size:{
				type:Number,
				default:(val:number) => `${val}rpx`
			},
		}
	})
</script>

<style lang="scss" scoped>
	.img-describe {
		position: relative;
		@include full-page
		// padding:
	}
	.img-describe-media {
		position: absolute;
		height:v-bind(size) ;
		width:v-bind(size) ;
	}
	.img-describe-content {
		
	}
</style>