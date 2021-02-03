<template>
	<view class="detail-dialog-wrap">
		<view class="popup-content">
			<view class="popup-header" :class="classType">{{title}}</view>
			<view class="popup-body">
				<view v-if="detailInfo.id == 'scene'">
					<view>任务名称：{{detailInfo.taskName}}</view>
					<view>任务类型：{{detailInfo.taskType}}</view>
					<view>任务状态：{{detailInfo.taskStatus}}</view>
					<view>测试项目：{{detailInfo.testItem}}</view>
					<view>终端总数：{{detailInfo.total}}</view>
					<view>终端等待：{{detailInfo.wait}}</view>
					<view>终端暂停：{{detailInfo.suspend}}</view>
					<view>正在执行：{{detailInfo.executing}}</view>
					<view>执行完成：{{detailInfo.complete}}</view>
				</view>
				<view v-else>
					<view>告警名称：{{detailInfo.title}}</view>
					<view>告警时间：{{detailInfo.time}}</view>
					<view>任务级别：严重</view>
				</view>
			</view>
			<view class="popup-footer">
				<button class="btn-style" @click="define">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		props: {
			detailInfo: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				title: '',
				classType: ''
			}
		},
		created() {
			console.log(this.detailInfo)
			this.init()
		},
		methods: {
			init() {
				this.title = this.detailInfo.id == 'scene' ? '任务详情' : '告警详情'
				this.classType = this.detailInfo.id == 'scene' ? 'task' : 'alarm'
			},
			
			// 确定
			define() {
				this.$emit('closeDialog')
			}
		}
	}
</script>

<style lang="scss">
	.detail-dialog-wrap {
		.popup-content {
			width: 600rpx;
			display: flex;
			height: 100%;
			flex-direction: column;
			align-content: space-between;
			background-color: #fff;
			.popup-header {
				padding: 20rpx;
				height: 150rpx;
				text-align: center;
				color: #fff;
			}
			.task {
				background-image: url(../../../static/image/dialog/scene_bg.png);
				background-size: 100% 100%;
			}
			.alarm {
				background-image: url(../../../static/image/dialog/alarm_bg.png);
				background-size: 100% 100%;
			}
			.popup-body {
				padding: 10rpx 20rpx;
				color: #909090;
				font-size: 28rpx;
				view {
					margin: 6rpx;
				}
			}
			.popup-footer {
				padding: 20rpx;
				.btn-style {
					background-color: $theme-color;
					line-height: 66rpx;
					color: #fff;
				}
			}
		}
	}	
</style>
