<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
		<uni-collapse>
			<uni-collapse-item :title="item.title" :showAnimation="false">
				<view style="padding: 30upx;background-color: #FFFFFF;">
					{{item.content}}
				</view>
			</uni-collapse-item>
		</uni-collapse>
		</block>
		<view class="body">
			<button type="primary" class="user-set-btn">意见反馈</button>
		</view>
	</view>
</template>

<script>
	import uniCollapse from '../../components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '../../components/uni-collapse-item/uni-collapse-item.vue'
	export default {
		components:{
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				list:[
					{
						title: "客服什么时候上线？",
						content: "亲爱的仿糗友,客服的工作时间为:周一至周六10:00-12:00,14:00-19:00,非工作时间的咨询反馈会自动转为留言,客服上线后会第一时间回复哦~"
					},
					{
						title: "忘记账号/昵称/密码怎么办？",
						content: "123"
					},
					{
						title: "怎么搜索/查找/关注/取关用户？",
						content: "123"
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import "../../common/form.css"
</style>
