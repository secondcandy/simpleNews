<template>
	<view class="user">
		<view class="top">
			<image src="/static/images/history.png" mode="aspectFill"></image>
			<view class="text">浏览历史</view>
		</view>
		<view class="content">
			<view class="row" v-for="(item,index) in listArr" :key="index">
				<newsbox @click.native="goDetail(item)" :item="item"></newsbox>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listArr:[]
			};
		},
		onShow() {
			this.getData()
		},
		methods:{
			//跳转到详情页
			goDetail(item){
				uni.navigateTo({
					url:`/pages/detail/detail?cid=${item.classid}&id=${item.id}`
				})
			},
			//获取缓存信息
			getData(){
				let hisArr = uni.getStorageSync('historyArr') || []
				this.listArr = hisArr
				console.log(this.listArr)
			}
		}
	}
</script>

<style lang="scss">
.user{
	.top{
		padding: 50rpx 0;
		background: #F8F8F8;
		color: #555;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		image{
			width: 150rpx;
			height: 150rpx;
		}
		.text{
			font-size: 38rpx;
			padding-top: 20rpx;
		}
	}
	.content{
		padding: 30rpx;
		.row{
			border-bottom: 1px dotted black;
			padding: 20rpx 0;
		}
	}
}
</style>
