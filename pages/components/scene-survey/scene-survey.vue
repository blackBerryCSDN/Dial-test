<template>
	<view class="scene-survey-wrap">
		<!-- 场景概况 -->
		<view class="scene-header">
			<view class="scene-sum">
				<view class="item" v-for="(item, index) in sceneSumList" :key="index" @click="clickSum(item)">
					<view class="item-icon">
						<image :src="item.src"></image>
					</view>
					<view class="item-label">{{item.label}}</view>
					<view class="item-value">{{item.value}}</view>
				</view>
			</view>
		</view>
		
		<!-- 场景列表 -->
		<view class="scene-body">
			<view class="scene-item" v-for="(item, index) in taskList" :key="index">
				<view class="item-header">
					<view>
						<text class="ico iconfont" :class="item.src"></text>
						{{item.taskName}}
					</view>
					<view>
						<text class="report" @click="reportDialog(item)">查看报表</text>
					</view>
				</view>
				<view class="item-content">
					<text class="left">类型：{{item.taskType}}</text>
					<text class="center">状态：{{item.taskStatus}}</text>
					<text>测试项目：{{item.testItem}}</text>
					<text class="left">终端总数：{{item.total}}</text>
					<text class="center">终端等待：{{item.wait}}</text>
					<text>终端暂停：{{item.suspend}}</text>
					<text class="left">正在执行：{{item.executing}}</text>
					<text class="center">执行完成：{{item.complete}}</text>
					<text>
						<text class="detail" @click="detailDialog(item)">详情</text>
					</text>
				</view>
			</view>
		</view>
		
		<!-- 设备数弹窗 -->
		<uni-popup id="popup" ref="popup" type="center">
			<view class="popup-content">
				<view class="popup-header">设备数</view>
				<view class="popup-body">
					<view class="table_node">
						<table cellspacing="0" class="table">
						  <tr>
							<th v-for="(item, index) in tableHead" :key="index">{{ item.label }}</th>
						  </tr>
						  <tr v-for="(item, index) in tableData" :key="index">
							<td v-for="(context, i) in tableHead" :key="i">{{ item[context.prop] }}</td>
						  </tr>
						</table>
					</view>
				</view>
				<view class="popup-footer">
					<button @click="cancle" size="mini">取消</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				sceneSumList: [
					{
						src: '../../../static/image/scene/task.png',
						label: '任务数',
						value: '4'
					},
					{
						src: '../../../static/image/scene/device.png',
						label: '设备数',
						value: '1'
					},
					{
						src: '../../../static/image/scene/alarm.png',
						label: '告警数',
						value: '10'
					},
					{
						src: '../../../static/image/scene/business.png',
						label: '今日测试业务',
						value: '6'
					}
				],
				taskList: [
					{
						id: 'scene1',
						src: 'iconwanchengquerengouwubiankuang',
						taskName: 'CDN演示测试1',
						taskType: '循环任务',
						taskStatus: '完成',
						testItem: '1',
						total: '1',
						wait: '0',
						suspend: '0',
						executing: '0',
						complete: '0'
					},
					{
						id: 'scene2',
						src: 'iconzhihang',
						taskName: 'CDN演示测试2',
						taskType: '循环任务',
						taskStatus: '正在执行',
						testItem: '1',
						total: '1',
						wait: '0',
						suspend: '0',
						executing: '0',
						complete: '0'
					},
					{
						id: 'scene3',
						src: 'icondengdai',
						taskName: 'CDN演示测试3',
						taskType: '循环任务',
						taskStatus: '等待执行',
						testItem: '1',
						total: '1',
						wait: '0',
						suspend: '0',
						executing: '0',
						complete: '0'
					},
					{
						id: 'scene4',
						src: 'iconiconstop',
						taskName: 'CDN演示测试4',
						taskType: '循环任务',
						taskStatus: '暂停',
						testItem: '1',
						total: '1',
						wait: '0',
						suspend: '0',
						executing: '0',
						complete: '0'
					}
				],
				tableHead: [
					{
						label: '设备名称',
						prop: 'name'
					},
					{
						label: '设备类型',
						prop: 'type'
					  },
					  {
						label: 'IP',
						prop: 'ip'
					  },
					  {
						label: '状态',
						prop: 'status'
					  }
					],
				tableData: [
				  {
					name: '5G-jk-01',
					type: 'PC客户端',
					ip: '192.168.202.73',
					status: '在线'
				  },
				  {
					name: '杭州-S912-汇聚层-16',
					type: '安卓客户端',
					ip: '192.168.202.94',
					status: '在线'
				  },
				]
			}
		},
		methods: {
			// 概况点击详情
			clickSum(val) {
				console.log(val)
				switch(val.label) {
					case '任务数':
					break
					case '设备数':
					// this.$refs.popup.open()
					break
					case '告警数':
					uni.navigateTo({
						url: '../alarm-summary/alarm-summary'
					})
					break
					case '今日测试业务':
					break
				}
			},
			
			// 任务详情
			detailDialog(val) {
				console.log(val)
				let url = '../task-detail/task-detail'
				let param = {  
				    id: val.id
				}  
				this.$navTo.togo(url,param)  
			},
			
			// 查看报表
			reportDialog(val) {
				console.log(val)
				let url = '../report/report'
				let param = {  
				    id: val.id
				}  
				this.$navTo.togo(url,param)  
			},
			
			// 取消
			cancle(){
				this.$refs.popup.close()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.scene-survey-wrap {
		.scene-header {
			width: 100%;
			height: 200rpx;
			background-color: $theme-color;
			background-image: url(../../../static/image/scene/scene_bg.png);
			background-size: 100% 100%;
			padding-top: 40rpx;
			.scene-sum {
				width: 710rpx;
				background-color: #fff;
				margin: 0 auto;
				display: flex;
				text-align: center;
				padding: 30rpx 0;
				.item {
					display: flex;
					flex: 1;
					flex-direction: column;
					font-size: 28rpx;
					.item-icon {
						width: 80rpx;
						height: 80rpx;
						margin: 0 auto;
						image {
							width: 100%;
							height: 100%;
						}
					}
					.item-label {
						margin: 10rpx 0;
					}
					.item-value {
						font-size: 30rpx;
						font-weight: bold;
					}
				}
			}
		}
		.scene-body {
			width: 710rpx;
			margin: 0 auto;
			.scene-item:first-child {
				margin-top: 60rpx;
			}
			.scene-item {
				// width: 100%;
				padding: 20rpx;
				display: flex;
				flex-direction: column;
				margin: 20rpx auto;
				background-color: #fff;
				.item-header {
					display: flex;
					justify-content: space-between;
					.ico {
						background-image: linear-gradient(#88c2ff, #409eff);
						color: #fff;
						border-radius: 50%;
						margin-right: 10rpx;
					}
					.report {
						color: #fff;
						background-color: #eb40ff;
						padding: 6rpx 20rpx;
						font-size: 20rpx;
						border-radius: 16px;
					} 
				}
				.item-content {
					display: flex;
					flex-wrap: wrap;
					font-size: 24rpx;
					color: #777777;
					text {
						width: 33.33333333%;
						margin: 6rpx 0;
						text-align: right;
					}
					.detail {
						color: #fff;
						background-color: $theme-color;
						padding: 6rpx 20rpx;
						font-size: 20rpx;
						border-radius: 16px;
					}
					.left {
						text-align: left;
					}
					.center {
						text-align: center;
					}
				}
			}
		}
		
		// 弹窗样式
		.popup-content {
			width: 600rpx;
			// height: 600rpx;
			display: flex;
			flex-direction: column;
			align-content: space-between;
			background-color: #fff;
			.popup-header {
				padding: 15rpx 20rpx;
				background-color: #fafafa;
				border-bottom: 1px solid #ddd;
				text-align: center;
			}
			.popup-body {
				padding: 20rpx 0;
				font-size: 28rpx;
				.table_node {
				      font-size: 12px;
				      width: 100%;
				      // margin-bottom: 15px;
				      overflow-y: hidden;
				      text-align: center;
				      background-color: #fff;
				      .table {
				        width: 100%;
				        max-width: 100%;
						table-layout: fixed;
				        th {
				          background-color: #eaeaea;
				          word-break: keep-all;
				          padding: 10px;
				          border-bottom: 1px solid #ddd;
				        }
				        td {
				          // white-space:nowrap;
				          padding: 10px;
				          border-bottom: 1px solid #ddd;
				        }
				      }
				    }
			}
			.popup-footer {
				border-top: 1px solid #ddd;
				padding: 15rpx 20rpx;
				display: flex;
				text-align: right;
			}
		}
	}
</style>
