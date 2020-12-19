<template>
	<view>
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabTap="tabTap"></swiper-tab-head>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperHeight+'px'}"
			:current="tabIndex" @change="tabChange">
				<swiper-item v-for="(info,index) in newList" :key="index">
					<scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
						<template v-if="info.list.length>0">
						<block v-for="(item,idx) in info.list" :key="idx">
							<topic-list :item="item"></topic-list>
						</block>
						<!-- 上拉加载 -->					
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
	import topicList from '../../components/topic-list/topic-list.vue'
	import loadMore from '../../components/common/load-more.vue';
	import noThing from '../../components/common/no-thing.vue';
	export default {
		components: {
			swiperTabHead,
			topicList,
			loadMore,
			noThing,
		},
		data() {
			return {
				swiperHeight: 500,
				tabBars: [{
						name: '关注',
						id: "zuixin"
					},
					{
						name: '推荐',
						id: 'tuijian'
					},
					{
						name: '体育',
						id: 'tiyu'
					},
					{
						name: '热点',
						id: 'redian'
					},
					{
						name: '财经',
						id: 'caijing'
					},
					{
						name: '娱乐',
						id: 'yule'
					},
				],
				tabIndex: 0,
				newList: [
					{
						loadtext: "请下拉加载",
						list: [
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "哈哈哈",
								sex: 0, //0男 1女
								age: 24,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "../../static/demo/datapic/13.jpg",
								video: false,
								sharen: false,
								path: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								goodnum: 20
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "哈哈哈",
								sex: 0, //0男 1女
								age: 24,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "../../static/demo/datapic/13.jpg",
								video: false,
								sharen: false,
								path: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								goodnum: 20
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "哈哈哈",
								sex: 0, //0男 1女
								age: 24,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "../../static/demo/datapic/13.jpg",
								video: false,
								sharen: false,
								path: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								goodnum: 20
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "哈哈哈",
								sex: 0, //0男 1女
								age: 24,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "../../static/demo/datapic/13.jpg",
								video: false,
								sharen: false,
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
		onLoad() {
			uni.getSystemInfo({
				success: (res)=>{
					let height = res.windowHeight - uni.upx2px(100);
					this.swiperHeight = height; 
				}
			})
		},
		methods: {
			tabTap(index) {
				this.tabIndex = index;
			},
			tabChange(e){
				this.tabIndex = e.detail.current;
			},
			loadmore(index) {
				if (this.newList[index].loadtext != "上拉加载更多") return;
				this.newList[index].loadtext = "加载中...";
				setTimeout(() => {
					let obj = {
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈哈",
							sex: 0, //0男 1女
							age: 24,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "../../static/demo/datapic/13.jpg",
							video: false,
							sharen: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						}
					this.newList[index].list.push(obj);
					this.newList[index].loadtext = "上拉加载更多";
				}, 500);

			}
		}
	}
</script>

<style>

</style>
