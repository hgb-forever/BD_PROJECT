<template>
	<view class="other-login">
		<view class="f_center">
			<view class="f_center uni-icon uni-icon-weixin"></view>
		</view>
		<view class="f_center">
			<view class="f_center uni-icon uni-icon-qq"></view>
		</view>
		<view class="f_center">
			<view class="f_center uni-icon uni-icon-weibo" style="font-size: 80upx;"></view>
		</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
.other-login{
	display: flex;
	padding: 40upx 100upx;
}
.other-login>view{
	flex: 1;
}
.other-login>view>view{
	width: 120upx;
	height: 120upx;
	color: #fff;
	font-size: 60upx;
	border-radius: 50%;
}
.other-login>view>.uni-icon-weixin{
	background-color: #2AD19B;
}
.other-login>view>.uni-icon-pengyouquan{
	background-color: #514D4C;
}
.other-login>view>.uni-icon-weibo{
	background-color: #EE5E5E;
}
.other-login>view>.uni-icon-qq{
	background-color: #5280CE;
}
</style>
