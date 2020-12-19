<template>
	<view class="body">
		<block v-for="(item,index) in list">
			<home-list-item :item="item"></home-list-item>
		</block>
		<view class="mybtn">
			<button type="primary" class="user-set-btn">退出登录</button>
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
					{name:"账号与安全",clicktype:"navigateTo",url:"../../pages/user-set-repassword/user-set-repassword"},
					{name:"绑定邮箱",clicktype:"navigateTo",url:"../../pages/user-set-email/user-set-email"},
					{name:"资料编辑",clicktype:"navigateTo",url:"../../pages/user-set-userinfo/user-set-userinfo"},
					{name:"小纸条",clicktype:"",url:""},
					{name:"清除缓存",clicktype:"",url:""},
					{name:"意见反馈",clicktype:"navigateTo",url:"../../pages/user-set-help/user-set-help"},
					{name:"关于毕导",clicktype:"navigateTo",url:"../../pages/user-set-about/user-set-about"}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.body{
	padding: 0 20upx;
}
.mybtn{
	padding: 20upx;
	box-sizing: border-box;
}
.user-set-btn{
	width: 100%;
	color: #333;
	background-color: #FFE933!important;
}
</style>
