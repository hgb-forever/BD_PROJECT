<template>
	<view>
		<!-- 未登录 -->
		<template v-if="!islogin">
			<view class="f_center">登录毕导,体验更多功能</view>
			<other-login></other-login>
			<view class="f_center" style="color:#333;" @tap="openLogin">账号密码登录
				<view class="icon iconfont icon-jinru" style="color: #D5D5D5;"></view>
			</view>
		</template>
		<template v-if="islogin">
			<home-info :homeinfo="homeinfo"></home-info>
		</template>
		<home-data :homedata="homedata"></home-data>
		<view class="home-adv u-ajc">
			<image src="../../static/pic/timg.jpg" mode="widthFix"></image>
		</view>
		<view class="home-list">
			<block v-for="(item,index) in list" :key="index">
				<home-list-item :item="item"></home-list-item>
			</block>
		</view>
	</view>
</template>

<script>
	import homeListItem from '../../components/home/home-list-item.vue'
	import homeInfo from '../../components/home/home-info.vue'
	import otherLogin from '../../components/home/other-login.vue'
	import homeData from '../../components/home/home-data.vue'
	export default {
		components:{
			homeListItem,
			homeInfo,
			otherLogin,
			homeData
		},
		data() {
			return {
				islogin: false,
				homedata:[
					{name:"好友",num:0},
					{name:"动态",num:0},
					{name:"评论",num:0},
					{name:"收藏",num:0}
				],
				homeinfo:{
					userpic: "../../static/pic/timg.jpg",
					username: "楚棉",
					totalnum: 0,
					todaynum: 0
				},
				list: [
					{icon:"icon-liulan", name:"浏览历史",clicktype:"",url:""},
					{icon:"icon-huiyuanvip", name:"毕导认证",clicktype:"",url:""},
					{icon:"icon-keyboard", name:"审核文章",clicktype:"",url:""},
				]
			}
		},
		onNavigationBarButtonTap(e){
			if(e.index===0){
				uni.navigateTo({
					url:"../user-set/user-set"
				})
			}
		},
		methods:{
			openLogin(){
				uni.navigateTo({
					url: "../login/login"
				})
			}
		},
		onShow() {
			const _this = this
			uni.getStorage({
			    key: 'user_key',
			    success: function (res) {
			        console.log(res.data);
					_this.islogin = true;
					console.log(_this.homeinfo)
					_this.homeinfo["username"] = res.data.username
			    }
			});
		}
	}
</script>

<style>
	.home-adv{
		padding: 20upx;
	}
	.home-adv>image{
		border-radius: 20upx;
	}
</style>
