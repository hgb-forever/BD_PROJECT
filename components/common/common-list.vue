<template>
	<view class="common-list u-f  animate__animated animate__fadeInLeft animate__fast">
		<view class="common-list-left u-f-jc">
			<image :src="item.userpic" mode="widthFix" lazy-load=""></image>
		</view> 
		<view class="common-list-right">
			<view class="u-f-jsb">
				<view class="f_center"><view>{{item.username}}</view> <tag-sex-age :sex="item.sex" :age="item.age"></tag-sex-age></view>
				<view class="icon iconfont icon-zengjia" @tap="guanzhu" v-show="!isguanzhu">关注</view>
			</view>
			<view class="common-list-title" @tap="opendetail">{{item.title}}</view>
			<view class="common-list-titleimg" v-if="!item.sharen"  @tap="opendetail">
				<image :src="item.titlepic" mode="widthFix" lazy-load=""></image>
				<view class="common-list-play icon iconfont icon-bofang" v-if="item.video"></view>
				<view class="common-list-playinfo" v-if="item.video">{{item.video.looknum}}次播放 {{item.video.long}}</view>
			</view>
			<view class="common-list-sharen u-f" v-if="item.sharen"  @tap="opendetail">
				<image :src="item.titlepic" mode="widthFix" lazy-load></image>
				<view class="f_center">{{item.title}}</view>
			</view>
			<view class="u-f-ac u-f-jsb">
				<view>{{item.path}}</view>
				<view class="u-f">
					<view class="icon iconfont icon-zhuanfa">{{item.sharenum}}</view>
					<view class="icon iconfont icon-pinglun1">{{item.commentnum}}</view>
					<view class="icon iconfont icon-dianzan">{{item.goodnum}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from './tag-sex-age.vue'
	export default{
		components:{
			tagSexAge
		},
		props:{
			item: {
				type: Object
			},
			idx: Number
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
			opendetail(){
				uni.navigateTo({
					url:"../../pages/detail/detail?detailData="+JSON.stringify(this.item)
				})
			}
		}
	}
</script>

<style scoped>
	@import "../../common/list.css";
</style>
