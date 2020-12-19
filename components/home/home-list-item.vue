<template>
	<view class="u-f-jsb home-list-item" hover-class="home-list-hover" @tap="clickevent">
		<view class="u-f-ac"><view class="icon iconfont" :class="item.icon"></view>
			<view>{{item.name}}</view></view>
		<view class="icon iconfont icon-jinru"></view>
	</view>
</template>

<script>
	export default{
		props: {
			item: Object,
			index: Number
		},
		methods:{
			clickevent(){
				switch(this.item.clicktype){
					case 'navigateTo':
					if(this.item.url){
						uni.navigateTo({url: this.item.url});
					}
					break;
					case 'switchTab':
					if(this.item.url){
						uni.switchTab({url: this.item.url});
					}
					break;
				}
			}
		}
	}
</script>

<style scoped>
.home-list-item{
	padding: 20upx;
	border-bottom: 1upx solid #f4f4f4;
}
.home-list-item:first-of-type{
	border-top: 1upx solid #f4f4f4;
}
.home-list-item>view>view:first-of-type{
	margin-right: 10upx;
}
.home-list-item>view>.icon-liulan{
	color: #46B4FF;
}
.home-list-item>view>.icon-huiyuanvip{
	color: #FF7434;
}
.home-list-item>view>.icon-keyboard{
	color: #46B4FF;
}
.home-list-hover{
	background-color: #f4f4f4;
}
.home-list .icon{
	color: #ccc;
}
</style>
