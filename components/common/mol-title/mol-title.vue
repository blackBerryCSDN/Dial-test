<template>
	<view class="title-body">
		<view class="left">
			<view class="pillar">{{titleInfo}}</view> 
			<text v-if="followShow" class="creater"> - 创建人：{{createrInfo}}</text>
		</view>
		<view class="right">
			<text v-if="setShow" @click="setDialog" class="set iconfont iconshezhi"></text>
			<text v-if="delShow" @click="deleteList" class="delete iconfont iconshanchu"></text>
			<text v-if="followShow" class="follow" @click="clickFollow">{{follow}}</text>
		</view>
		
		<!-- 组件设置弹窗 -->
		<uni-popup id="popup" ref="popup" type="center">
			<setting-dialog :titleInfo="titleInfo" @closeDialog="closeDialog"></setting-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import settingDialog from '@/components/common/setting-dialog/setting-dialog.vue'
	export default {
		components: {
			uniPopup,
			settingDialog
		},
		props: {
			titleInfo: {
				type: String,
				default: ''
			},
			setShow: {
				type: Boolean,
				default: false
			},
			delShow: {
				type: Boolean,
				default: false
			},
			followShow: {
				type: Boolean,
				default: false
			},
			followInfo: {
				type: Boolean,
				default: false
			},
			createrInfo: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				
			}
		},
		computed: {
			follow(){
				return this.followInfo == true ? '关注' : '取消关注'
			}
		},
		mounted() {
			
		},
		methods: {
			// 组件设置
			setDialog() {
				this.$refs.popup.open()
			},
			
			// 删除
			deleteList() {
				uni.showModal({
				    title: '提示',
				    content: '确定删除该组件吗？',
				    success: res=> {
				        if (res.confirm) {
				            this.$emit('deleteArr', this.titleInfo)
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				
			},
			
			// 关注事件
			clickFollow(){
				this.followInfo = !this.followInfo
			},
			
			// 关闭告警详情弹窗
			closeDialog() {
				this.$refs.popup.close()
				this.detailInfo = {}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.title-body {
		padding-bottom: 20rpx;
		border-bottom: 1px solid #e7e7e7;
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.pillar {
				border-left: 3px solid $theme-color;
				padding-left: 8rpx;
				line-height: 36rpx;
			}
			.creater {
				font-size: 28rpx;
				color: #353535;
			}
		}
		.right {
			.set {
				font-size: 40rpx;
				color: $theme-color;
			}
			.delete {
				font-size: 40rpx;
				color: #ff4040;
			}
			.follow {
				color: #fff;
				background-color: #edbe4d;
				padding: 6rpx 20rpx;
				font-size: 24rpx;
				border-radius: 16px;
			}
		}
	}
</style>
