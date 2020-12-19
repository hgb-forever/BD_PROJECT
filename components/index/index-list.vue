<template>
	<!-- 图文列表 -->
	<view class="index-list animated bounceInLeft">
		<view class="index-list1 u-justify-contentb">
			<view class="u-align-items">
				<image :src="item.userpic" mode="widthFix" lazy-load></image>{{item.username}}
			</view>
			<template v-if="!item.isguanzhu">
				<view class="u-align-items"  @tap="onFocus(index)">
					<view class="icon iconfont iconplus-line"></view>关注
				</view>
			</template>
			<template v-else>
				<view class="u-align-items" style="color: red;font-size: 20upx;" @tap="onChanl">
					取消关注
				</view>
			</template>
		</view>
		<view class="index-list2" @tap="Details()">
			{{item.title}}
		</view>
		<view class="index-list3 u-justify-content" @tap="Details()">
			<!-- 图片 -->
				<image :src="item.morepic[0]" mode="widthFix" lazy-load></image>
			<!-- 视频 -->
			<template v-if="item.type == 'video'">
				<view class="index-list3-play icon iconfont iconbofang"></view>
				<view class="index-list3-playnum">{{item.videoinfo.num}}播放量 {{item.videoinfo.time}}</view>
			</template>
		</view>
		<view class="index-list4 u-justify-contentb">
			<view class="u-align-items">
				<view class="u-align-items " :class="{'active': item.infobar.isexpress == 1}" @tap="dingcai(1)">
					<view class="icon iconfont iconxiaolian"></view>
					{{item.infobar.zannum}}
				</view>
				<view class="u-align-items" :class="{'active' : item.infobar.isexpress == 2}" @tap="dingcai(2)">
					<view class="icon iconfont iconkulian"></view>
					{{item.infobar.cainum}}
				</view>
			</view>
			
			<view class="u-align-items">
				<view class="u-align-items">
					<view class="icon iconfont iconpinglun"></view>
					{{item.commentnum}}
				</view>
				<view class="u-align-items">
					<view class="icon iconfont iconzhuanfa"></view>
					{{item.repostnum}}
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item : Object,
			index : Number,
			index1 : Number
		},
		data(){
			return{
			}
		},
		methods:{
			// 进入详情页
			Details(){
				console.log("进入详情页");
				uni.navigateTo({
					url:"../../pages/detail/detail?detailData="+JSON.stringify(this.item)
				});
			},
			/* 关注按钮方法 */
			onFocus(index1){
				this.$emit("on-focus");
			},
			// 取消关注按钮方法
			onChanl(){
				this.$emit("on-chanl");
			},
			// 顶和踩事件
			dingcai(type){
				this.$emit("ding-cai",this.index1,this.index,type);
			}
		}
	}
</script>

<style scoped>
.index-list{
	padding: 20upx;
	padding-bottom: 0;
	border-bottom:1upx solid #EEEEEE;
}
.index-list1>view:first-child{
	color: #999999;
}
.index-list1>view:first-child>image{
	width: 90upx;
	height: 90upx;
	border-radius: 100%;
	margin-right: 10upx;
	/* border: 1px solid gray; */
}
.index-list1>view:last-child{
	font-size: 25upx;
	background: #EEEEEE;
	border-radius: 12upx;
	padding: 0 10upx;
	height: 60upx;
	margin-top: 10upx;
}
.index-list2,.index-list3{
		padding-top: 10upx;
}
.index-list3{
	position: relative;
}
.index-list3>image{
	width: 100%;
	border-radius: 20upx;
}
.index-list3-play{
	position: absolute;
	color: #EEEEEE;
	font-size: 90upx;
}
.index-list3-playnum{
	background: rgba(51, 51, 51, 0.82);
	color: #FFFFFF;
	border-radius: 15upx;
	position: absolute;
	bottom: 4upx;
	right: 4upx;
	font-size: 11upx;
	padding: 0 10upx;
}
.index-list4 view{
	color: #999999;
}

.index-list4>view>view{
	margin-right: 10upx;
}
.index-list4>view>view>view{
	margin-right: 10upx;
}
.index-list4 .active,.index-list4 .active>view{
	color: #F5EA10;
}
</style>
