<template>
	<view class="setting-dialog-wrap">
		<view class="popup-content">
			<view class="popup-header">组件设置</view>
			<view class="popup-body">
				<uni-forms ref="form" :value="formData" :rules="rules">
					<!-- 标题 -->
					<uni-forms-item label="标题" name="title">
						<uni-easyinput type="text" v-model="formData.title" placeholder="请输入名称" />
					</uni-forms-item>
					<!-- 刷新间隔 -->
					<uni-forms-item name="interval" label="刷新间隔">
						<picker :value="formData.interval" :range="intervalRange" @change="intervalPickerChange" class="is-input-border">
							<view>{{formData.interval === ''? '请选择刷新间隔':intervalRange[formData.interval]}}</view>
						</picker>
					</uni-forms-item>
					<!-- 场景 -->
					<uni-forms-item name="scene" label="场景">
						<picker :value="formData.scene" :range="sceneRange" @change="scenePickerChange" class="is-input-border">
							<view>{{formData.scene === ''? '请选择场景':sceneRange[formData.scene]}}</view>
						</picker>
					</uni-forms-item>
					<!-- 业务 -->
					<uni-forms-item name="business" label="业务">
						<picker :value="formData.business" :range="businessRange" @change="businessPickerChange" class="is-input-border">
							<view>{{formData.business === ''? '请选择业务':businessRange[formData.business]}}</view>
						</picker>
					</uni-forms-item>
				</uni-forms>
			</view>
			<view class="popup-footer">
				<button @click="cancle" size="mini">取消</button>
				<button type="primary" @click="submit" size="mini">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			titleInfo: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				formData: {
					 title: '',
					 interval: '',
					 scene: '',
					 business: ''
				},
				intervalRange: ['5秒', '10秒', '30秒', '1分', '5分'], // 刷新间隔
				sceneRange: ['CDN测试', 'test', 'ping'], // 场景
				businessRange: ['业务1', '业务2', '业务3'], // 业务
				rules: {
					 // 对interval字段进行必填验证
					 interval: {
						 rules: [{
								 required: true,
								 errorMessage: '请选择刷新间隔',
							 }
						 ]
					 },
					 // 对scene字段进行必填验证
					 scene: {
						 rules: [{
								 required: true,
								 errorMessage: '请选择场景',
							 }
						 ]
					 },
					 // 对business字段进行必填验证
					 business: {
						 rules: [{
								 required: true,
								 errorMessage: '请选择业务',
							 }
						 ]
					 },
					 // 对title字段进行必填验证
					 title: {
						 rules: [{
								 required: true,
								 errorMessage: '请输入标题',
							 }
						 ]
					 }
				}
			}
		},
		created() {
			this.formData.title = this.titleInfo
		},
		methods: {
			// 触发提交表单
			submit() {
				this.$refs.form.submit().then(res=>{
					console.log('表单数据信息：', res);
					this.$emit('closeDialog')
				}).catch(err =>{
					console.log('表单错误信息：', err);
				})
			},
			
			// 取消
			cancle(){
				this.$emit('closeDialog')
			},
			
			// 刷新间隔事件
			 intervalPickerChange(e) {
				this.formData.interval = e.target.value;
			},
			
			// 场景事件
			 scenePickerChange(e) {
				this.formData.scene = e.target.value;
			},
			
			// 业务事件
			 businessPickerChange(e) {
				this.formData.business = e.target.value;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.setting-dialog-wrap {
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
