<template>
	<view class="report-wrap">
		<!-- 查询条件 -->
		<view class="box-content">
			<view class="title">
				<mol-title :titleInfo="searchInfo"></mol-title>
			</view>
			<view class="search-box">
				<view class="search-box-item">
					<view class="item-label">时间：</view>
					<view class="item-input">
						<picker :value="formData.time" :range="timeList" @change="timePickerChange" class="is-input-border">
							<view>{{formData.time === ''? '请选择时间':timeList[formData.time]}}</view>
						</picker>
					</view>
				</view>
				<view class="search-box-item">
					<view class="item-label">业务：</view>
					<view class="item-input">
						<picker :value="formData.task" :range="taskList" @change="taskPickerChange" class="is-input-border">
							<view>{{formData.task === ''? '请选择业务':taskList[formData.task]}}</view>
						</picker>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 报表 -->
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
</template>

<script>
	import molTitle from '@/components/common/mol-title/mol-title.vue'
	export default {
		components: {
			molTitle
		},
		data() {
			return {
				searchInfo: '查询条件',
				formData: {
					 time: 0,
					 task: 1,
					 remarks: ""
				},
				// 时间
				timeList: ['最近一天', '最近七天', '最近一月'],
				// 业务
				taskList: ['WEB视频', 'HTTP文件下载'],
				// 指标
				targetList: [
					{
						title: '成功率(%)',
						isShow: true
					},
					{
						title: 'PING时延(ms)',
						isShow: false
						
					},
					{
						title: '下载速率(Mbps)',
						isShow: true
					},
					{
						title: '成功次数',
						isShow: false
					},
					{
						title: '测试次数',
						isShow: false
					}
				],
				
				// 报表头部
				tableHead: [
					{
						label: '测试项',
						prop: 'name'
					},
					{
						label: '成功次数',
						prop: 'times'
					},
					{
						label: '成功率',
						prop: 'success'
					},
					{
						label: '下载速率(Mbps)',
						prop: 'rate'
					}
				],
				// 报表内容
				tableData: [
				 {
				 	name: 'HTTP文件下载',
				 	success: '100%',
				 	rate: '85.024',
				 	times: '52'
				 },
				 {
				 	name: 'HTTP文件下载',
				 	success: '100%',
				 	rate: '85.024',
				 	times: '52'
				 },
				 {
				 	name: 'HTTP文件下载',
				 	success: '100%',
				 	rate: '85.024',
				 	times: '52'
				 },
				 {
				 	name: 'HTTP文件下载',
				 	success: '100%',
				 	rate: '85.024',
				 	times: '52'
				 },
				 {
				 	name: 'HTTP文件下载',
				 	success: '100%',
				 	rate: '85.024',
				 	times: '52'
				 },
				 {
				 	name: 'HTTP文件下载',
				 	success: '100%',
				 	rate: '85.024',
				 	times: '52'
				 }
				]
			}
		},
		onLoad(option) {
			console.log(option.id)
		},
		methods: {
			// 选择时间
			 timePickerChange(e) {
				this.formData.time = e.target.value
			},
			// 选择业务
			 taskPickerChange(e) {
				this.formData.task = e.target.value
				if (e === 0) {
					this.tableHead = [
						{
							label: '测试项',
							prop: 'name'
						},
						{
							label: '成功次数',
							prop: 'times'
						},
						{
							label: '成功率',
							prop: 'success'
						},
						{
							label: '下载速率(Mbps)',
							prop: 'rate'
						}
					],
					this.tableData = [
						{
							name: 'HTTP文件下载',
							success: '100%',
							rate: '85.024',
							times: '52'
						},
						{
							name: 'HTTP文件下载',
							success: '100%',
							rate: '85.024',
							times: '52'
						},
						{
							name: 'HTTP文件下载',
							success: '100%',
							rate: '85.024',
							times: '52'
						},
						{
							name: 'HTTP文件下载',
							success: '100%',
							rate: '85.024',
							times: '52'
						},
						{
							name: 'HTTP文件下载',
							success: '100%',
							rate: '85.024',
							times: '52'
						},
						{
							name: 'HTTP文件下载',
							success: '100%',
							rate: '85.024',
							times: '52'
						}
					]
				}else {
					this.tableHead = [
						{
							label: '测试项',
							prop: 'name'
						},
						{
							label: '成功次数',
							prop: 'times'
						},
						{
							label: '成功率',
							prop: 'success'
						  },
						  {
							label: 'PING时延(ms)',
							prop: 'delay'
						  }
					];
					this.tableData = [
						{
							name: 'WEB视频',
							success: '100%',
							delay: '23.264',
							times: '52'
						},
						{
							name: 'WEB视频',
							success: '100%',
							delay: '23.264',
							times: '52'
						},
						{
							name: 'WEB视频',
							success: '100%',
							delay: '23.264',
							times: '52'
						},
						{
							name: 'WEB视频',
							success: '100%',
							delay: '23.264',
							times: '52'
						},
						{
							name: 'WEB视频',
							success: '100%',
							delay: '23.264',
							times: '52'
						}
					]
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.report-wrap {
		.box-content {
			background-color: #fff;
			margin: 10rpx 0 40rpx;
			padding: 20rpx;
			display: flex;
			flex-direction: column;
			.search-box {
				.search-box-item {
					display: flex;
					// margin: 10rpx 0;
					padding: 10rpx 0;
					// border-bottom: 1px solid #c8c7cc;
					.item-label {
						width: 15%;
					}
					.item-input {
						width: 85%;
						font-size: 24rpx;
						color: #787777;
						.is-input-border {
							border-radius: 4px;
							align-items: center;
							display: flex;
							flex-direction: row;
							box-sizing: border-box;
							height: 40rpx;
							padding-left: 20rpx;
						}
					}
				}
			}
		}
		
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
</style>
