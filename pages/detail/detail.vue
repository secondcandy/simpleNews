<template>
	<view class="detail">
		<view class="title">{{information.title}}</view>
		<view class="info">
			<view class="author">编辑：{{information.author}}</view>
			<view class="time">发布日期：{{information.posttime}}</view>
		</view>
		<view class="content">
			<rich-text :nodes="information.content"></rich-text>
		</view>
		<view class="description">
			声明：本站的内容均采集于腾讯新闻，如果侵权请联系管理（1197590647@qq.com）进行整改删除，本站进行了内容采集不代表本站及作者观点，若有
			侵犯请及时联系管理员，谢谢您的支持。
		</view>
	</view>
</template>

<script>
	import {parseTime} from "@/utils/tool.js"
	export default {
		data() {
			return {
				options:null,
				information:{}
			};
		},
		onLoad(id) {
			this.options = id
			// console.log(this.options)
			this.getDetail()
		},
		methods:{
			getDetail(){
				uni.request({
					//通过api接口请求详情页数据
					url:"https://ku.qingnian8.com/dataApi/news/detail.php",
					data:{
						cid:this.options.cid,
						id:this.options.id
					},
					success:res => {
						res.data.posttime = parseTime(res.data.posttime)
						//通过正则算法直接修改拿到的数据,限制所有拿到的图片的大小
						res.data.content = res.data.content.replace(/<img/gi,'<img style="max-width:100%"')		
						this.information = res.data
						// console.log(this.information)
						this.saveHistory()
						uni.setNavigationBarTitle({
							title:this.information.title
						})
						// console.log(this.information)
					},
					fail:err =>{
						console.log('连接失败')
					}
				})
			},
			saveHistory(){
				let historyArr = uni.getStorageSync("historyArr") || []
				let item = {
					cid:this.information.classid,
					id:this.information.id,
					picurl:this.information.picurl,
					title:this.information.title,
					looktime:parseTime(Date.now())
				}
				let index = historyArr.findIndex(i => {
					return i.id == this.information.id
				})
				if(index>=0){
					historyArr.splice(index,1)
				}
				historyArr.unshift(item)
				historyArr = historyArr.splice(0,10)
				uni.setStorageSync('historyArr',historyArr)
			}
		}
	}
</script>

<style lang="scss">
.detail{
	padding: 30rpx;
	.title{
		font-size: 30rpx;
		color: #333;
	}
	.info{
		background: #f6f6f6;
		padding: 20rpx;
		font-size: 25rpx;
		color: #666;
		display: flex;
		justify-content: space-between;
		margin: 40rpx 0;
	}
	.content{
		padding-bottom: 50rpx;
	}
	.description{
		background: #FEF0F0;
		font-size: 26rpx;
		padding: 20rpx;
		color: #F89898;
		line-height: 1.8rem;
	}
}
</style>
