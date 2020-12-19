<template>
	<view class="common-list u-f  animate__animated animate__fadeIn animate__fast">
		<view class="common-list-left u-f-jc">
			<image :src="item.userpic" mode="widthFix" lazy-load=""></image>
		</view> 
		<view class="common-list-right">
			<view class="u-f-jsb">
				<view class="f_center"><view>{{item.username}}</view> <tag-sex-age :sex="item.sex" :age="item.age"></tag-sex-age></view>
				<view class="icon iconfont icon-zengjia" @tap="guanzhu" v-show="!isguanzhu">关注</view>
			</view>
			<view class="common-list-day">26天前</view>
			<view class="common-list-title my-list-title" v-html="item.content">{{item.content}}</view>
			<view class="common-list-titleimg" v-if="!item.sharen">
				<block v-for="(pic,index) in item.morepic" :key="index">
					<image :src="pic" mode="widthFix" lazy-load @tap="imgdetail(index)"></image>
				</block>
				<view class="common-list-play icon iconfont icon-bofang" v-if="item.video"></view>
				<view class="common-list-playinfo" v-if="item.video">{{item.video.looknum}}次播放 {{item.video.long}}</view>
			</view>
			<view class="common-list-sharen u-f u-f-wrap" v-if="item.sharen">
				<block v-for="(pic,index) in item.morepic" :key="index">
					<image :src="pic" mode="aspectFill" lazy-load @tap="imgdetail(index)"></image>
				</block>
				<!-- <view class="f_center">{{item.title}}</view> -->
			</view>
			<view class="u-f-ac u-f-jsb">
				<view>{{item.path}}</view>
				<view class="u-f">
					<view class="icon iconfont icon-zhuanfa">{{item.repostnum}}</view>
					<view class="icon iconfont icon-pinglun1">{{item.commentnum}}</view>
					<view class="icon iconfont icon-dianzan">{{item.infobar.zannum}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from '../common/tag-sex-age.vue'
	export default{
		components:{
			tagSexAge
		},
		props:{
			item: {
				type: Object
			}
		},
		data(){
			return{
				isguanzhu: this.item.isguanzhu
			}
		},
		methods:{
			guanzhu(){
				this.isguanzhu = true;
				uni.showToast({
					title: '关注成功'
				})
			},
			imgdetail(index){
				uni.previewImage({
					current: index,
					urls: this.item.morepic
				})
			}
		}
	}
</script>

<style scoped>
	@import "../../common/list.css";
	.common-list-day{
		color: #ccc;
	}
	.my-list-title{
		    white-space: pre-line;
		    word-break: break-all;
	}
</style>
