<template>
	<view class="profile-wrap">
		<view class="header">
			<view class="bg">
				<image src="../../static/image/profile/profile-bg.png"></image>
			</view>
			<view class="head">
				<image src="../../static/image/profile/head.png"></image>
			</view>
			<view class="back" @click="goBack">退出</view>
		</view>
		
		<view class="list">
			<view class="list-item" v-for="(item, index) in itemList" :key="index" @click="activeClick(item)">
				<view class="left">
					<text class="ico iconfont" :class="item.ico" :style="{color: colorStyle(item)}"></text>
					<text>{{item.name}}</text>
				</view>
				<view class="right">
					<text class="iconfont iconjinru"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: null,
				itemList: [
					{
						ico: 'iconmima',
						name: '修改密码'
					},
					{
						ico: 'iconceshi',
						name: '我的场景测试'
					},
					{
						ico: 'iconguanzhu',
						name: '关注场景'
					},
					{
						ico: 'icongaojing',
						name: '告警'
					}
				]
			}
		},
		methods: {
			// 退出
			goBack() {
				uni.navigateTo({
					url: '../login/login'
				})
			},
			
			// 跳转
			activeClick(val) {
				console.log(val)
			},
			
			// 图标颜色改变
			colorStyle(val) {
				var str = '#2364f8'
				switch(val.name) {
					case '修改密码':
					str = '#2364f8';
					break;
					case '我的场景测试':
					str = '#23f8a0';
					break;
					case '关注场景':
					str = '#f8aa23';
					break;
					case '告警':
					str = '#eb053b';
					break;
				}
				return str
			}
		}
	}
</script>

<style lang="scss" scoped>
 .profile-wrap {
	 .header {
		 width: 750rpx;
		 height: 350rpx;
		 background-color: $theme-color;
		 position: relative;
		 .bg {
			 width: 750rpx;
			 height: 262rpx;
			 position: absolute;
			 bottom: 0;
			 right: 0;
			 left: 0;
			 image {
				 width: 100%;
				 height: 100%;
			 }
		 }
		 .head {
			 width: 108rpx;
			 height: 108rpx;
			 position: absolute;
			 top: 20%;
			 left: 50%;
			 margin-left: -54rpx;
			 image {
				 width: 100%;
				 height: 100%;
			 }
		 }
		 .back {
			 color: #fff;
			 border: 2px solid #fff;
			 padding: 10rpx;
			 border-radius: 40rpx;
			 width: 160rpx;
			 margin: 0 auto;
			 text-align: center;
			 position: absolute;
			 bottom: 60rpx;
			 left: 50%;
			 margin-left: -90rpx;
		 }
	 }
	 .list {
		 width: 750rpx;
		 background-color: #fff;
		 height: 100%;
		 .list-item {
			 padding: 20rpx;
			 flex-basis: 100%;
			 display: flex;
			 justify-content: space-between;
			 border-bottom: 1px solid #eeeeee;
			 height: 88rpx;
			 line-height: 88rpx;
			 .left {
				 .ico {
					 margin-right: 10rpx;
					 font-size: 40rpx;
				 }
			 }
			 .right {
				 color: #a9a9a9;
			 }
		 }
		 .list-item:last-child {
			  border-bottom: none;
		 }
	 }
 }
</style>
