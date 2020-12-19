<template>
	<view>
		<scroll-view id="scrollview" scroll-y :scroll-top="scrollTop" :scroll-with-animation="true" :style="{height:style.contentH+'px'}">
			<block v-for="(item,index) in list" :key="index">
				<user-chat-list :item="item"></user-chat-list>
			</block>
		</scroll-view>
		<user-chat-bottom @submit="submit"></user-chat-bottom>
	</view>
</template>

<script>
	import userChatBottom from '../../components/user-chat/user-chat-bottom.vue'
	import time from '../../common/time.js'
	import userChatList from '../../components/user-chat/user-chat-list.vue'
	export default {
		components:{
			userChatBottom,
			userChatList
		},
		data() {
			return {
				style:{
					contentH: 0,
					itemH: 0
				},
				scrollTop: 0,
				list:[]
			}
		},
		onLoad(){
			this.getdata()
			this.initdata()
		},
		onReady(){
			this.pageToBottom()
		},
		methods: {
			initdata(){
				try{
					const res = uni.getSystemInfoSync();
					this.style.contentH = res.windowHeight - uni.upx2px(120)
				}catch(e){
					
				}
			},
			pageToBottom(){
				const q = uni.createSelectorQuery()
				q.select("#scrollview").boundingClientRect()
				q.selectAll(".user-chat-item").boundingClientRect()
				q.exec(res=>{
					console.log(res)
					res[1].forEach(ret=>{
						this.style.itemH += ret.height;
					})
					if(this.style.itemH>this.style.contentH){
						this.scrollTop = this.style.itemH;
					}
				})
			},
			getdata(){
				let arr = [
					{
						isme: false,
						userpic: "../../static/demo/userpic/11.jpg",
						type: "text",
						data: "哈哈哈",
						time: "1495047807333",
						gstime: ""
					},
					{
						isme: true,
						userpic: "../../static/demo/userpic/12.jpg",
						type: "text",
						data: "哈哈哈111",
						time: "1595057791333",
						gstime: ""
					}
				];
				for(let i=0;i<arr.length;i++){
					arr[i].gstime = time.gettime.getChatTime(arr[i].time,i>0?arr[i-1].time:0)
				}
				this.list = arr;
			},
			submit(text){
				let obj = {
					isme: true,
					userpic: "../../static/demo/userpic/11.jpg",
					type: "text",
					data: text,
					time: new Date().getTime(),
					gstime: time.gettime.getChatTime(Date.now(),this.list[this.list.length-1].time)
				}
				this.list.push(obj);
				this.$nextTick(()=>{
						this.pageToBottom()
				})
			
			}
		}
	}
</script>

<style>

</style>
