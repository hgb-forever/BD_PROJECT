<template>
	<view class="uni-tab-bar" >
		<scroll-view scroll-x="true" class="uni-swiper-tab ">
			<block v-for="(item ,index) in tabBarinfo" :key="item.id">
				<view
				 class="swiper-tab-list" 
				 :class="{active : tabIndex == index}"
				 @tap="changeIndex(index)">
					{{item.name}}
				<view class="swiper-tab-line"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:{
			tabBarinfo : Array,
			tabIndex : Number
		},
		methods:{
			changeIndex(index){
				this.$emit("changIndex",index);
			}
		}
	}
</script>

<style>
	.uni-swiper-tab{
		border-bottom: 1upx solid #EEEEEE;
	}
	.swiper-tab-list{
		color: #969696;
		font-weight: bold;
	}
	.uni-swiper-tab .active{
		color: #343434;
	}
	.active .swiper-tab-line{
		border-radius: 50upx;
		border-top: 5upx solid #FCF004;
		border-bottom: 5upx solid #FCF004;
		width: 70upx;
		margin: auto;
	}
</style>
