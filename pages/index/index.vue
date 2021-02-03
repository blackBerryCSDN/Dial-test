<template>
	<view class="home-wrap">
		<view v-for="(item, index) in dataArr" :key="index" class="item-body">
			<!-- 标题 -->
			<view class="item-top">
				<mol-title :titleInfo="item.title" :setShow="true" :delShow="true" @deleteArr='deleteArr'></mol-title>
			</view>
			<!-- 图表 -->
			<view class="item-chart">
				<!-- 指标 -->
				<target :targetList="item.targetList" @targetChange="targetChange"></target>
				<!-- 图例 -->
				<u-charts 
				:chartType="item.chartType"
				:opts="item.opts" 
				:canvasId="'canvas' + index" 
				:cWidth="355" 
				:cHeight="200">
				</u-charts>
			</view>
		</view>
		<!-- 选择组件弹窗 -->
		<uni-popup id="popup" ref="popup" type="center">
			<view class="popup-content">
				<view class="popup-header">选择组件</view>
				<view class="popup-body">
					<uni-forms ref="form" :value="formData" :rules="rules">
						<uni-forms-item name="style" label="选择组件">
							<picker :value="formData.style" :range="range" @change="bindPickerChange" class="is-input-border">
								<view>{{formData.style === ''? '请选择组件':range[formData.style]}}</view>
							</picker>
						</uni-forms-item>
						<uni-forms-item label="组件名称" name="name">
							<uni-easyinput type="text" v-model="formData.name" placeholder="请输入名称" />
						</uni-forms-item>
						<uni-forms-item name="remarks" label="备注">
							<uni-easyinput type="textarea" v-model="formData.remarks" :maxlength="50" placeholder="请输入备注"></uni-easyinput>
						</uni-forms-item>
					</uni-forms>
				</view>
				<view class="popup-footer">
					<button @click="cancle" size="mini">取消</button>
					<button type="primary" @click="submit" size="mini">确定</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import molTitle from '@/components/common/mol-title/mol-title.vue'
	import uCharts from '@/components/u-charts/u-charts/u-charts.vue'
	import target from '@/components/common/target/target.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			molTitle,
			uCharts,
			target,
			uniPopup
		},
		data() {
			return {
				activeIndex: 0,
				dataArr: [
					{
						title: '对比报表',
						targetList:[
							{
								name: '成功次数',
								value: '12'
							},
							{
								name: '成功率',
								value: '100%'
							}
						],
						chartType: 'column',
						opts: {
							categories: ["宁波市-浙江", "杭州市-浙江", "金华市-浙江"],
							series: [
								{
									"name":"成功次数",
									"data":[20,8,25],
									},
								]
							}
						}, 
					{
						title: '趋势报表',
						targetList:[
							{
								name: '成功次数',
								value: '12'
							},
							{
								name: '成功率',
								value: '100%'
							}
						],
						chartType: 'line',
						opts: {
							categories: ["宁波市-浙江", "杭州市-浙江", "金华市-浙江"],
							series: [
								{
									"name":"成功次数",
									"data":[24,13,6],
									},
								]
							}
						},
					{
						title: '告警省市地图',
						targetList:[],
						chartType: 'map',
						opts: {series: []}
						},
					],
				 formData: {
					 style: '',
					 name: '',
					 remarks: ""
				 },
				 range: ['对比报表', '告警省市地图', '趋势报表'],
				 rules: {
					 // 对style字段进行必填验证
					 style: {
						 rules: [{
								 required: true,
								 errorMessage: '请选择组件',
							 }
						 ]
					 },
					 // 对name字段进行必填验证
					 name: {
						 rules: [{
								 required: true,
								 errorMessage: '请输入姓名',
							 }
						 ]
					 }
				 }
			}
		},
		// 监听状态栏增加按钮事件
		onNavigationBarButtonTap(e) {
			console.log(e);
			this.formData = {
				style: '',
				name: '',
				remarks: ""
			};
			this.$refs.popup.open()
		},
		onLoad() {
			
		},
		methods: {
			// 删除组件
			deleteArr(e) {
				console.log(e)
			},
			
			// 指标点击事件
			targetChange(e) {
				console.log(e)
			},
			
			// 触发提交表单
			submit() {
				this.$refs.form.submit().then(res=>{
					console.log('表单数据信息：', res);
					this.$refs.popup.close()
				}).catch(err =>{
					console.log('表单错误信息：', err);
				})
			},
			
			// 取消
			cancle(){
				this.$refs.popup.close()
			},
			
			// 选择组件事件
			 bindPickerChange(e) {
				this.formData.style = e.target.value;
				this.formData.name = this.range[e.target.value]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home-wrap {
		.item-body {
			background-color: #fff;
			margin: 10rpx 0;
			padding: 20rpx;
			display: flex;
			flex-direction: column;
		}
		.item-chart {
			width: 710upx;
		}
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
				padding: 10rpx 20rpx;
				// font-size: 12px;
				// height: 300rpx;
				.is-input-border {
				    border: 1px solid #c8c7cc;
					border-radius: 4px;
					align-items: center;
					display: flex;
					flex-direction: row;
					box-sizing: border-box;
					height: 72rpx;
					padding-left: 20rpx;
				}
			}
			.popup-footer {
				border-top: 1px solid #ddd;
				padding: 15rpx 20rpx;
				display: flex;
			}
		}
	}
</style>
