<template>
	<view>
		<view class="counter">
			<text class="reduce-add" @click="addReduce(0)">-</text>
			<text class="amount" v-text="counter"></text>
			<text class="reduce-add" @click="addReduce(1)">+</text>
			 {{unit}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			count: {
				type: Number,
				default: 1
			},
			unit: {
				type: String,
				default: '次'
			}
		},
		data() {
			return {
				counter: 1
			}
		},
		created() {
			this.counter = this.count
		},
		methods: {
			// 增加,减少按钮 id为0减少，为1增加
			addReduce(id) {
				if(id === 0) {
					if(this.counter > 1) {
					this.counter--
					this.$emit('countNum',this.counter)
					}
				}else {
					this.counter++
					this.$emit('countNum',this.counter)
					}
			}
		}
	}
</script>

<style lang="scss" scoped>
.counter {
	margin-left: 12rpx;
	font-size: 28rpx;
	vertical-align: bottom;
	display: inline-block;
	.reduce-add {
		display: inline-block;
		border: 1px solid #707070;
		width: 78rpx;
		height: 69rpx;
		line-height: 69rpx;
		text-align: center;
		font-size: 46rpx;
		vertical-align: middle;
	}
	.reduce-add:first-child {
		border-radius: 6rpx 0 0 6rpx;
	}
	.reduce-add:last-child {
		border-radius: 0 6rpx 6rpx 0;
		margin-right: 10rpx;
	}
	.amount {
		display: inline-block;
		width: 120rpx;
		height: 69rpx;
		line-height: 69rpx;
		text-align: center;
		border-top: 1px solid #707070;
		border-bottom: 1px solid #707070;
		vertical-align: middle;
		color: #000;
	}
}
</style>
