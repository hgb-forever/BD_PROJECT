<template>
	<view>
	<view class="topic-bg">
		<image :src="item.titlepic" mode="aspectFill" lazy-load></image>
	</view>
	<view class="topic-info">
		<view class="topic-info-top">
			<image :src="item.titlepic" mode="widthFix" lazy-load></image>
			<view>{{this.item.title}}</view>
		</view>
		<view class="topic-info-center u-f">
			<view>动态 {{this.item.totalnum}}</view>
			<view>今日 {{this.item.todaynum}}</view>
		</view>
		<view class="topic-info-bottom">
			{{this.item.desc}}	
		</view>
	</view>
	</view>
</template>

<script>
	export default{
		props:{
			item: Object
		}
	}
</script>

<style scoped>
	.topic-bg{
		width: 100%;
		height: 300upx;
		overflow: hidden;
		position: relative;
	}
	.topic-bg>image{
		width: 100%;
		filter: blur(10px);
	
	}
	.topic-info{
		padding: 0 40upx;
	}
	.topic-info-top{
		height: 100upx;
		position: relative;
	}
	.topic-info-top>image{
		position: absolute;
		width: 200upx;
		height: 200upx;
		top: -100upx;
		border-radius: 20upx;
	}
	.topic-info-top>view{
		font-size: 36upx;
		margin-left: 220upx;
	}
	.topic-info-center{
		color: #cdcdcd;
		padding: 20upx 0upx;
	}
	.topic-info-center>view:first-of-type{
		margin-right: 20upx;
	}
	.topic-info-bottom{
		font-size: 32upx;
		color: #ccc;
	}
</style>
