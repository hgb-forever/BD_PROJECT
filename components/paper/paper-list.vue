<template>
	<view>	
		<view class="paper-list u-flex" @tap="opendetail">
			<image :src="item.userpic" mode=""></image>
			<view class="paper-list-info">
				<view class="u-justify-contentb">
					<view>{{item.username}}</view>
					<view>{{item.time}}</view>
				</view>
				<view class="u-justify-contentb">
					<view>{{item.content}}</view>
					<uni-badge :text="item.number" type="error"></uni-badge>
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>
	import uniBadge from '../../components/uni-badge/uni-badge.vue'
	export default {
		components:{
			uniBadge
		},
		props:{
			item: Object
		},
		methods:{
			opendetail(){
				console.log(1)
				uni.navigateTo({
					url: "../../pages/user-chat/user-chat"
				})
			}
		}
	}
</script>

<style>
	.paper-list{
		padding: 20upx;
		border-bottom: 1upx solid #EEE;
	}
	.paper-list>image{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		margin-right: 20upx;
		flex-shrink: 0; 
	}
	.paper-list-info{
		flex: 1;
	}
	.paper-list-info>view:first-of-type{
		width: 100%;
	}
	.paper-list-info>view:first-of-type>view:first-of-type{
		font-size: 35upx;
	}
	.paper-list-info>view:first-of-type>view:last-of-type{
		color: #CBCBCB;
	}
	.paper-list-info>view:last-of-type{
		color: #999;
	}
	.paper-list-info>view:last-of-type>view:first-of-type{
		width: 500upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
