<template>
	<view>
		<topic-info :item="info"></topic-info>
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabTap="tabTap" scrollStyle="border-bottom:0;" scrollItemStyle="width:50%;"></swiper-tab-head>
		<view class="topic-detail-list">
			<block v-for="(item,idx) in tabList" :key="idx">
				<template v-if="idx==tabIndex">
					<block v-for="(list ,index) in item.list" :key="index">
					<common-list :item="list" :idx="index"></common-list>
					</block>
				<load-more :loadtext="item.loadtext"></load-more>
				</template>
			</block>
		</view>
	</view>
</template>

<script>
	import topicInfo from '../../components/topic/topic-info.vue';
	import swiperTabHead from '../../components/index/uni-tab-bar.vue';
	import commonList from '../../components/common/common-list.vue'
	import loadMore from '../../components/common/load-more.vue';
	export default {
		components:{
			topicInfo,
			swiperTabHead,
			commonList,
			loadMore
		},
		data() {
			return {
				info:{
					titlepic: "../../static/pic/r.jpg",
					title: "#忆往事，敬余生#",
					desc: "我是描述",
					totalnum: 1000,
					todaynum: 1000
				},
				tabIndex: 0,
				tabBars:[
					{ name: "默认", id:0},
					{ name: "最新", id:1}
				],
				tabList:[
					{
						loadtext: "上拉加载更多",
						list: [
							{
									userpic: "../../static/pic/t3.jpg",
									username: "哈哈哈",
									sex: 0, //0男 1女
									age: 24,
									isguanzhu: false,
									title: "我是标题",
									titlepic: "../../static/pic/t1.jpg",
									video: false,
									sharen: false,
									path: "深圳 龙岗",
									sharenum: 20,
									commentnum: 30,
									goodnum: 20
								},
								{
									userpic: "../../static/pic/t2.jpg",
									username: "哈哈哈",
									sex: 1, //0男 1女
									age: 24,
									isguanzhu: false,
									title: "我是标题",
									titlepic: "../../static/pic/rap.jpg",
									video: {
										looknum: "20w",
										long: "2:47"
									},
									sharen: false,
									path: "深圳 龙岗",
									sharenum: 20,
									commentnum: 30,
									goodnum: 20
								},
								{
									userpic: "../../static/pic/rap.jpg",
									username: "哈哈哈",
									sex: 1, //0男 1女
									age: 24,
									isguanzhu: true,
									title: "我是标题",
									titlepic: "../../static/pic/rap.jpg",
									video: false,
									sharen: {
										title: "我是标题",
										titlepic: "../../static/pic/rap.jpg"
									},
									path: "深圳 龙岗",
									sharenum: 20,
									commentnum: 30,
									goodnum: 20
								}
						]
					},
					{
						loadtext: "上拉加载更多",
						list: [
							{
									userpic: "../../static/pic/rap.jpg",
									username: "哈哈哈",
									sex: 0, //0男 1女
									age: 24,
									isguanzhu: false,
									title: "我是标题",
									titlepic: "../../static/pic/rap.jpg",
									video: false,
									sharen: false,
									path: "深圳 龙岗",
									sharenum: 20,
									commentnum: 30,
									goodnum: 20
								},
								{
									userpic: "../../static/pic/rap.jpg",
									username: "哈哈哈",
									sex: 1, //0男 1女
									age: 24,
									isguanzhu: false,
									title: "我是标题",
									titlepic: "../../static/pic/rap.jpg",
									video: {
										looknum: "20w",
										long: "2:47"
									},
									sharen: false,
									path: "深圳 龙岗",
									sharenum: 20,
									commentnum: 30,
									goodnum: 20
								},
								{
									userpic: "../../static/pic/rap.jpg",
									username: "哈哈哈",
									sex: 1, //0男 1女
									age: 24,
									isguanzhu: true,
									title: "我是标题",
									titlepic: "../../static/pic/rap.jpg",
									video: false,
									sharen: {
										title: "我是标题",
										titlepic: "../../static/pic/rap.jpg"
									},
									path: "深圳 龙岗",
									sharenum: 20,
									commentnum: 30,
									goodnum: 20
								}
						]
					}
				]
			}
		},
		//页面上拉刷新触底函数
		onReachBottom(){
			this.loadmore()
		},
		//下拉刷新
		onPullDownRefresh(){
			this.getData()
		},
		methods: {
			getData(){
				setTimeout(()=>{
					uni.stopPullDownRefresh();
				},2000)
			},
			tabTap(index){
				this.tabIndex = index;
			},
			loadmore(){
				if(this.tabList[this.tabIndex].loadtext != "上拉加载更多") return;
				this.tabList[this.tabIndex].loadtext = "加载中...";
				setTimeout(()=>{
					let obj ={
									userpic: "../../static/pic/rap.jpg",
									username: "哈哈哈",
									sex: 1, //0男 1女
									age: 24,
									isguanzhu: true,
									title: "我是标题",
									titlepic: "../../static/pic/rap.jpg",
									video: false,
									sharen: {
										title: "我是标题",
										titlepic: "../../static/pic/rap.jpg"
									},
									path: "深圳 龙岗",
									sharenum: 20,
									commentnum: 30,
									goodnum: 20
								}
					this.tabList[this.tabIndex].list.push(obj);
					this.tabList[this.tabIndex].loadtext = "上拉加载更多";
				},500);
				
			}
		}
	}
</script>

<style>

</style>
