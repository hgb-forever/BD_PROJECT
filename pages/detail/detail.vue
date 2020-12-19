<template>
	<view>
		<detail-info :item="detail"></detail-info>
		<view class="u-comment-title">最新评论 {{comment.count}}</view>
		<view class="uni-comment u-comment">
			<block v-for="(item,index) in comment.list" :key="index">
				<comment-list :item="item" :index="index"></comment-list>
			</block>
		</view>
		<view style="height: 120upx;"></view>
		<user-chat-bottom @submit="submit"></user-chat-bottom>
		<!-- 分享 -->
		<more-share :show="shareshow" @toggle="toggle"></more-share>
	</view>
</template>

<script>
	import detailInfo from '../../components/detail/detail-info.vue'
	import commentList from '../../components/detail/comment-list.vue'
	import time from '../../common/time.js'
	import userChatBottom from '../../components/user-chat/user-chat-bottom.vue'
	import moreShare from '../../components/common/more-share.vue'
	export default {
		components:{
			detailInfo,
			commentList,
			userChatBottom,
			moreShare
		},
		data() {
			return {
				shareshow: false,
				comment:{
					count: 20,
					list:[]
				},
				detail: {
					/*  userpic : "../../static/notepic/1.jpg", //用户头像url
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
						repostnum : 999 */
						// morepic: ["../../static/pic/rap.png","../../static/pic/t1.jpg","../../static/pic/t2.jpg","../../static/pic/t3.jpg"],
						// titlepic: "../../static/pic/rap.png",
						// video: false,
						// sharen: true,
						// sharenum: 20,
						// goodnum: 20
					}
			}
		},
		onLoad(e){
			this.initdata(JSON.parse(e.detailData))
			this.getcomment()
		},
		//监听右边按钮
		onNavigationBarButtonTap(e){
			if(e.index == 0){
				this.toggle()
			}
		},		
		methods: {
			toggle(){
				this.shareshow = !this.shareshow;
			},
			submit(text){
				let obj = {
					id:1,
					fid:0,
					userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
					username:"小猫咪",
					time: time.gettime.gettime(new Date().getTime()),
					data:text,
				}
				this.comment.list.push(obj);		
			},
			getcomment(){
				let arr=[
					// 一级评论
					{
						id:1,
						fid:0,
						userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						username:"小猫咪",
						time:"1555400035",
						data:"支持国产，支持DCloud!",
					},
					// 子级评论
					{
						id:2,
						fid:1,
						userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						username:"小猫咪",
						time:"1555400035",
						data:"支持国产，支持DCloud!",
					},
					{
						id:3,
						fid:1,
						userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						username:"小猫咪",
						time:"1555400035",
						data:"支持国产，支持DCloud!",
					},
					{
						id:4,
						fid:0,
						userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						username:"小猫咪",
						time:"1555400035",
						data:"支持国产，支持DCloud!",
					},
				];
				for (let i = 0; i < arr.length; i++) {
					arr[i].time=time.gettime.gettime(arr[i].time);
				}
				this.comment.list=arr;
			},
			//初始化数据
			initdata(val){
				this.item = val;
				console.log("this.item = ")
				console.log(this.item)
				console.log("val")
				console.log(val);
				this.detail = val
				//修改窗口标题
				uni.setNavigationBarTitle({
					title: val.title
				})
			}
		}
	}
</script>

<style>
.u-comment{
	padding: 0 20upx;
}
.u-comment-title{
	padding: 20upx;
	font-size: 30upx;
	font-weight: bold;
}
</style>
