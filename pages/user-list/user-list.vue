<template>
	<view class="body">
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabTap="tabTap" scrollStyle="border-bottom:0;" scrollItemStyle="width:33%;"></swiper-tab-head>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperHeight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(info,index) in userList" :key="index">
				<scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
					<template v-if="info.list.length>0">
					<block v-for="(item,idx) in info.list" :key="idx">
						<user-list :item="item"></user-list>
					</block>
					<load-more :loadtext="info.loadtext"></load-more>
					</template>
					<template v-else>
						<no-thing></no-thing>
					</template>
				</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import swiperTabHead from '../../components/index/uni-tab-bar.vue';
	import userList from '../../components/user-list/user-list.vue'
	import loadMore from '../../components/common/load-more.vue';
	import noThing from '../../components/common/no-thing.vue';
	export default {
		components:{
			swiperTabHead,
			userList,
			loadMore,
			noThing
		},
		data() {
			return {
				swiperHeight: 500,
				tabIndex: 0,
				tabBars: [
					{
						name: "互关",
						id: 0,
						number: 10
					},
					{
						name: "关注",
						id: 1,
						number: 10
					},
					{
						name: "粉丝",
						id: 2,
						number: 10
					}
				],
				userList: [
					{
						loadtext: "上拉加载更多",
						list: [
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "小小酥",
								sex: 0,
								age: 21,
								isguanzhu: false
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "小小酥",
								sex: 1,
								age: 21,
								isguanzhu: true
							},{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "小小酥",
								sex: 0,
								age: 21,
								isguanzhu: false
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "小小酥",
								sex: 1,
								age: 21,
								isguanzhu: true
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "小小酥",
								sex: 0,
								age: 21,
								isguanzhu: false
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "小小酥",
								sex: 1,
								age: 21,
								isguanzhu: true
							}
						]
					},
					{
						loadtext: "上拉加载更多",
						list: [
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "小小酥",
								sex: 0,
								age: 21,
								isguanzhu: false
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "小小酥",
								sex: 1,
								age: 21,
								isguanzhu: true
							}
						]
					},
					{
						loadtext: "上拉加载更多",
						list: [
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "小小酥",
								sex: 0,
								age: 21,
								isguanzhu: false
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "小小酥",
								sex: 1,
								age: 21,
								isguanzhu: true
							}
						]
					}
				]
				
			}
		},
		onLoad(){
			uni.getSystemInfo({
				success: res=>{
					let height = res.windowHeight - uni.upx2px(100);
					this.swiperHeight = height;
				}
			})
		},
		onNavigationBarButtonTap(e){
			if(e.index == 0){
				uni.navigateBack({
					delta: 1
				})
			}
		},
		methods: {
			tabChange(e){
				this.tabIndex = e.detail.current;
			},
			tabTap(index){
				this.tabIndex = index;
			},
			loadmore(index){
				if(this.userList[index].loadtext != '上拉加载更多') return;
				this.userList[index].loadtext="加载中...";
				setTimeout(()=>{
					let obj = {
						userpic: "../../static/demo/userpic/12.jpg",
						username: "小小酥",
						sex: 1,
						age: 21,
						isguanzhu: true
					};
					this.userList[index].list.push(obj);
					this.userList[index].loadtext = "上拉加载更多"
				},500)
			}
		}
	}
</script>

<style>
.body{
	padding: 0 20upx;
}

</style>
