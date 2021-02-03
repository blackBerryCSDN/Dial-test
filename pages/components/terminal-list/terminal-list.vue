<template>
	<view class="terminal-list-wrap">
		<!-- 终端列表 -->
		<view class="box-content">
			<view class="title">
				<mol-title :titleInfo="listInfo"></mol-title>
			</view>
			<view class="ter-list">
				<view class="ter-list-item" v-for="(item, index) in terList" :key="index">
					<view class="item-flex">
						<view class="title">{{item.title}}</view>
						<view>地市：{{item.city}}</view>
					</view>
					<view class="item-flex">
						<view>IP地址：{{item.ip}}</view>
						<view>终端状态：{{item.terStatus}}</view>
					</view>
					<view class="item-flex">
						<view>任务状态：{{item.taskStatus}}</view>
						<view class="detail" @click="detailInfo">终端信息</view>
					</view>
				</view>
			</view>
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
				listInfo: '终端列表',
				terList: [
					{
						title: '杭州-S912-接入层-14',
						city: '杭州市',
						ip: '192.168.202.94',
						terStatus: '在线',
						taskStatus: '繁忙'
					},
					{
						title: '杭州-S912-接入层-14',
						city: '杭州市',
						ip: '192.168.202.94',
						terStatus: '在线',
						taskStatus: '繁忙'
					},
					{
						title: '杭州-S912-接入层-14',
						city: '杭州市',
						ip: '192.168.202.94',
						terStatus: '在线',
						taskStatus: '繁忙'
					},
					{
						title: '杭州-S912-接入层-14',
						city: '杭州市',
						ip: '192.168.202.94',
						terStatus: '在线',
						taskStatus: '繁忙'
					},
					{
						title: '杭州-S912-接入层-14',
						city: '杭州市',
						ip: '192.168.202.94',
						terStatus: '在线',
						taskStatus: '繁忙'
					},
					{
						title: '杭州-S912-接入层-14',
						city: '杭州市',
						ip: '192.168.202.94',
						terStatus: '在线',
						taskStatus: '繁忙'
					},
					{
						title: '杭州-S912-接入层-14',
						city: '杭州市',
						ip: '192.168.202.94',
						terStatus: '在线',
						taskStatus: '繁忙'
					},
					{
						title: '杭州-S912-接入层-14',
						city: '杭州市',
						ip: '192.168.202.94',
						terStatus: '在线',
						taskStatus: '繁忙'
					},
					{
						title: '杭州-S912-接入层-14',
						city: '杭州市',
						ip: '192.168.202.94',
						terStatus: '在线',
						taskStatus: '繁忙'
					}
				]
			}
		},
		methods: {
			// 终端信息
			detailInfo() {
				uni.navigateTo({
					url: '../terminal-detail/terminal-detail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.terminal-list-wrap {
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
					.item-flex {
						display: flex;
						justify-content: space-between;
						margin-bottom: 10rpx;
						font-size: 24rpx;
						color: #787777;
						.title {
							color: #474747;
							font-size: 28rpx;
						}
						.detail {
							// font-size: 28rpx;
							color: $theme-color;
						}	
					}
					.item-flex:last-child {
						margin-bottom: 0;
					}
				}
				.ter-list-item:last-child {
					border: none;
				}
			}
		}
	}
</style>
