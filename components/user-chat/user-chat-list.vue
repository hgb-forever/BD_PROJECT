<template>
	<view class="user-chat-item">
		<view class="user-chat-time u-f-jc" v-if="item.gstime">{{item.gstime}}</view>
		<view class="user-chat-list u-f" :class="{'user-chat-me': item.isme}">
			<image :src="item.userpic" mode="widthFix" lazy-load></image>
			<view class="user-chat-list-body">
				<text>{{item.data}}</text>
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
	.user-chat-list{
		padding: 20upx;
	}
	.user-chat-list>image{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		flex-shrink: 0;
	}
	.user-chat-list-body{
		position: relative;
		background-color: #f4f4f4;
		padding:25upx;
		border-radius: 20upx;
		margin-left: 30upx;
		margin-right: 130upx;
	}
	.user-chat-list-body>image{
		max-width: 300upx;
		max-height: 400upx;
	}
	.user-chat-list-body:after{
		position: absolute;
		left: -30upx;
		right: 0;
		top: 40upx;
		content: "";
		width: 0;
		height: 0;
		border: 15upx solid #f4f4f4;
		border-color: transparent #f4f4f4 transparent transparent;
	}
	.user-chat-me{
		flex-direction: row-reverse;
	}
	.user-chat-me>.user-chat-list-body{
		margin-right: 30upx;
		margin-left: 130upx;
	}
	.user-chat-me>.user-chat-list-body:after{
		right: -30upx;
		left: auto;
		border-color: transparent transparent transparent #f4f4f4;
	}
	.user-chat-time{
		padding: 40upx 0;
		color: #a2a2a2;
		font-size: 20upx;
	}
</style>
