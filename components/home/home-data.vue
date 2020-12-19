<template>
	<view class="home-data f_center">
		<block v-for="(item,index) in homedata" :key="index">
			<view>
				<view>{{item.num}}</view>
				<view>{{item.name}}</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default{
		props:{
			homedata: Array
		}
	}
</script>

<style scoped>
	.home-data{
		padding: 20upx;
	}
	.home-data>view{
		flex:1;
		color: #999;
		text-align: center;
	}
	.home-data>view>view:first-of-type{
		color:#000;
		font-size: 36upx;
	}
</style>
