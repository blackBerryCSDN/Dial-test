<template>
	<view class="alarm-summary-wrap">
		<!-- 我的告警 -->
		<view class="alarm-top">
			<view class="circle" @click="alarmSurvey">
				<view class="name">我的告警</view>
				<view class="num">172</view>
			</view>
		</view>
		
		<view class="summary-content" v-for="(item, index) in sumList" :key="index">
			<!-- 告警图例 -->
			<view class="item">
				<u-charts 
				:chartType="item.chartType" 
				:opts="item.opts" 
				:canvasId="'canvas' + index" 
				:cWidth="177" 
				:cHeight="160">
				</u-charts>
			</view>
			
			<!-- 告警数据统计 -->
			<view class="item">
				<view class="number-item">
					<view class="list">
						<view class="num" @click="alarmSurvey">{{item.serious}}</view>
						<view class="serious">严重 {{item.seriousRate}}</view>
					</view>
					<view class="list">
						<view class="num" @click="alarmSurvey">{{item.import}}</view>
						<view class="import">重要 {{item.importRate}}</view>
					</view>
				</view>
				<view class="number-item">
					<view class="list bordet">
						<view class="num" @click="alarmSurvey">{{item.commonly}}</view>
						<view class="commonly">一般 {{item.commonlyRate}}</view>
					</view>
					<view class="list bordet">
						<view class="num" @click="alarmSurvey">{{item.minor}}</view>
						<view class="minor">次要 {{item.minorRate}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts/u-charts.vue'
	export default {
		components: {
			uCharts
		},
		data() {
			return {
				sumList: [
					{
						total: '47',
						serious: '4',
						seriousRate: '8%',
						import: '1',
						importRate: '2%',
						commonly: '31',
						commonlyRate: '65%',
						minor: '11',
						minorRate: '23%',
						chartType: 'ring',
						opts: {
							title: '待确认',
							total: '47',
							series :[{
										"name": "严重",
										"data": 4
									  }, {
										"name": "重要",
										"data": 1
									  }, {
										"name": "一般",
										"data": 31
									  }, {
										"name": "次要",
										"data": 11
									  }]
						}			
					},
					{
						total: '125',
						serious: '17',
						seriousRate: '13%',
						import: '87',
						importRate: '85%',
						commonly: '11',
						commonlyRate: '0%',
						minor: '10',
						minorRate: '0%',
						chartType: 'ring',
						opts: {
							title: '已确认',
							total: '125',
							series :[{
										"name": "严重",
										"data": 17
									  }, {
										"name": "重要",
										"data": 87
									  }, {
										"name": "一般",
										"data": 11
									  }, {
										"name": "次要",
										"data": 10
									  }]
						}	
					}
				]
			}
		},
		methods: {
			// 跳转告警概况
			alarmSurvey() {
				uni.navigateTo({
					url: '../alarm-survey/alarm-survey'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.alarm-summary-wrap {
		.alarm-top {
			padding: 40rpx 0;
			.circle {
				width: 280rpx;
				height: 280rpx;
				background-image: linear-gradient(#9fceff, #409eff);
				margin: 0 auto;
				border-radius: 50%;
				text-align: center;
				color: #fff;
				display: flex;
				flex-direction: column;
				align-content: center;
				.name {
					margin: 70rpx 0 10rpx;
				}
				.num {
					font-size: 60rpx;
					font-weight: bold;
				}
			}
			
		}
		.summary-content {
			margin-bottom: 20rpx;
			display: flex;
			// height: 400rpx;
			padding: 20rpx;
			background-color: #fff;
			.item {
				flex: 1;
				text-align: center;
				display: flex;
				flex-direction: column;
				.number-item {
					flex: 1;
					// padding: 20rpx 10rpx;
					display: flex;
					.list {
						flex: 1;
						padding: 20rpx 10rpx;
						border-bottom: 1px solid #ddd;
						.num {
							font-size: 36rpx;
							font-weight: bold;
							margin-bottom: 10rpx;
						}
						.serious {
							color: #fe2525;
						}
						.import {
							color: #fb7d2a;
						}
						.commonly {
							color: #fccd31;
						}
						.minor {
							color: #1a8ffa;
						}
					}
					.bordet {
						border-bottom: none;
					}
					.list:nth-child(1) {
						border-right: 1px solid #ddd;
					}
				}
			}
		}
	}
</style>
