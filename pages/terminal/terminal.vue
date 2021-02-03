<template>
	<view class="terminal-wrap">
		<!-- 终端汇总 -->
		<view class="box-content">
			<view class="title">
				<mol-title :titleInfo="titleInfo"></mol-title>
			</view>
			<view class="body">
				<view class="box">
					<view>状态</view>
					<view>在线</view>
					<view>离线</view>
					<view>总数</view>
				</view>
				<view class="box" v-for="(item, index) in terTotal" :key="index">
					<view class="status">{{item.status}}</view>
					<view @click="terListLink(item, 0)">{{item.online}}</view>
					<view class="outline" @click="terListLink(item, 1)">{{item.outline}}</view>
					<view @click="terListLink(item, 2)">{{item.total}}</view>
				</view>
			</view>
		</view>
		
		<!-- 终端离线告警 -->
		<view class="box-content">
			<view class="title">
				<mol-title :titleInfo="outlineTitle"></mol-title>
			</view>
			<view class="chart" @click="terAlarmList(outlineTitle)">
				<u-charts 
				:chartType="chartType" 
				:opts="outlineOpts" 
				:legendShow="legendShow" 
				:dataLabelShow="dataLabelShow" 
				:canvasId="outline" 
				:cWidth="350" 
				:cHeight="150">
				</u-charts>
			</view>
		</view>
		
		<!-- 终端性能告警 -->
		<view class="box-content">
			<view class="title">
				<mol-title :titleInfo="deviceTitle"></mol-title>
			</view>
			<view class="chart" @click="terAlarmList(deviceTitle)">
				<u-charts 
				:chartType="chartType" 
				:opts="deviceOpts" 
				:legendShow="legendShow" 
				:dataLabelShow="dataLabelShow" 
				:canvasId="deviceAlarm" 
				:cWidth="350" 
				:cHeight="150">
				</u-charts>
			</view>
		</view>
	</view>
</template>

<script>
	import molTitle from '@/components/common/mol-title/mol-title.vue'
	import uCharts from '@/components/u-charts/u-charts/u-charts.vue'
	export default {
		components: {
			molTitle,
			uCharts
		},
		data() {
			return {
				titleInfo: '终端汇总',
				terTotal: [
					{
						status: '空闲',
						online: '3',
						outline: '27',
						total: '30'
					},
					{
						status: '一般',
						online: '1',
						outline: '9',
						total: '10'
					},
					{
						status: '繁忙',
						online: '3',
						outline: '28',
						total: '31'
					},
					{
						status: '合计',
						online: '7',
						outline: '64',
						total: '71'
					}
				],
				listInfo: '终端列表',
				terList: [
					{
						title: '杭州-S912-接入层-14',
						city: '杭州市',
						ip: '192.168.202.94',
						terStatus: '在线',
						taskStatus: '繁忙'
					},
					{
						title: '杭州-S912-接入层-14',
						city: '杭州市',
						ip: '192.168.202.94',
						terStatus: '在线',
						taskStatus: '繁忙'
					},
					{
						title: '杭州-S912-接入层-14',
						city: '杭州市',
						ip: '192.168.202.94',
						terStatus: '在线',
						taskStatus: '繁忙'
					},
					{
						title: '杭州-S912-接入层-14',
						city: '杭州市',
						ip: '192.168.202.94',
						terStatus: '在线',
						taskStatus: '繁忙'
					},
					{
						title: '杭州-S912-接入层-14',
						city: '杭州市',
						ip: '192.168.202.94',
						terStatus: '在线',
						taskStatus: '繁忙'
					},
					{
						title: '杭州-S912-接入层-14',
						city: '杭州市',
						ip: '192.168.202.94',
						terStatus: '在线',
						taskStatus: '繁忙'
					},
					{
						title: '杭州-S912-接入层-14',
						city: '杭州市',
						ip: '192.168.202.94',
						terStatus: '在线',
						taskStatus: '繁忙'
					},
					{
						title: '杭州-S912-接入层-14',
						city: '杭州市',
						ip: '192.168.202.94',
						terStatus: '在线',
						taskStatus: '繁忙'
					},
					{
						title: '杭州-S912-接入层-14',
						city: '杭州市',
						ip: '192.168.202.94',
						terStatus: '在线',
						taskStatus: '繁忙'
					}
				],
				chartType: 'ring',
				legendShow: true,
				dataLabelShow: true,
				outlineTitle: '终端离线告警',
				outline: 'outline',
				outlineOpts: {
					title: '',
					total: '',
					series :[{
								"name": "1小时以内",
								"data": 4
							  }, {
								"name": "1~3小时",
								"data": 1
							  }, {
								"name": "3~24小时",
								"data": 31
							  }, {
								"name": "24小时以上",
								"data": 11
							  }]
				},
				deviceTitle: '终端性能告警',
				deviceAlarm: 'deviceAlarm',
				deviceOpts: {
					title: '',
					total: '',
					series :[{
								"name": "无",
								"data": 0
							  }]
				},
				
			}
		},
		// 监听状态栏增加按钮事件
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '../components/terminal-alarm/terminal-alarm'
			})
		},
		methods: {
			// 钻取终端列表
			terListLink(val, index) {
				// 0 在线   1 离线   2 总数
				console.log(val, index)
				uni.navigateTo({
					url: '../components/terminal-list/terminal-list'
				})
			},
			
			// 钻取告警列表
			terAlarmList(val) {
				console.log(val)
				uni.navigateTo({
					url: '../components/terminal-alarm/terminal-alarm'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.terminal-wrap {
		.box-content {
			background-color: #fff;
			margin: 10rpx 0 20rpx;
			padding: 20rpx;
			display: flex;
			flex-direction: column;
			.body {
				display: flex;
				flex-direction: column;
				.box {
					display: flex;
					justify-content: space-between;
					margin: 10rpx 0;
					font-size: 28rpx;
					.status {
						color: $theme-color;
					}
					.outline {
						color: #ff0000;
					}
				}
			}
			.ter-list {
				.ter-list-item {
					display: flex;
					flex-direction: column;
					border-bottom: 1px solid #ddd;
					padding: 10rpx 0;
					.item-flex {
						display: flex;
						justify-content: space-between;
						margin-bottom: 10rpx;
						font-size: 24rpx;
						color: #787777;
						.title {
							color: #474747;
							font-size: 28rpx;
						}
						.detail {
							// font-size: 28rpx;
							color: $theme-color;
						}	
					}
					.item-flex:last-child {
						margin-bottom: 0;
					}
				}
				.ter-list-item:last-child {
					border: none;
				}
			}
		}
	}
</style>
