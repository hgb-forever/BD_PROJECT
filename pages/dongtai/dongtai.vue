<template>
	<view>
		<!-- 导航栏 -->
		<activity-nav :tabIndex="tabIndex" :tabList="tabList" @chang-title="changTitle"></activity-nav>
		<!-- 动态列表 -->
		<view class="uni-tab-bar">
			<swiper 
			class="swiper-box" 
			:current="tabIndex"
			:style="{height:swipHeight+'px'}"
			@change="changeSwipe">
				<swiper-item class="swiper-item">
					<!-- 关注 -->
					<scroll-view scroll-y="true" class="list" @scrolltolower="onReflash(0)">
						<template v-if="activityList[0].list.length>0">
							<!-- 列表数据 -->
							<block v-for="(item,index) in activityList[0].list" :key="index">
								<activity-list :item="item" :index="index"></activity-list>
							</block>
							<!-- 上拉刷新 -->
							<load-more :reflashtext="reflashtext"></load-more>
						</template>
						<template v-else>
							<!-- 无内容区 -->
							<no-thing></no-thing>
						</template>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item-huati">
					<scroll-view scroll-y="true" class="list">
						<!-- 话题列表 -->
						<topic-list :topicList="topicList"></topic-list>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import activityNav from '../../components/activity-nav/activity-nav.vue';
	import activityList from '../../components/activity-list/activity-list.vue';
	import loadMore from '../../components/common/load-more.vue'
	import noThing from '../../components/common/no-thing.vue'
	import topicList from '../../components/topic-list/topic-list.vue';
	export default {
		components:{
			activityNav,
			activityList,
			loadMore,
			noThing,
			topicList
		},
		onLoad() {
			uni.getSystemInfo({
			    success: (res)=> {
			        let height = res.windowHeight;
					this.swipHeight = height;
			    }
			});
		},
		data() {
			return {
				topicList : {
					updateList: [
						{
							imgsrc : "../../static/pic/timg.jpg",
							title : "淘宝记录簿",
							comment : "120斤 到 2220斤",
							infobar : "动态 202 今日 212"
						},
						{
							imgsrc : "../../static/pic/timg.jpg",
							title : "淘宝记录簿",
							comment : "120斤 到 2220斤",
							infobar : "动态 202 今日 212"
						},
						{
							imgsrc : "../../static/pic/timg.jpg",
							title : "淘宝记录簿",
							comment : "120斤 到 2220斤",
							infobar : "动态 202 今日 212"
						},
						{
							imgsrc : "../../static/pic/timg.jpg",
							title : "淘宝记录簿",
							comment : "120斤 到 2220斤",
							infobar : "动态 202 今日 212"
						}
					],
					hotList : {
							titlebar : {
								name : "热门分类",
								more :"更多",
							},
							classification :[
								{name : "最近",id :"zuijin"},
								{name : "游戏",id :"youxi"},
								{name : "情感",id :"qinggan"},
								{name : "打卡",id :"daka"},
								{name : "故事",id :"gushi"},
								{name : "喜爱",id :"xiai"},
							]
					},
					imageList : [
									"../../static/pic/timg1.jpg",
									"../../static/pic/timg.jpg",
									"../../static/pic/timg1.jpg",
								]
				},
				reflashtext:'上拉加载更多',
				tabIndex :1,
				swipHeight : 800,
				tabList : [{name : "关注",id : "guanzhu"},{name : "话题",id : "huati"}],
				activityList : [
					{
						//关注
						list :[
							{
								userpic : "../../static/userpic/userpic1.jpg", //用户头像url
								username : "uzi", //用户名
								isguanzhu : false, //是否已关注的人，0表示不是，1表示是
								content : "我曾踏足山巅，也曾进入低谷，二者都让我受益良多。--塔里克",  // 用户发表说说的标题
								type : "img" , // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
								// titlepic : "../../static/notepic/2.jpg", 
								infobar : {   //说说底部信息对象
									isexpress : 0 ,//是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
									zannum : 10 , //点赞数量
									cainum : 10 // 踩的数量
								},
								commentnum : 999,
								repostnum : 999,
								sex: 0, //0男 1女
								age: 24,
								position:{
									province : "福建",
									city :"龙岩"
								},
								morepic: ["../../static/pic/rap.png","../../static/pic/t1.jpg","../../static/pic/t2.jpg","../../static/pic/t3.jpg"],// 发表的图片url
								titlepic: "../../static/pic/rap.png",
								video: false,
								sharen: true,
							},
							{
								userpic : "../../static/userpic/userpic1.jpg", //用户头像url
								username : "uzi", //用户名
								isguanzhu : false, //是否已关注的人，0表示不是，1表示是
								content : "我曾踏足山巅，也曾进入低谷，二者都让我受益良多。--塔里克",  // 用户发表说说的标题
								type : "img" , // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
								// titlepic : "../../static/notepic/2.jpg", 
								infobar : {   //说说底部信息对象
									isexpress : 0 ,//是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
									zannum : 10 , //点赞数量
									cainum : 10 // 踩的数量
								},
								commentnum : 999,
								repostnum : 999,
								sex: 0, //0男 1女
								age: 24,
								position:{
									province : "福建",
									city :"龙岩"
								},
								morepic: ["../../static/pic/rap.png","../../static/pic/t1.jpg","../../static/pic/t2.jpg","../../static/pic/t3.jpg"],// 发表的图片url
								titlepic: "../../static/pic/rap.png",
								video: false,
								sharen: true,
							},
							{
								userpic : "../../static/userpic/userpic1.jpg", //用户头像url
								username : "uzi", //用户名
								isguanzhu : false, //是否已关注的人，0表示不是，1表示是
								content : "我曾踏足山巅，也曾进入低谷，二者都让我受益良多。--塔里克",  // 用户发表说说的标题
								type : "img" , // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
								// titlepic : "../../static/notepic/2.jpg", 
								infobar : {   //说说底部信息对象
									isexpress : 0 ,//是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
									zannum : 10 , //点赞数量
									cainum : 10 // 踩的数量
								},
								commentnum : 999,
								repostnum : 999,
								sex: 0, //0男 1女
								age: 24,
								position:{
									province : "福建",
									city :"龙岩"
								},
								morepic: ["../../static/pic/rap.png","../../static/pic/t1.jpg","../../static/pic/t2.jpg","../../static/pic/t3.jpg"],// 发表的图片url
								titlepic: "../../static/pic/rap.png",
								video: false,
								sharen: true,
							}
							
						]
						
					}
				]
			}
		},
		methods: {
			// 滑动改变tabIndex
			changeSwipe(e){
				this.tabIndex = e.detail.current
			},
			//下拉加载更多
			onReflash(index1){
				if(this.reflashtext !== "上拉加载更多"){return ;}
				this.reflashtext = "加载中";
				setTimeout(()=>{
					let newxinxi = {
								userpic : "../../static/userpic/userpic1.jpg", //用户头像url
								username : "死猪不怕开水烫的猪", //用户名
								sex : "man", //用户性别
								age :"22", //用户年龄
								isguanzhu : true, //是否已关注的人，0表示不是，1表示是
								title : "我曾踏足山巅，也曾进入低谷，二者都让我受益良多。--塔里克",  // 用户发表说说的标题
								type : "img" , // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
								titlepic : "../../static/pic/timg.jpg", // 发表的图片url
								position:{
									province : "福建",
									city :"龙岩"
								},
								infobar : {   //说说底部信息对象
									isexpress : 0 ,//是否点赞或者踩,0表示未操作，1表示点赞
									zannum : 213 , //点赞数量
								},
								commentnum : 513,
								repostnum : 32
							};
							this.activityList[index1].list.push(newxinxi)
							this.reflashtext = "上拉加载更多";
				},1000)
			},
			// 改变标题索引
			changTitle(index){
				this.tabIndex = index
			},
			
		}
	}
</script>

<style scoped>

</style>
