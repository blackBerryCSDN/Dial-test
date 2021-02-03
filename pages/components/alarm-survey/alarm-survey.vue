<template>
	<view class="alarm-survey-wrap">
		<!-- 顶部tab -->
		<nav-tab :tabList="tabList" @tabItemClick="tabCurInfo"></nav-tab>
		
		<!-- 告警列表 -->
		<view class="alarm-list">
			<view class="alarm-list-item" v-for="(item, index) in alarmList" :key="index">
				<view class="item-flex">
					<view class="title">{{item.title}}</view>
					<view class="image">
						<image :src="item.src"></image>
					</view>
				</view>
				<view class="item-flex">
					<view class="time">
						告警时间：{{item.time}}
					</view>
				</view>
				<view class="item-flex">
					<view class="time" >
						状态：<span :style="{color: styleColor(item.status)}">{{item.status}}</span>
					</view>
					<view class="detail" @click="detailDialog(item)">
						详情
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
	import navTab from '@/components/common/nav-tab/nav-tab.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import detailDialog from '@/components/common/detail-dialog/detail-dialog.vue'
	export default {
		components: {
			navTab,
			uniPopup,
			detailDialog
		},
		data() {
			return {
				tabList: [
					{title: '全部', num: 12},{title: '一般', num: 15},{title: '次要', num: 12},{title: '重要', num: 15},{title: '严重', num: 12}
				],
				alarmList: [
					{
						id: 'alarm',
						title: '网页访问连续失败告警',
						src: '../../../static/image/alarm/alarm_second.png',
						status: '活动',
						time: '2020-09-08 12:30:21'
					},
					{
						id: 'alarm',
						title: '网页访问连续失败告警',
						src: '../../../static/image/alarm/alarm_import.png',
						status: '已清除',
						time: '2020-09-08 12:30:21'
					},
					{
						id: 'alarm',
						title: '网页访问连续失败告警',
						src: '../../../static/image/alarm/alarm_sort.png',
						status: '活动',
						time: '2020-09-08 12:30:21'
					},
					{
						id: 'alarm',
						title: '网页访问连续失败告警',
						src: '../../../static/image/alarm/alarm_serious.png',
						status: '已清除',
						time: '2020-09-08 12:30:21'
					},
				],
				detailInfo: {}
			}
		},
		methods: {
			// navtab点击切换
			tabCurInfo(e) {
				console.log(e)
			},
			
			// 打开告警详情弹窗
			detailDialog(val) {
				this.detailInfo = val
				this.$refs.popup.open()
			},
			
			// 关闭告警详情弹窗
			closeDialog() {
				this.$refs.popup.close()
				this.detailInfo = {}
			},
			
			// 告警状态颜色
			styleColor(val) {
				let str = "red"
				if (val === '活动') {
					str = "red"
				} else {
					str = "#409eff"
				}
				return str
			}
		}
	}
</script>

<style lang="scss" scoped>
	.alarm-survey-wrap {
		.alarm-list {
			.alarm-list-item {
				width: 100%;
				margin: 20rpx auto;
				background-color: #fff;
				display: flex;
				flex-wrap: wrap;
				align-content: space-between;
				padding: 20rpx;
				.item-flex {
					flex-basis: calc(100% - 40rpx);
					display: flex;
				    justify-content: space-between;
					.title {
						// font-weight: bold;
					}
					.image {
						width: 32rpx;
						height: 32rpx;
						image {
							width: 100%;
							height: 100%;
						}
					}
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
		}
	}
</style>
