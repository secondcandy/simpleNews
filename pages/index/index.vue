<template>
	<view class="home">
		<scroll-view scroll-x="true" class="navscroll">
			<view class="item" :class="item.id == navIndex ? 'active' : ''" v-for="item in navArr" :key="item.id" @click="clickNav(item.id)">{{item.classname}}</view>
		</scroll-view>
		
		<view class="content">
			<view class="row"  v-for="item in newsArr" :key="item.id">
				<newsbox @click.native="goDetail(item)" :item="item"></newsbox>
			</view>
		</view>
		
		<view class="nodata">
			<image src="../../static/images/Screenshot_2017-07-09-00-20-42-732_tv.danmaku.bil.png" mode="" v-if="Number(navIndex) === 54" style="width: 100%;"></image>
			<text style="font-size: 40rpx;font-weight: 600;" v-if="Number(navIndex) === 54">抱歉，查询不到相关数据</text>
		</view>
		<view class="loading" v-if="newsArr.length">
			<view v-if="loading === 1">数据加载中...</view>
			<view v-if="loading === 2">没有更多了~~</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navIndex:50,
				navArr:[],
				newsArr:[],
				currentPage:1,
				cidNum:50,
				loading:0		//0默认  1加载中  2没有更多内容
			}
		},
		onLoad() {
			this.getNavData()
			this.getNewData()
		},
		onReachBottom() {
			// console.log('已经触底')
			if(this.loading === 2){
				return
			}
			this.currentPage++
			this.loading = 1
			this.getNewData()
		},
		methods: {
			//点击导航切换
			clickNav(i){
				this.navIndex = i
				//避免点击同一页面重复加载
				if(this.cidNum === i){
					return
				}
				this.cidNum = i
				this.currentPage = 1	//初始化请求页码
				this.newsArr = []		//初始化新闻数据
				this.loading = 0		//初始化加载状态
				this.getNewData()
			},
			//跳转到详情页
			goDetail(item){
				uni.navigateTo({
					url:`/pages/detail/detail?cid=${item.classid}&id=${item.id}`,
				})
			},
			//获取导航列表数据
			getNavData(){
				uni.request({
					url:"https://ku.qingnian8.com/dataApi/news/navlist.php",
					success:res =>{
						// console.log(res)
						this.navArr = res.data
					}
				})
			},
			//获取新闻列表数据
			getNewData(){
				uni.request({
					url:"https://ku.qingnian8.com/dataApi/news/newslist.php",
					data:{
						// num:10,
						cid:this.cidNum,
						page:this.currentPage
					},
					success:res =>{
						// console.log(res)
						this.newsArr = [...this.newsArr,...res.data]
						this.loading = 0
						if(this.newsArr.length === [...this.newsArr,...res.data].length){
							this.loading = 2
						}
					}
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.navscroll{
		height: 100rpx;
		background: #F7F8FA;
		white-space: nowrap;
		position: fixed;
		left: 0;
		top:var(--window-top);
		z-index: 10;
		/deep/ ::-webkit-scrollbar {
			width: 4px !important;
			height: 1px !important;
			overflow: auto !important;
			-webkit-appearance: auto !important;
			display: block;
		}
		.item{
			font-size: 40rpx;
			display: inline-block;
			line-height: 100rpx;
			padding: 0 30rpx;
			color: #333;
			&.active{
				color: #31c27c;
			}
		}
	}
	.content{
		padding: 30rpx;
		padding-top: 130rpx;
		.row{
			border-bottom: 1px dotted black;
			padding: 20rpx 0;
		}
	}
	.loading{
		text-align: center;
		font-size: 26rpx;
		color: #888;
		line-height: 2em;
	}

</style>
