<template>
	<view class="ct_tab">
		<view class="ct_item" v-for="(item, index) in tabList" :class="{'ct_active' : tabCur == index}" :key="index" @click="clickCtTab(index)">
			<text>{{item.title}}</text>
			<view v-show="tabCur == index" class="num" :style="{right: rightStyle}">{{item.num}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			tabList: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				tabCur:0,
			}
		},
		created() {
			// console.log(this.tabList.length)
		},
		computed: {
			rightStyle() {
				var str = '4%';
				const _this = this;
				switch(_this.tabList.length) {
					case 2:
					str = '25%'
					break
					default:
					str = '4%'
					break
				}
				return str
			}
		},
		methods: {
			 clickCtTab(index){
				 this.tabCur = index;
				 this.$emit('tabItemClick', index)
			 }
		}
	}
</script>

<style lang="scss">
	.ct_tab{
	    width: 100%;
	    margin: 0 auto;
	    padding: 20rpx 0;
	    font-size: 28rpx;
	    font-weight: bold;
	    color: #717171;
	    display: flex;
		background-color: #fff;
	    align-items: center;
		.ct_item{
		    flex: 1;
			text-align: center;
			border-right: 1px solid #d9d9d9;
			position: relative;
			text{
			    padding: 18rpx 0;
			}
			.num {
				color: #fff;
				background-color: #f2092a;
				padding: 2rpx 10rpx;
				font-size: 16rpx;
				border-radius: 10px;
				position: absolute;
				top: -8rpx;
				right: 4%;
			}
		}
		.ct_item:last-child {
			border: none;
		}
		.ct_active{
		    color: #409eff;
		}
		.ct_active text{
		    border-bottom: 2px solid #409eff;
		}
	}
	
</style>
