<template>
	<view class="home-info u-f-jsb">
		<image :src="homeinfo.userpic" mode="aspectFill" lazy-load></image>
		<view class="u-f-jsb">
			<view class="u-f1">
				<view class="nickname">{{homeinfo.username}}</view>
				<view class="u-f">
					<view>总访客 {{homeinfo.totalnum}}</view>
					<view>今日 {{homeinfo.todaynum}}</view>
				</view>
			</view>
			<!-- <view class="icon iconfont icon-jinru"></view> -->
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			homeinfo: Object
		}
	}
</script>

<style scoped>
.home-info{
	padding: 20upx;
}
.home-info>image{
	width:100upx;
	height: 100upx;
	margin-right: 20upx;
	border-radius: 50%;
}
.home-info>view:last-of-type{
	flex: 1;
}
.home-info .nickname{
	font-size: 36upx;
}
.u-f1>view:last-of-type{
	color: #999;
}
.u-f1>view:last-of-type>view:first-of-type{
	margin-right: 20upx;
}
</style>
