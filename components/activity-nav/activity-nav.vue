<template>
	<uni-nav-bar :statusBar=true @clickLeft="qiandao" :border="false">
		<!-- 左边插槽 -->
		<template slot="left">
			<view class="qiandao icon iconfont iconqiandao"></view>
		</template>
		<view class="nav-tab-bar u-justify-content" style="width: 100%;">
			<block v-for="(item ,index) in tabList" :key="item.id">
				<view class="nav-tab-bar-title u-justify-content" :class="{active:tabIndex == index}" @tap="changTitle(index)"> 
					{{item.name}}
					<view class="nav-tab-bar-line"></view>
				</view>
			</block>
		</view>
		<!-- 右边插槽 -->
		<template slot="right">
				<view class="pen icon iconfont iconpen" @tap.stop="publish"></view>
		</template>
	</uni-nav-bar>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		props:{
			tabList : Array,
			tabIndex : Number
		},
		components:{
			uniNavBar
		},
		data() {
			return {
				
			};
		},
		methods:{
			qiandao(){
				console.log("签到");
			},
			// 改变标题索引
			changTitle(index){
				this.$emit("chang-title",index);
			},
			//跳转到发布页面
			publish(){
				uni.navigateTo({
					url:"../publish/publish"
				});
			}
		}
	}
</script>

<style scoped>
.qiandao{
	fontSize:18px;
	color:#FF9C1E;
	width: 100%;
}
.pen{
	fontSize:18px;
	color:#010000;
	position: absolute;
	right: 10upx;
	bottom:10upx;
	display: flex;
	justify-content: flex-end;
}
.nav-tab-bar{
	position: relative;
}
.nav-tab-bar-title{
	padding: 0 20upx;
	color: #969696;
	font-weight: bold;
}
.active{
	color: #343434;
}
.active .nav-tab-bar-line {
	border-radius: 50upx;
	border-top: 5upx solid #FCF004;
	border-bottom: 5upx solid #FCF004;
	width: 70upx;
	position: absolute;
	bottom: 0;
}
</style>
