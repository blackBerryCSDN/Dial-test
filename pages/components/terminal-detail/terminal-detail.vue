<template>
	<view class="terminal-detail-wrap">
		<!-- 终端注册信息 -->
		<view class="box-content">
			<view class="title">
				<mol-title :titleInfo="titleInfo"></mol-title>
			</view>
			<view class="ter-list">
				<view class="ter-list-item">
					<view class="item-flex">
						<view class="title">终端名：杭州-S912-接入层-14</view>
						<view>终端ip：192.168.202.73</view>
					</view>
					<view class="item-flex">
						<view>终端类型：Android</view>
						<view>序列号：</view>
					</view>
					<view class="item-flex">
						<view>MAC信息：</view>
						<view>最后通信时间：</view>
					</view>
					<view class="item-flex">
						<view>终端型号：</view>
						<view>标签：</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 部署位置 -->
		<view class="box-content">
			<view class="title">
				<mol-title :titleInfo="arrangeInfo"></mol-title>
			</view>
			<view class="ter-list">
				<view class="ter-list-item">
					<view class="item-flex">
						<view class="title">省份：浙江</view>
						<view>地市：杭州市</view>
					</view>
					<view class="item-flex">
						<view>县区：上城区</view>
						<view>远程信息：</view>
					</view>
					<view class="item-flex">
						<view>部署时间：</view>
						<view>联系人：</view>
					</view>
					<view class="item-flex">
						<view>GIS位置：</view>
						<view>地址：</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 终端性能 -->
		<view class="box-content">
			<view class="title">
				<mol-title :titleInfo="natureInfo"></mol-title>
			</view>
			<view class="nature-box">
				<view class="item-box">
					<view>信息：</view>
					<view>使用：</view>
				</view>
				<view class="item-box">
					<view>CPU</view>
					<view class="progress-box">
						<progress :percent="cpuUse" active :activeColor="colorStyle(cpuUse)" stroke-width="10" show-info />
					</view>
				</view>
				<view class="item-box">
					<view>内存</view>
					<view class="progress-box">
						<progress :percent="storageUse" active :activeColor="colorStyle(storageUse)" stroke-width="10" show-info />
					</view>
					</view>
				<view class="item-box">
					<view>磁盘</view>
					<view class="progress-box">
						<progress :percent="diskUse" active :activeColor="colorStyle(diskUse)" stroke-width="10" show-info />
					</view>
					</view>
			</view>
		</view>
		
		<!-- 备注信息 -->
		<view class="box-content">
			<view class="title">
				<mol-title :titleInfo="remarkInfo"></mol-title>
			</view>
			<view class="remark-box">
				无
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
				titleInfo: '终端注册信息',
				arrangeInfo: '终端部署位置',
				natureInfo: '终端性能',
				remarkInfo: '备注信息',
				cpuUse: 40,
				storageUse: 25,
				diskUse: 60
			}
		},
		methods: {
			colorStyle(val) {
				let str = "blue"
				if (val < 30) {
					str = "blue"
				} else if (val >= 30 && val < 60) {
					str = "yellow"
				}else {
					str = "red"
				}
				return str
			}
		}
	}
</script>


<style lang="scss" scoped>
	.terminal-detail-wrap {
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
						font-size: 28rpx;
						color: #787777;
					}
					.item-flex:last-child {
						margin-bottom: 0;
					}
				}
				.ter-list-item:last-child {
					border: none;
				}
			}
			.nature-box {
				display: flex;
				font-size: 24rpx;
				margin-top: 10rpx;
				color: #787777;
				.item-box {
					flex: 1;
					view {
						margin: 10rpx;
					}
				}
			}
		}
	}
</style>
