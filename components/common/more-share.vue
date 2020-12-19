<template>
	<view v-if="show" class="animate__animated animate__fadeIn">
		<view class="more-share-model" @tap="toggle"></view>
		<view class="more-share">
			<view class="more-share-title">分享到</view>
			<view class="more-share-body">
				<block v-for="(val,index) in providerList" :key="index">
					<view class="more-share-item" hover-class="more-share-hover" @tap="share(val)">
						<view class="uni-icon" :class="val.icon"></view>
						<view>{{val.name}}</view>
					</view>
				</block>
				
			</view>
			<view class="more-share-cancel" @tap="toggle">取消</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			show: Boolean
		},
		data(){
			return {
				shareText: 'uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！',
				href:"https://uniapp.dcloud.io",
				image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png',
				shareType:1,//1文字 2图片 0图文 5小程序
				providerList: [
					{
						name: "微信好友",
						id: "weixin",
						icon: "uni-icon-weixin",
						sort: 0
					},
					{
						name: "朋友圈",
						id: "pengyouquan",
						icon: "uni-icon-pengyouquan",
						sort: 1
					},
					{
						name: "新浪微博",
						id: "sinaweibo",
						icon: "uni-icon-weibo",
						sort: 2
					},
					{
						name: "	QQ好友",
						id: "qq",
						icon: "uni-icon-qq",
						sort: 3
					}
				]
			}
		},
		methods:{
			toggle(){
				this.$emit("toggle")
			},
			async share(e){
				console.log('分享通道'+e.id+'; 分享类型:'+this.shareType)
				if(!this.shareText && (this.shareType ===1 || this.shareType ===0)){
					uni.showModal({
						content: "分享内容不能为空",
						showCancel: false
					})
					return;
				}
				
				if(this.image && (this.shareType === 2 || this.shareType ===0)){
					uni.showModal({
						content: "分享图片不能为空",
						showCancel: false
					})
					return;
				}
				
				let shareOptions = {
					provider: e.id,
					scene: e.type && e.type === "WXSenceTimeline" ? "WXSenceTimeline" : "WXSceneSession",//WXSceneSession”分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏
					type: this.shareType,
					success: e =>{
						console.log("success",e)
						uni.showModal({
							content: '分享成功',
							showCancel:"false"
						})
					},
					fail: e=>{
						console.log('fali',e)
						uni.showModal({
							content: e.errMsg,
							showCancel: false
						})
					},
					complete: function(){
						console.log('分享操作结束！')
					}
				}
				
				switch(this.shareType){
					case 0:
						shareOptions.summary = this.shareText;
						shareOptions.imageUrl = this.image;
						shareOptions.title = "欢迎体验uniapp";
						shareOptions.href = "https://uniapp.dcloud.io";
						break;
					case 1:
						shareOptions.summary = this.shareText;
						break;
					case 2:
						shareOptions.imagrUrl = this.image;
						break;
					case 5:
						shareOptions.imageUrl = this.image ? this.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png';
						shareOptions.title = "欢迎体验uniapp";
						shareOptions.miniProgram = {
								id:'gh_33446d7f7a26',
								path:'/pages/tabBar/component/component',
								webUrl:'https://uniapp.dcloud.io',
								type:0
						};
						break;
					default: break;
				}
				
				if(shareOptions.type === 0 && plus.os.name === 'IOS'){//如果是图文分享，且是ios平台，则压缩图片 
					shareOptions.imageUrl = await this.compress();
				}
				if(shareOptions.type ===1 && shareOptions.provider ==='qq'){//如果是分享文字到qq，则必须加上href和title
					shareOPtions.href = 'https://uniapp.dcloud.io';
					shareOPtions.title = '欢迎体验uniapp';
				}
				uni.share(shareOptions);
			},
			compress(){//压缩图片 图文分享要求分享图片大小不能超过20Kb
			return new Promise((res) => {
				var localPath = plus.io.convertAbsoluteFileSystem(img.replace('file://',''));
				console.log('after' + localPath);
				plus.io.resolveLocalFileSystemURL(localPath, (entry) => {
					entery.file((file) => {		 // 可通过entry对象操作图片 
						console.log('getFile:' + JSON.stringify(file));
						if(file.size > 20480){// 压缩后size 大于20Kb
							plus.zip.compressImage({
								src: img,
								dst: img.replace('.jpg','2222.jpg').replace('.JPG','2222.JPG'),
								width: '10%',
								height: '10%',
								quality: 1,
								overwrite: true
							}, (event) => {
								console.log('success zip****' + event.size);
								let newImg = img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG')
								res(newImg)
							}, function(err){
								uni.showModal({
									content: "分享图片太大,需要请重新选择图片！",
									showCancel: false
								})
							})
						}
					}, (e) =>{
						console.log('Resolve file URL failed: ' + e.message);
						uni.showModal({
							content: '分享图片太大,需要请重新选择图片！',
							showCalcel: false
						})
					})
				})
			})				
			}
		}
	}
</script>

<style>
	.more-share-model{
		height: 100%;
		width:100%;
		background-color: rgba(0,0,0,.2);
		position: fixed;
		top: 0;
		left: 0;
	}
	.more-share{
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #fff;
		width: 100%;
	}
	.more-share-title,
	.more-share-cancel{
		text-align: center;
		line-height: 100upx;
		font-size: 32upx;
	}
	.more-share-body{
		display: flex;
		padding: 20upx 0;
		flex-wrap: nowrap;
		border-bottom: 1upx solid #f4f4f4;
	}
	.more-share-item{
		flex: 1;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
	}
	.more-share-item>view:first-of-type{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		justify-content: center;
		align-items: center;
		display: inline-flex;
		color: #fff;
		font-size: 50upx;
	}
	.more-share-item>view:last-of-type{
		color: #7A7A7A;
	}
	.more-share-item>.uni-icon-weixin{
		background-color: #2AD19B;
	}
	.more-share-item>.uni-icon-pengyouquan{
		background-color: #514D4C;
	}
	.more-share-item>.uni-icon-weibo{
		background-color: #EE5E5E;
	}
	.more-share-item>.uni-icon-qq{
		background-color: #5280CE;
	}
</style>
