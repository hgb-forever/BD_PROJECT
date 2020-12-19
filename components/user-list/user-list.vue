<template>
	<view class="user-list u-f-ac">
		<image :src="item.userpic" mode="widthFix" lazy-load></image>
		<view>
			<view>{{item.username}}</view>
			<tag-sex-age :age="item.age" :sex="item.sex" style="display:inline-block;"></tag-sex-age>
		</view>				
		<view class="icon iconfont" :class="[isguanzhu?'icon-xuanze-yixuan':'icon-zengjia1']"
		 @tap="guanzhu"></view>			
	</view>
</template>

<script>
	import tagSexAge from '../../components/common/tag-sex-age.vue'
	export default{
		props:{
			item: {
				type: Object
			}
		},
		components:{
			tagSexAge
		},
		data(){
			return{
				isguanzhu: this.item.isguanzhu
			}
		},
		methods:{
			guanzhu(){
				if(!this.isguanzhu){
					this.isguanzhu = true;
					uni.showToast({
						title: "关注成功"
					})
				}
			}
		}
	}
</script>

<style scoped>
	.user-list{
		padding: 20upx;
		margin-right: 20upx;
		box-sizing: border-box;
		border-bottom: 1upx solid #EEE;
	}
	.user-list>image{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		margin-right: 20upx;
		flex-shrink: 0;
	}
	.user-list>view:first-of-type{
		font-size: 35upx;	
		flex: 1;
	}
	.icon-xuanze-yixuan{
		color: #CCC;
	}
	.icon-zengjia1{
		color: #F8791B;
	}
</style>
