<template>
	<view class="login">
		<view class="top">
			<view class="logo">
				<image src="../../static/image/logo.png"></image>
			</view>
		</view>
		<view class="content">
				<!-- 账户输入框 -->
			<view class="input-text">
				<text class="ico iconfont iconyonghuming"></text>
				<input v-model="userLoginInfo.userName" class="uni-input" focus placeholder="账号" />
			</view>
				<!-- 密码输入框 -->
			<view class="input-text">
				<text class="ico iconfont iconmima"></text>
				<input v-model="userLoginInfo.password" class="uni-input" password type="text" placeholder="密码" />
			</view>
				<!-- 登录按钮 -->
			<view class="sign">
				<button type="primary" :disabled="!userLoginInfo.userName || !userLoginInfo.password" @click="login">登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userLoginInfo: {
					userName: 'admin',
					password: '123456'
				}
			}
		},
		methods: {
			// 登录
			async login(){
				// const res = await this.$myRuquest({
				// 	url: '/login',
				// 	method: 'POST',
				// 	data: {
				// 		userName: 'admin',
				// 		password: 'admin'
				// 	}
				// })
				// console.log(res)
				uni.switchTab({
				    url: '../index/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.login {
	background-color: #f5f5f5;
	height: 100%;
	.top {
		width: 100%;
		height: 410rpx;
		background-color: $theme-color;
		.logo {
			width: 262rpx;
			height: 82rpx;
			margin: 0 auto;
			image {
				width: 100%;
				height: 100%;
				margin-top: 140rpx;
			}
		}
	}
	.content {
		width: 640rpx;
		height: 660rpx;
		background-color: #fff;
		box-shadow: 0px 0px 10px #dcdcdc;
		margin: -90rpx auto;
		border-radius: 8rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.input-text {
			width: 80%;
			height: 100rpx;
			display: flex;
			flex-wrap: nowrap;
			align-items: center;
			margin-top: 20rpx;
			border-bottom: 1px solid rgb(228, 228, 228);
			margin: 28rpx;
			.ico {
				font-size: 48rpx;
				color: $theme-color;
				margin-right: 20rpx;
			}
		}
		.sign {
			margin-top: 40rpx;
			width: 80%;
			height: 100rpx;
			button {
				// background-color: $theme-color;
				// color: #fff;
				border-radius: 60rpx;
			}
		}
	}
}
</style>
