<template>
	<view class="img-describe" :class="position" :style="wrapperStyle" >
		<view class="img-describe-media" :style="mediaStyle">
			<slot name="media" />
		</view>
		<view class="img-describe-content">
			<slot name="describe" default />
		</view>
	</view>
</template>


<script lang="ts" setup>
	import { computed } from 'vue';
	import { firstNameUpper } from '@/utils/stringPipe';
	const props = defineProps({
		position: {
			type: String,
			default: () => {
				return 'left'
			},
		},
		size: {
			type: [Number,String],
			default: () => 0
		},
	})


	const normalizedPx = computed(() => `${props.size}rpx`)

	const wrapperStyle = computed(() => ({
		['padding' + firstNameUpper(props.position)]: normalizedPx.value
	}))
	const mediaStyle = computed(() => ({
		[props.position.toLowerCase()]:'0',
		width:['left','right'].includes(props.position.toLowerCase()) ? normalizedPx.value : '100%',
		height:['top','bottom'].includes(props.position.toLowerCase()) ? normalizedPx.value : '100%',
	}))
</script>

<style lang="scss" scoped>
	.img-describe {
		position: relative;
		@include full-page;

		// padding:
	
	}

	.img-describe-media {
		position: absolute;
	}

	.img-describe-content {
		@include full-page;
	}
</style>