<template>
	<view class="terminal-alarm-wrap">
		<!-- 告警列表 -->
		<view class="content-box">
			<view class="title">
				<mol-title :titleInfo="listTitle"></mol-title>
			</view>
			<view class="body">
				<view class="alarm-list-item" v-for="(item, index) in alarmList" :key="index">
					<view class="item-flex">
						<view class="title">{{item.title}}</view>
						<view class="time">
							{{item.time}}
						</view>
					</view>
					<view class="item-flex">
						<view class="time">
							告警类型：{{item.type}}
						</view>
						<view class="detail" @click="detailDialog(item)">
							详情
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 告警详情弹窗 -->
		<uni-popup id="popup" ref="popup" type="center">
			<detail-dialog :detailInfo="detailInfo" @closeDialog="closeDialog"></detail-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import molTitle from '@/components/common/mol-title/mol-title.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import detailDialog from '@/components/common/detail-dialog/detail-dialog.vue'
	export default {
		components: {
			molTitle,
			uniPopup,
			detailDialog
		},
		data() {
			return {
				listTitle: '告警列表',
				alarmList: [
					{
						id: 'alarm',
						title: '魔百和-aptest-214',
						type: '终端中断告警',
						time: '2020-09-08 12:30:21'
					},
					{
						id: 'alarm',
						title: '魔百和-aptest-214',
						type: '终端中断告警',
						time: '2020-09-08 12:30:21'
					},
					{
						id: 'alarm',
						title: '魔百和-aptest-214',
						type: '终端中断告警',
						time: '2020-09-08 12:30:21'
					}
				],
				detailInfo: {}
			}
		},
		methods: {
			// 打开告警详情弹窗
			detailDialog(val) {
				this.detailInfo = val
				this.$refs.popup.open()
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
	.terminal-alarm-wrap {
		.content-box {
			background-color: #fff;
			margin: 20rpx 0;
			padding: 20rpx;
			display: flex;
			flex-direction: column;
			.alarm-list-item {
				width: 100%;
				margin: 10rpx auto;
				background-color: #fff;
				display: flex;
				flex-wrap: wrap;
				align-content: space-between;
				border-bottom: 1px solid #ddd;
				padding-bottom: 20rpx;
				.item-flex {
					flex-basis: 100%;
					display: flex;
				    justify-content: space-between;
					.time {
						font-size: 28rpx;
						color: #787777;
					}
					.detail {
						font-size: 28rpx;
						color: $theme-color;
					}	
				}
				.item-flex:first-child {
					margin-bottom: 10rpx;
				}
			}
			.alarm-list-item:last-child {
				border-bottom: none;
				padding-bottom: 0;
			}
		}
	}
</style>
