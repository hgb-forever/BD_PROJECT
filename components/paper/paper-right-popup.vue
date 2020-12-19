<template>
	<view  v-if="show">
		<view class="paper-right-popup">
			<view class="u-f-ac" hover-class="paper-right-popup-h" @tap="addfirend">
				<view class="icon iconfont icon-sousuo"></view>
				加糗友
			</view>
			<view class="u-f-ac"  hover-class="paper-right-popup-h" @tap="clear"> 
				<view class="icon iconfont icon-qingchu"></view>
				清除未读
			</view>
		</view>
		<view class="paper-right-popup-mask" @tap="hidepopup"></view>
	</view>
</template>

<script>
	export default{
		props:{
			show: Boolean,
			
		},
		methods:{
			addfirend(){
				this.$emit('addfirend')
			},
			clear(){
				this.$emit('clear')
			},
			hidepopup(){
				this.$emit('hidepopup')
			}
		}
	}
</script>

<style scoped>
	.paper-right-popup{
		position: absolute;
		right: 0;
		top: 10upx;
		background-color: #fff;
		z-index: 1000;
		width: 55%;
		box-shadow: 1upx 1upx 20upx 2upx #ccc;
	}
	.paper-right-popup>view{
		padding: 20upx;
		font-size: 35upx;
	}
	.paper-right-popup>view>view{
		margin-right: 10upx;
		font-weight: bold;
	}
	.paper-right-popup-h{
		background-color: #EEE;
	}
	.paper-right-popup-mask{
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
	}
</style>
