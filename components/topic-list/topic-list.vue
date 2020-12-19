<template>
	<view>
		<!-- 搜索 -->
		<view class="search-input">
			<input placeholder="搜索" placeholder-class="input-placeholder icon iconfont iconsousuo"/>
		</view>
		<!-- 轮播图 -->
		<swiper 
		class="top-pic" 
		:indicator-dots="true" 
		:autoplay="true" 
		:interval="3000" 
		:duration="1000">
			<block v-for="(item,index) in topicList.imageList" :key="index">
				<swiper-item class="swiper-item">
					<image 
					:src="item" 
					mode="widthFix" 
					lazy-load>
					</image>
				</swiper-item>
			</block>
		</swiper>
		<!-- 热门分类 -->
		<hot-class :hotList="topicList.hotList"></hot-class>
		<!-- 最近更新 -->
		<view class="current-update">
			<view>最近更新</view>
			<block v-for="(item,index) in topicList.updateList" :key="index">
				<view class="update-list u-flex" @tap="opendetail">
					<view>
						<image :src="item.imgsrc" mode="aspectFill" lazy-load></image>
					</view>
					<view>
						<view>#{{item.title}}#</view>
						<view>{{item.comment}}</view>
						<view>{{item.infobar}}</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import hotClass from '../../components/hot-class/hot-class.vue';
	export default {
		props:{
			topicList : Object
		},
		components:{
			hotClass
		},
		data() {
			return {
				
			};
		},
		methods:{
			opendetail(){
				uni.navigateTo({
					url: "../../pages/topic-detail/topic-detail"
				})
			}
		}
	}
</script>

<style scoped>
.search-input>input{
	border-radius: 20upx;
	border: 1upx solid #EEEEEE;
	background: #F7F5F7;
	padding: 15upx;
}
.input-placeholder{
	display: flex;
	justify-content: center;
	font-size: 25upx;
}
.top-pic{
	padding: 20upx;
}
.swiper-item>image{
	width: 100%;
	border-radius: 20upx;
}

.current-update{
	padding: 10upx;
}
.update-list{
	border-bottom: 1upx solid #EEEEEE;
	margin-top: 20upx;
}
.update-list>view:first-child{
	margin: 20upx;
}
.update-list>view>image{
	width: 150upx;
	height: 150upx;
	border-radius: 20upx;
}
.update-list>view:last-child>view{
	color: #BBBBBB;
	font-size: 20upx;
}
.update-list>view:last-child>view:nth-child(1){
	color: #010000;
	font-size: 35upx;
}
</style>
