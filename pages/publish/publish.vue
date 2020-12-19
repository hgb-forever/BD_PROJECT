<template>
	<view>
			<!-- 非原生标题栏 -->
			<uni-nav-bar :statusBar=true left-icon="arrowleft" right-text="发布" left-text="返回" @clickLeft="back" @clickRight= "publish">
				<view class="u-justify-content" style="width: 100%;" @tap="changTitle">
					{{yinsi}}
					<view class="icon iconfont iconxialazhankai" style="font-size: 25upx;"></view>
				</view>
			</uni-nav-bar>
			<!-- 多行输入框 -->
			<view class="uni-textarea">
				<textarea placeholder="随便写点什么吧~" style="border: 1upx solid #E5E5E5;" v-model="text"></textarea>
			</view>
			<!-- 上传多图 -->
			<upload-image @upload="uploadImag"></upload-image>
			<!-- 弹出公告 -->
			<!-- <button @click="open">打开弹窗</button> -->
			<uni-popup ref="popup" type="center" :maskClick="false">
				<view class="popup-content" >
					<view class="u-justify-content">
						<image src="../../static/common/ban.jpeg" mode="widthFix"></image>
					</view>
					<view>1.严禁发布黄、赌、毒等相关信息</view>
					<view>2.严禁发布黄、赌、毒等相关信息</view>
					<view>3.严禁发布黄、赌、毒等相关信息</view>
					<view>4.严禁发布黄、赌、毒等相关信息</view>
					<button type="primary" @tap="handlePopup">朕知道了</button>
				</view>
			</uni-popup>
	</view>
</template>

<script>
	const privilege = ["所有人可见","仅好友可见","仅自己可见"];
	
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	import uploadImage from '../../components/publish/upload-image.vue'
	import uniPopup from '../../components/uni-popup/uni-popup.vue';
	export default {
		components:{
			uniNavBar,
			uploadImage,
			uniPopup
		},
		data() {
			return {
				ifcomfirm:false,
				yinsi : "所有人可见",
				text: "",
				imageList:[]
			}
		},
		onLoad() {
			         this.$refs.popup.open();//页面加载完就显示弹出层
		},
		//返回按钮监听事件
		onBackPress(e){
			if(!this.text  && this.imageList.length<1){
				return ;
			}
			if(!this.ifcomfirm){
				this.saveDrafts();
				return true;      //这里的return true要写在onBackPress里面，不然不能阻止跳转了
			}
		},
		methods: {
			// 按钮点击弹出层消失
			handlePopup(){
				 this.$refs.popup.close();
			},
			uploadImag(arr){
				this.imageList = arr;
			},
			// 返回上一级
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			// 发布说说
			publish(){
				console.log("发布");
			},
			// 改变说说权限
			changTitle(){
				uni.showActionSheet({
					itemList : privilege,
				    success:(res)=> {
						this.yinsi = privilege[res.tapIndex]
				    }
				});
			},
			//保存草稿
			saveDrafts(){
					uni.showModal({
						title: '保存草稿',
						content: '是否保存为草稿',
						confirmText:"保存",
						cancelText:"不保存",
						success:(res)=> {
							this.ifcomfirm = true;
							uni.navigateBack({
								delta:1
							});
						}
					});
			}
		}
	}
</script>

<style>

.popup-content{
	height: 500upx; 
	width: 500upx;
	background: #FFFFFF;
	padding:40upx 50upx 20upx 50upx;
	border-radius: 20upx;
}
.popup-content>view:nth-child(1){
	width: 100%;
	margin-bottom: 30upx;
}
.popup-content>view:nth-child(1)>image{
	width: 65%;
	border-radius: 15upx;
}
.popup-content>view{
	color: #333;
	font-size: 30upx;
}
.popup-content>button{
	margin-top: 20upx;
	color: #FCF119;
}
</style>
