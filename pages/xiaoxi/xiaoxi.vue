<template>
	<view class="body">
		<paper-right-popup :show="show" @addfirend="addfirend" @clear="clear" @hidepopup="hidepopup"></paper-right-popup>
		<block v-for="(item,idx) in list" :key="idx">
			<paper-list :item="item"></paper-list>
		</block>
		<load-more :loadtext="loadtext"></load-more>
	</view>
</template>

<script>
	import uniBadge from '../../components/uni-badge/uni-badge.vue'
	import paperList from '../../components/paper/paper-list.vue'
	import loadMore from '../../components/common/load-more.vue';
	import paperRightPopup from '../../components/paper/paper-right-popup.vue'
	export default {
		components:{
			uniBadge,
			paperList,
			loadMore,
			paperRightPopup
		},
		data() {
			return {
				list: [
					{
						userpic:"../../static/userpic/userpic1.jpg",
						username: "昵称",
						time: "10:21",
						content: "内容内容",
						number: 12
					},
					{
						userpic:"../../static/userpic/userpic1.jpg",
						username: "昵称",
						time: "10:21",
						content: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
						number: 1
					}
				],
				loadtext: "上拉加载更多",
				show: false,
			}
		},
		onPullDownRefresh(){
			this.getData()
		},
		onReachBottom(){
			this.loadmore()
		},
		//监听导航按钮电击事件
		onNavigationBarButtonTap(e){
			 switch(e.index){
				 case 0: uni.navigateTo({
					url: '../user-list/user-list'
				});
				 this.hidepopup()
				 break;
				 case 1: this.showpopup();
				 break;
			 }
		},
		methods: {
			addfirend(){				
				this.hidepopup()
			},
			clear(){
				console.log("清除未读")
				this.hidepopup()
			},
			hidepopup(){
				this.show = false;
			},
			showpopup(){
				this.show=true;
			},
			getData(){
				setTimeout(()=>{
					this.list.push(
						{
							userpic:"../../static/demo/userpic/12.jpg",
							username: "昵称",
							time: "10:21",
							content: "内容内容",
							number: 12
						});
					uni.stopPullDownRefresh(); 
			},1000)
			},
			loadmore(){
				if(this.loadtext != "上拉加载更多") return;
				this.loadtext = "加载中...";
				setTimeout(()=>{
					this.list.push(
						{
							userpic:"../../static/userpic/userpic1.jpg",
							username: "昵称",
							time: "10:21",
							content: "内容内容",
							number: 12
						});
					this.loadtext = "上拉加载更多";
				},500);
				
			}
		}
	}
</script>

<style>
.body{
	padding: 0 20upx;
}
</style>
