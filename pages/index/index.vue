<template>
	<view>
		<tarBar 
		:tabBarinfo="tabBarinfo" 
		:tabIndex="tabIndex"
		@changIndex="handleChange">
		</tarBar>
		
		<view class="uni-tab-bar">
			<swiper  
			class="swiper-box" 
			:current="tabIndex" 
			:style="{height:swipHeight+'px'}"
			@change="changeSwipe">
				<swiper-item class="swiper-item" v-for="(item1,index1) in newslist" :key="index1">
					<scroll-view scroll-y="true" class="list" @scrolltolower="onReflash(index1)">
						<template v-if="item1.list.length>0">
							<!-- 列表数据 -->
							<block v-for="(item,index) in item1.list" :key="index">
								<index-list :item="item" :index="index" @on-focus="onFoucs(index1,index)" @on-chanl="onChanl(index1,index)" @ding-cai="dingcai" :index1="index1"></index-list>
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
			</swiper>
		</view>
		
	</view>
</template>

<script>
	import indexList from '../../components/index/index-list.vue'
	import tarBar from '../../components/index/uni-tab-bar.vue'
	import loadMore from '../../components/common/load-more.vue'
	import noThing from '../../components/common/no-thing.vue'
	export default {
		components:{
			indexList,
			tarBar,
			loadMore,
			noThing
		},
		data() {
			return {
				reflashtext:"上拉加载更多",
				swipHeight : 800,
				tabIndex :0,
				tabBarinfo : [
					{name : "关注",id : "guanzhu"},
					{name : "推荐",id : "tuijian"},
					{name : "热点",id : "redian"},
					{name : "财经",id : "caijing"},
					{name : "娱乐",id : "yule"},
					{name : "体育",id : "tiyu"},
					{name : "军事",id : "junshi"},
					{name : "本地",id : "bendi"},
				],
				newslist : [
					{
						list : [
							{
								userpic : "../../static/notepic/1.jpg", //用户头像url
								username : "我又不是uzi", //用户名
								isguanzhu : false, //是否已关注的人，0表示不是，1表示是
								title : "欢迎来到德莱联盟！！！",  // 用户发表说说的标题
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
								path: "深圳 龙岗",
								morepic: ["../../static/pic/rap.png","../../static/pic/t1.jpg","../../static/pic/t2.jpg","../../static/pic/t3.jpg"],// 发表的图片url
								titlepic: "../../static/pic/rap.png",
								video: false,
								sharen: true,
							},
							{
								userpic : "../../static/notepic/1.jpg", //用户头像url
								username : "我又不是uzi", //用户名
								isguanzhu : false, //是否已关注的人，0表示不是，1表示是
								title : "欢迎来到德莱联盟！！！",  // 用户发表说说的标题
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
								path: "深圳 龙岗",
								morepic: ["../../static/pic/rap.png","../../static/pic/t1.jpg","../../static/pic/t2.jpg","../../static/pic/t3.jpg"],// 发表的图片url
								titlepic: "../../static/pic/rap.png",
								video: false,
								sharen: true,
							},
							{
								userpic : "../../static/notepic/1.jpg", //用户头像url
								username : "我又不是uzi", //用户名
								isguanzhu : false, //是否已关注的人，0表示不是，1表示是
								title : "欢迎来到德莱联盟！！！",  // 用户发表说说的标题
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
								path: "深圳 龙岗",
								morepic: ["../../static/pic/rap.png","../../static/pic/t1.jpg","../../static/pic/t2.jpg","../../static/pic/t3.jpg"],// 发表的图片url
								titlepic: "../../static/pic/rap.png",
								video: false,
								sharen: true,
							},
							{
								userpic : "../../static/notepic/1.jpg", //用户头像url
								username : "我又不是uzi", //用户名
								isguanzhu : false, //是否已关注的人，0表示不是，1表示是
								title : "欢迎来到德莱联盟！！！",  // 用户发表说说的标题
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
								path: "深圳 龙岗",
								morepic: ["../../static/pic/rap.png","../../static/pic/t1.jpg","../../static/pic/t2.jpg","../../static/pic/t3.jpg"],// 发表的图片url
								titlepic: "../../static/pic/rap.png",
								video: false,
								sharen: true,
							},
							{
								userpic : "../../static/notepic/1.jpg", //用户头像url
								username : "我又不是uzi", //用户名
								isguanzhu : false, //是否已关注的人，0表示不是，1表示是
								title : "欢迎来到德莱联盟！！！",  // 用户发表说说的标题
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
								path: "深圳 龙岗",
								morepic: ["../../static/pic/rap.png","../../static/pic/t1.jpg","../../static/pic/t2.jpg","../../static/pic/t3.jpg"],// 发表的图片url
								titlepic: "../../static/pic/rap.png",
								video: false,
								sharen: true,
							},
							{
								userpic : "../../static/notepic/1.jpg", //用户头像url
								username : "我又不是uzi", //用户名
								isguanzhu : false, //是否已关注的人，0表示不是，1表示是
								title : "欢迎来到德莱联盟！！！",  // 用户发表说说的标题
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
								path: "深圳 龙岗",
								morepic: ["../../static/pic/rap.png","../../static/pic/t1.jpg","../../static/pic/t2.jpg","../../static/pic/t3.jpg"],// 发表的图片url
								titlepic: "../../static/pic/rap.png",
								video: false,
								sharen: true,
							},
							{
								userpic : "../../static/notepic/1.jpg", //用户头像url
								username : "我又不是uzi", //用户名
								isguanzhu : false, //是否已关注的人，0表示不是，1表示是
								title : "欢迎来到德莱联盟！！！",  // 用户发表说说的标题
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
								path: "深圳 龙岗",
								morepic: ["../../static/pic/rap.png","../../static/pic/t1.jpg","../../static/pic/t2.jpg","../../static/pic/t3.jpg"],// 发表的图片url
								titlepic: "../../static/pic/rap.png",
								video: false,
								sharen: true,
							},
							{
								userpic : "../../static/notepic/1.jpg", //用户头像url
								username : "我又不是uzi", //用户名
								isguanzhu : false, //是否已关注的人，0表示不是，1表示是
								title : "欢迎来到德莱联盟！！！",  // 用户发表说说的标题
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
								path: "深圳 龙岗",
								morepic: ["../../static/pic/rap.png","../../static/pic/t1.jpg","../../static/pic/t2.jpg","../../static/pic/t3.jpg"],// 发表的图片url
								titlepic: "../../static/pic/rap.png",
								video: false,
								sharen: true,
							},
							{
								userpic : "../../static/notepic/1.jpg", //用户头像url
								username : "我又不是uzi", //用户名
								isguanzhu : false, //是否已关注的人，0表示不是，1表示是
								title : "欢迎来到德莱联盟！！！",  // 用户发表说说的标题
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
								path: "深圳 龙岗",
								morepic: ["../../static/pic/rap.png","../../static/pic/t1.jpg","../../static/pic/t2.jpg","../../static/pic/t3.jpg"],// 发表的图片url
								titlepic: "../../static/pic/rap.png",
								video: false,
								sharen: true,
							}
						]
					},
					// {
					// 	list : [
							
					// 		{
					// 			userpic : "../../static/notepic/1.jpg", //用户头像url
					// 			username : "我又不是uzi", //用户名
					// 			isguanzhu : true, //是否已关注的人，0表示不是，1表示是
					// 			title : "欢迎来到德莱联盟！！！",  // 用户发表说说的标题
					// 			type : "video" , // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
					// 			videoinfo : {
					// 				time : "2:47",
					// 				num : "30w"
					// 			},
					// 			titlepic : "../../static/notepic/2.jpg", // 发表的图片url
					// 			infobar : {   //说说底部信息对象
					// 				isexpress : 1 ,//是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
					// 				zannum : 10 , //点赞数量
					// 				cainum : 10 // 踩的数量
					// 			},
					// 			commentnum : 999,
					// 			repostnum : 999
					// 		},
					// 		{
					// 			userpic : "../../static/notepic/1.jpg", //用户头像url
					// 			username : "我又不是uzi", //用户名
					// 			isguanzhu : false, //是否已关注的人，0表示不是，1表示是
					// 			title : "欢迎来到德莱联盟！！！",  // 用户发表说说的标题
					// 			type : "img" , // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
					// 			titlepic : "../../static/notepic/2.jpg", // 发表的图片url
					// 			infobar : {   //说说底部信息对象
					// 				isexpress : 2 ,//是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
					// 				zannum : 10 , //点赞数量
					// 				cainum : 10 // 踩的数量
					// 			},
					// 			commentnum : 999,
					// 			repostnum : 999
					// 		}
					// 	]
					// },
					// {
					// 	list : [
					// 		{
					// 			userpic : "../../static/notepic/1.jpg", //用户头像url
					// 			username : "我又不是uzi", //用户名
					// 			isguanzhu : false, //是否已关注的人，0表示不是，1表示是
					// 			title : "欢迎来到德莱联盟！！！",  // 用户发表说说的标题
					// 			type : "img" , // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
					// 			titlepic : "../../static/notepic/2.jpg", // 发表的图片url
					// 			infobar : {   //说说底部信息对象
					// 				isexpress : 0 ,//是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
					// 				zannum : 10 , //点赞数量
					// 				cainum : 10 // 踩的数量
					// 			},
					// 			commentnum : 999,
					// 			repostnum : 999
					// 		},
					// 		{
					// 			userpic : "../../static/notepic/1.jpg", //用户头像url
					// 			username : "我又不是uzi", //用户名
					// 			isguanzhu : true, //是否已关注的人，0表示不是，1表示是
					// 			title : "欢迎来到德莱联盟！！！",  // 用户发表说说的标题
					// 			type : "video" , // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
					// 			videoinfo : {
					// 				time : "2:47",
					// 				num : "30w"
					// 			},
					// 			titlepic : "../../static/notepic/2.jpg", // 发表的图片url
					// 			infobar : {   //说说底部信息对象
					// 				isexpress : 1 ,//是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
					// 				zannum : 10 , //点赞数量
					// 				cainum : 10 // 踩的数量
					// 			},
					// 			commentnum : 999,
					// 			repostnum : 999
					// 		},
					// 		{
					// 			userpic : "../../static/notepic/1.jpg", //用户头像url
					// 			username : "我又不是uzi", //用户名
					// 			isguanzhu : false, //是否已关注的人，0表示不是，1表示是
					// 			title : "欢迎来到德莱联盟！！！",  // 用户发表说说的标题
					// 			type : "img" , // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
					// 			titlepic : "../../static/notepic/2.jpg", // 发表的图片url
					// 			infobar : {   //说说底部信息对象
					// 				isexpress : 2 ,//是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
					// 				zannum : 10 , //点赞数量
					// 				cainum : 10 // 踩的数量
					// 			},
					// 			commentnum : 999,
					// 			repostnum : 999
					// 		}
					// 	]
					// },
					// {
					// 	list : [
					// 		{
					// 			userpic : "../../static/notepic/1.jpg", //用户头像url
					// 			username : "我又不是uzi", //用户名
					// 			isguanzhu : false, //是否已关注的人，0表示不是，1表示是
					// 			title : "欢迎来到德莱联盟！！！",  // 用户发表说说的标题
					// 			type : "img" , // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
					// 			titlepic : "../../static/notepic/2.jpg", // 发表的图片url
					// 			infobar : {   //说说底部信息对象
					// 				isexpress : 0 ,//是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
					// 				zannum : 10 , //点赞数量
					// 				cainum : 10 // 踩的数量
					// 			},
					// 			commentnum : 999,
					// 			repostnum : 999
					// 		},
					// 		{
					// 			userpic : "../../static/notepic/1.jpg", //用户头像url
					// 			username : "我又不是uzi", //用户名
					// 			isguanzhu : true, //是否已关注的人，0表示不是，1表示是
					// 			title : "欢迎来到德莱联盟！！！",  // 用户发表说说的标题
					// 			type : "video" , // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
					// 			videoinfo : {
					// 				time : "2:47",
					// 				num : "30w"
					// 			},
					// 			titlepic : "../../static/notepic/2.jpg", // 发表的图片url
					// 			infobar : {   //说说底部信息对象
					// 				isexpress : 1 ,//是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
					// 				zannum : 10 , //点赞数量
					// 				cainum : 10 // 踩的数量
					// 			},
					// 			commentnum : 999,
					// 			repostnum : 999
					// 		},
					// 		{
					// 			userpic : "../../static/notepic/1.jpg", //用户头像url
					// 			username : "我又不是uzi", //用户名
					// 			isguanzhu : false, //是否已关注的人，0表示不是，1表示是
					// 			title : "欢迎来到德莱联盟！！！",  // 用户发表说说的标题
					// 			type : "img" , // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
					// 			titlepic : "../../static/notepic/2.jpg", // 发表的图片url
					// 			infobar : {   //说说底部信息对象
					// 				isexpress : 2 ,//是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
					// 				zannum : 10 , //点赞数量
					// 				cainum : 10 // 踩的数量
					// 			},
					// 			commentnum : 999,
					// 			repostnum : 999
					// 		}
					// 	]
					// },
					{ list : []	},
					{ list : [] },
					{ list : [] },
					{ list : [] },
					{ list : []	},
					{ list : [] },
					{ list : [] }
				]
			}
		},
		onLoad() {
			uni.getSystemInfo({
			    success: (res)=> {
			        let height = res.windowHeight - uni.upx2px(100);
					// console.log(height)
					this.swipHeight = height;
			    }
			});
			uni.request({
				url:"http://localhost:8080/renren-fast/article/getAllArticle",
				success: (res) => {
					/* articleContent: "测试102"
						articleId: 1002
						articleTitle: "测试102"
						createTime: "2020-10-30 11:59:27"
						userId: 1 
						*/
					if(res.data != undefined){
						// console.log(this.newslist[0].list)
						// let count = 1
						for (let i in res.data) {
							this.newslist[0].list[i].title = res.data[i].articleTitle
							this.newslist[0].list[i].type = "text"
							this.newslist[0].list[i].content = res.data[i].articleContent
						}
						// this.newslist[0].list[0].title = res.data[0].articleTitle
						// this.newslist[0].list[0].type = "text"
						// this.newslist[0].list[0].content = res.data[0].articleContent
						// console.log(this.newslist[0].list[0]);
					}
					console.log(res.data)
				},
				fail: (fail) => {
					console.log(fail)
				}
			})
		},
		methods: {
			//监听原生导航栏按钮点击事件
			onNavigationBarButtonTap(e){
				if(e.index == 1){
					uni.navigateTo({
						url:"../publish/publish"
					})
				}
			},
			//监听原生标题栏搜索框点击事件
			onNavigationBarSearchInputClicked(){
				uni.navigateTo({
					url: '../search/search'
				})
			},
			handleChange(index){
				this.tabIndex = index;
			},
			changeSwipe(e){
				this.tabIndex = e.detail.current
			},
			onReflash(index1){
				if(this.reflashtext !== "上拉加载更多"){return ;}
				this.reflashtext = "加载中";
				setTimeout(()=>{
					let newxinxi = {
								userpic : "../../static/notepic/1.jpg", //用户头像url
								username : "我又不是uzi", //用户名
								isguanzhu : false, //是否已关注的人，0表示不是，1表示是
								title : "欢迎来到德莱联盟！！！",  // 用户发表说说的标题
								type : "img" , // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
								titlepic : "../../static/notepic/2.jpg", // 发表的图片url
								infobar : {   //说说底部信息对象
									isexpress : 0 ,//是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
									zannum : 10 , //点赞数量
									cainum : 10 // 踩的数量
								},
								commentnum : 999,
								repostnum : 999
							};
							this.newslist[index1].list.push(newxinxi)
							this.reflashtext = "上拉加载更多";
				},1500)
			},
			
			// 关注按钮事件
			onFoucs(index1,index){
				this.newslist[index1].list[index].isguanzhu = true;
				uni.showToast({
					title:"关注成功!"
				});
			},
			// 取消关注按钮
			onChanl(index1,index){
				uni.showModal({
				    title: '提示',
				    content: '确定取消关注？',
				    confirmText:"是",
				    cancelText:"否",
				    success: (res)=> {
				        if (res.confirm) {
							this.newslist[index1].list[index].isguanzhu = false;
							uni.showToast({
								title:"取消成功!"
							});
				        }
				    }
				});
			},
			dingcai(index1,index,type){
				switch (type){
					case 1: 
					if(this.newslist[index1].list[index].infobar.isexpress == 1){return ;}
					this.newslist[index1].list[index].infobar.zannum++;
					if(this.newslist[index1].list[index].infobar.isexpress == 2)
					this.newslist[index1].list[index].infobar.cainum--;
					this.newslist[index1].list[index].infobar.isexpress =1;
						break;
					case 2:
					if(this.newslist[index1].list[index].infobar.isexpress == 2){return ;}
					this.newslist[index1].list[index].infobar.cainum++;
					if(this.newslist[index1].list[index].infobar.isexpress == 1)
					this.newslist[index1].list[index].infobar.zannum--;
					this.newslist[index1].list[index].infobar.isexpress =2;
						break;
				}
			}
		
		}
	}
</script>

<style>

</style>
