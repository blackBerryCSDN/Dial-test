<template>
	<view class="compare-report">
		<view class="target">
			<view class="item-target" v-for="(item, index) in targetList" :key='index' @click="changeNum(index)" :class="{'active':activeIndex==index}">
				<text>{{item.name}}</text>
				<text>{{item.value}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			targetList: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				activeIndex: 0,
			}
		},
		methods: {
			changeNum(index){
				this.activeIndex = index;
				uni.$emit('targetChange', index)
			}
			
		}
	}
</script>

<style lang="scss">
	.compare-report {
		.target {
			display: flex;
			.item-target {
				display: flex;
				flex-direction: column;
				border: 1px solid #ddd;
				border-radius: 4px;
				margin: 10rpx;
				padding: 4rpx 24rpx;
				align-items: center;
				text {
					font-size: 24rpx;
				}
			}
			.active {
				color: $theme-color;
				border: 1px solid $theme-color;
			}
		}
	}
</style>
