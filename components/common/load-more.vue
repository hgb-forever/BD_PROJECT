<template>
	<view class="onReflash">{{reflashtext}}...</view>
</template>

<script>
	export default {
		props:{
			reflashtext : String
		},
		data() {
			return {
			};
		}
	}
</script>
<style>
.onReflash{
		text-align: center;
		padding: 2upx 10upx;
		color: #AAAAAA;
		/* color: #EEEEEE; */
	}
</style>
