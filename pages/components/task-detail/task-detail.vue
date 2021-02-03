<template>
	<view class="task-detail-wrap">
		<!-- 基本信息 -->
		<view class="box-content">
			<view class="title">
				<mol-title :titleInfo="titleInfo"></mol-title>
			</view>
			<view class="ter-list">
				<view class="ter-list-item">
					<view class="title">名称：CDN例行测试_20201205110503_root</view>
					<view>创建时间：2020-12-05 11:05:49 </view>
					<view>下达人: root</view>
					<view>业务数量: 2</view>
					<view>终端数量: 1</view>
					<view>状态: 正在执行</view>
					<view>执行方式: 例行任务</view>
					<view>优先级: 高</view>
					<view>例行方式: 按天</view>
					<view>有效时间: 2020-12-05 11:05:03 到 永久</view>
					<view>任务间隔: 每隔5分钟执行一次,最大时限0分钟</view>
					<view>执行时间点: 每00:00|01:00|02:00|03:00点分开始执行</view>
				</view>
			</view>
		</view>
		
		<!-- 业务 -->
		<view class="box-content">
			<view class="title">
				<mol-title :titleInfo="taskInfo"></mol-title>
			</view>
			<view class="task-list" v-for="(item, index) in taskList" :key="index">
				<view class="task-item" :class="activeIndex === index? 'active':''" @click="changeActive(index)">
					<view>{{item.title}}</view>
					<view class="delete iconfont iconshezhi" @click="setInfo(item)"></view>
				</view>
			</view>
		</view>
		
		<!-- 测试终端(卡) -->
		<view class="box-content">
			<view class="title">
				<mol-title :titleInfo="testInfo"></mol-title>
			</view>
			<view class="tast-list">
				<view class="tast-item" v-for="(item, index) in tastList" :key="index">
					<view>{{item.title}}</view>
				</view>
			</view>
		</view>
		
		<!-- 测试资源 -->
		<view class="box-content">
			<view class="title">
				<mol-title :titleInfo="resourseInfo"></mol-title>
			</view>
			<view class="tast-list">
				<view class="tast-item" v-for="(item, index) in resourseList" :key="index">
					<view>{{item.title}}</view>
				</view>
			</view>
		</view>
		
		<!-- 配置信息弹窗 -->
		<uni-popup id="popup" ref="popup" type="center">
			<config-dialog :titleInfo="configTitle" @closeDialog="closeDialog"></config-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import molTitle from '@/components/common/mol-title/mol-title.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import configDialog from '@/components/common/config-dialog/config-dialog.vue'
	export default {
		components: {
			molTitle,
			uniPopup,
			configDialog
		},
		data() {
			return {
				titleInfo: '基本信息',
				taskInfo: '业务',
				testInfo: '测试终端(卡)',
				resourseInfo: '测试资源',
				// 业务
				taskList: [
					{
						title: 'WEB视频'
					},
					{
						title: 'HTTP文件下载'
					}
				],
				activeIndex: 0,
				// 测试终端(卡)
				tastList: [
					{
						title: '测试<->mybatis1'
					}
				],
				// 测试资源
				resourseList: [
					{
						title: '新浪：http://open.sina.com.cn/course/id_686/'
					},
					{
						title: '乐视：http://www.le.com/ptv/vplay/25570990.html'
					}
				],
				configTitle: '配置信息' // 配置信息弹窗
			}
		},
		onLoad(option) {
			console.log(option.id)
		},
		methods: {
			// 业务切换
			changeActive(index) {
				this.activeIndex = index
				switch(index){
					case 0:
						this.tastList = [
							{
								title: '测试<->mybatis1'
							},
						];
						this.resourseList = [
							{
								title: '新浪：http://open.sina.com.cn/course/id_686/'
							},
							{
								title: '乐视：http://www.le.com/ptv/vplay/25570990.html'
							}
						]
						break;
					case 1:
						this.tastList = [
							{
								title: '测试<->mybatis1'
							},
							{
								title: '测试<->mybatis2'
							},
						];
						this.resourseList = [
							{
								title: '爱奇艺：http://www.iqiyi.com/v_19rrl4vvgw.html#vfrm=24-9-0-1'
							}
						]
					break
				}
			},
			
			// 打开配置属性弹窗
			setInfo(val) {
				this.$refs.popup.open()
			},
			
			// 关闭配置属性弹窗
			closeDialog() {
				this.$refs.popup.close()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.task-detail-wrap {
		.box-content {
			background-color: #fff;
			margin: 10rpx 0 20rpx;
			padding: 20rpx;
			display: flex;
			flex-direction: column;
			.ter-list {
				.ter-list-item {
					display: flex;
					flex-direction: column;
					border-bottom: 1px solid #ddd;
					padding: 10rpx 0;
					view {
						display: flex;
						justify-content: space-between;
						margin-bottom: 10rpx;
						font-size: 28rpx;
						color: #787777;
					}
					view:last-child {
						margin-bottom: 0;
					}
				}
				.ter-list-item:last-child {
					border: none;
				}
			}
			.task-list {
				.task-item {
					margin: 10rpx 0;
					display: flex;
					justify-content: space-between;
					padding: 10rpx;
					font-size: 28rpx;
					color: #787777;
				}
				.task-item.active {
					background-color: $theme-color;
					color: #fff;
				}
				.task-item:last-child {
					margin-bottom: 0;
				}
			}
			.tast-list {
				.tast-item {
					margin: 10rpx 0;
					display: flex;
					justify-content: space-between;
					border-bottom: 1px solid #ddd;
					padding: 10rpx 0;
					font-size: 28rpx;
					color: #787777;
				}
				.tast-item:last-child {
					border: none;
					margin-bottom: 0;
				}
			}
		}
	}
</style>

