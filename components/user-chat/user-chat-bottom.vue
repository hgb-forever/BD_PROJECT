<template>
	<view class="user-chat-bottom u-f-ac">
		<input type="text" placeholder="文明发言" v-model="text">
		<view class="icon iconfont icon-fabu u-f-ac" @tap="submit"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: ""
			}
		},
		methods: {
			submit(){
				this.$emit("submit",this.text)
				this.text = "";
			}
		}
	}
</script>

<style scoped>
	.user-chat-bottom{
		border-top: 1px solid #EEE;
		padding: 0 20upx;
		height: 120upx;
		width: 100%;
		box-sizing: border-box;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.user-chat-bottom>input{
		background-color: #eee;
		border-radius: 10upx;
		flex: 1;
		padding: 10upx 20upx;
		margin-right: 20upx;
		height: 60upx;
	}
	.user-chat-bottom>view{
		width: 80upx;
		font-size: 50upx;
	}
</style>
