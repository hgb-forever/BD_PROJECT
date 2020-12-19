<template>
	<view class="body">
		<view class="user-set-about u-ajc u-direction-col">
			<image src="../../static/pic/r.jpg" mode="widthFix" lazy-load></image>
			<view>version 1.0.0</view>
		</view>
		<view>
		<block v-for="(item,index) in list">
			<home-list-item :item="item"></home-list-item>
		</block>
		</view>
	</view>
</template>

<script>
	import homeListItem from '../../components/home/home-list-item.vue'
	export default {
		components:{
			homeListItem
		},
		data() {
			return {
				list:[
					{name:"新版本检测",clicktype:"navigateTo",url:"../../pages/user-set-repassword/user-set-repassword"},
					{name:"毕导用户协议",clicktype:"navigateTo",url:"../../pages/user-set-email/user-set-email"}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("../../common/form.css");
.user-set-about{
	padding: 40upx 0;
}
.user-set-about>image{
	width: 60%;
}
.user-set-about>view{
	padding-top: 20upx;
	font-size: 30upx;
	color: #999;
}
</style>
