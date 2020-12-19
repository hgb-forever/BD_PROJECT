<template>
	<view class="icon iconfont" :class="[sex==0?'icon-nan':'icon-nv']">{{this.age}}</view>
</template>

<script>
	export default{
		props:{
			sex: [Number,String],
			age: [Number,String]
		}
	}
</script>

<style scoped>
	.icon{
		color: #fff;
		font-size: 12px;
		border-radius: 30upx;
		padding: 0 12upx;
		
	}
	.icon-nan{
			background-color: #44B3FF;
	}
	.icon-nv{
			background-color: #f772b2;
	}
</style>
