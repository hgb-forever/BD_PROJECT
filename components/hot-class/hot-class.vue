<template>
	<view class="hot-class">
		<view class="u-justify-contentb">
			{{hotList.titlebar.name}}
			<view class="u-align-items">{{hotList.titlebar.more}}<view class="icon iconfont iconjiantouarrow487"></view></view>
		</view>
		<view class="u-justify-content classification">
			<block v-for="(item,index) in hotList.classification" :key="index">
				<view>{{item.name}}</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			hotList :Object
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.classification>view{
	flex: 1;
	border-radius: 20upx;
	text-align: center;
	background: #EEEEEE;
	margin:10upx;
}
.hot-class{
	margin-top: 20upx;
	border-bottom: 1upx solid #EEEEEE;
}
.hot-class>view:first-child{
	padding: 0upx 10upx;
}
.hot-class>view:first-child>view{
	color: #CCCCCC;
	font-size: 30upx;
}
.hot-class>view:last-child{
	margin: 10upx;
	color: #AAAAAA;
}
</style>
