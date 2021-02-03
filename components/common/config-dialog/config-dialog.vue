<template>
	<view class="config-dialog-wrap">
		<view class="popup-content">
			<view class="popup-header">配置信息</view>
			<view class="popup-body">
				<uni-forms ref="form" :value="formList">
					<!-- 测试次数 -->
					<uni-forms-item label="测试次数" name="title">
						<count :count="formList.testNumber" @countNum="testNumber"></count>
					</uni-forms-item>
					<!-- 重测次数 -->
					<uni-forms-item name="interval" label="重测次数">
						<count :count="formList.retestNumber" @countNum="retestNumber"></count>
					</uni-forms-item>
					<!-- 测试间隔 -->
					<uni-forms-item name="scene" label="测试间隔">
						<count :count="formList.testIntervalr" :unit="second" @countNum="testIntervalr"></count>
					</uni-forms-item>
					<!-- 执行时限 -->
					<uni-forms-item name="business" label="执行时限">
						<count :count="formList.limitTime" :unit="second" @countNum="limitTime"></count>
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
	import count from '../count/count.vue'
	export default {
		components: {
			 count
		 },
		props: {
			titleInfo: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				formList: {
					 testNumber: 1,
					 retestNumber: 0,
					 testIntervalr: 16,
					 limitTime: 500,
					 },
					 second: '秒'
				}
		},
		created() {
			
		},
		methods: {
			 // 得到子组件数量，并把值赋值给父组件
			testNumber(id) {
				this.formList.testNumber = id
			},
			retestNumber(id) {
				this.formList.retestNumber = id
			},
			testIntervalr(id) {
				this.formList.testIntervalr = id
			},
			limitTime(id) {
				this.formList.limitTime = id
			},
			
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
			
		}
	}
</script>

<style lang="scss" scoped>
	.config-dialog-wrap {
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
			}
			.popup-footer {
				border-top: 1px solid #ddd;
				padding: 15rpx 20rpx;
				display: flex;
			}
		}
	}	
</style>
