<template>
	<view class="activity-list u-flex animated flipInY">
		<!-- 左边 -->
		<view class="activity-list-l">
			<image :src="item.userpic" mode="widthFix" lazy-load></image>
		</view>
		<!-- 右边 -->
		<view class="activity-list-r">
			<!-- 第一行 -->
			<view class="u-justify-contentb firstLine">
				<view class="u-align-items">
					{{item.username}}
					<view class="u-align-items sexBlock">
						<view class="icon iconfont iconxingbienan"></view>
						{{item.age}}
					</view>
				</view>
				<view class="guanzhu u-align-items" v-show="!isguanzhu" @tap="onFocus">
					<view class="icon iconfont iconplus-line"></view>关注
				</view>
				<view class="guanzhu u-align-items" v-show="isguanzhu" style="color: red;font-size: 20upx;" @tap="onChanl">
					取消关注
				</view>
			</view>
			<!-- 第二行 -->
			<view @tap="Detail()">
				 {{item.content}}
			</view>
			<!-- 第三行 -->
			<view @tap="Detail()">
				<image :src="item.titlepic" mode="widthFix" lazy-load></image>
			</view>
			<!-- 第四行 -->
			<view class="u-align-items u-justify-contentb fourth-line">
				<view>
					{{item.position.province}} {{item.position.city}}
				</view>
				<view class="u-align-items">
					<view class="u-align-items">
						<view class="icon iconfont iconzhuanfa"></view>
						{{item.repostnum}}
					</view>
					<view class="u-align-items">
						<view class="icon iconfont iconpinglun"></view>
						{{item.commentnum}}
					</view>
					<view class="u-align-items">
						<view class="icon iconfont icondianzan"></view>
						{{item.infobar.zannum}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item : Object,
			index : Number
		},
		data() {
			return {
				isguanzhu:this.item.isguanzhu
			};
		},
		methods:{
			Detail(){
				console.log("进入详情页");
				uni.navigateTo({
					url:"../../pages/detail/detail?detailData="+JSON.stringify(this.item)
				});
			},
			onFocus(){
				this.isguanzhu = true;
				uni.showToast({
					title:"关注成功!"
				});
			},
			onChanl(){
				uni.showModal({
				    title: '提示',
				    content: '确定取消关注？',
					confirmText:"是",
					cancelText:"否",
				    success: (res)=> {
				        if (res.confirm) {
							this.isguanzhu = false;
							uni.showToast({
								title:"取消成功!"
							});
				        }
				    }
				});
			}
		}
	}
</script>

<style scoped>
.activity-list{
	padding: 20upx 15upx 10upx 15upx ;
	border-bottom: 1upx solid #EEEEEE;
}
.activity-list-r{
	margin-left: 20upx;
	width: 100%;
}
.activity-list>view:nth-child(1)>image{
	width: 50px;
	height: 50px;
	border-radius: 100%;
	border: 1upx solid #EEEEEE;
}
.activity-list>view:nth-child(2)>view:nth-child(3)>image{
	width: 100%;
	border-radius: 20upx;

}

.firstLine>view:first-child{
	color: #AAAAAA;
	font-size: 12px;
}
.sexBlock{
	background: #007AFF;
	color: #FFFFFF;
	border-radius: 20upx;
	font-size: 20upx;
	padding:0 10upx;
	margin-left: 10upx;
	line-height: 10upx;
}
.sexBlock>view{
	font-size: 20upx;
}
.guanzhu{
	font-size: 25upx;
	background: #EEEEEE;
	border-radius: 12upx;
	padding: 0 10upx;
}
.activity-list>view:nth-child(2)>view:nth-child(2){
	font-size: 15px;
}
.fourth-line{
	color: #AAAAAA;
}
.fourth-line>view:last-child>view{
	padding: 10upx 10upx 0 10upx ;
	font-size: 30upx;
}
.fourth-line>view:last-child>view>view{
	font-size: 30upx;
}
</style>
