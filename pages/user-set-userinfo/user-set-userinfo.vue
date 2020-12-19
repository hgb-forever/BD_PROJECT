<template>
	<view class="body">
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>头像</view>
			<view class="u-f-ac">
				<image :src="userpic" mode="aspectFill" lazy-load @tap="changeimg"></image>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>昵称</view>
			<view class="u-f-ac">
				<input type="text" v-model="username" />
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>性别</view>
			<view class="u-f-ac" @tap="changeOne('sex')">
				<view>{{sex}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>生日</view>
			<picker mode="date" :value="birthday" :start="startDate" :end="endDate" @change="changedate">
			   <view class="u-f-ac">
				<view>{{birthday}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			   </view>                 
			</picker>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>情感</view>
			<view class="u-f-ac"  @tap="changeOne('qg')">
				<view>{{qg}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>职业</view>
			<view class="u-f-ac" @tap="changeOne('job')">
				<view>{{job}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>家乡</view>
			<view class="u-f-ac" @tap="bindPickerChange">
				<view>{{address}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<button type="default" class="user-set-btn">完成</button>
		<simple-address ref="simpleAddress" @onConfirm="onConfirm" themeColor='#007AFF' :show="addressVisible"></simple-address>
	</view>
</template>

<script>
	import simpleAddress from '../../components/simple-address/simple-address.vue'
	let sexList = ['不限','男','女']
	let qgList = ['保密','未婚','已婚']
	let jobList = ['IT','教师','金融','']
	export default {
		components:{
			simpleAddress
		},
		data() {
			return {
				userpic: "../../static/demo/userpic/11.jpg",
				username: "哈哈",
				sex: "不限",
				qg: "未婚",
				job: "IT",
				birthday: "2019-03-18",
				address: '广东省-广州市-天河区',
				addressVisible: false,
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			onConfirm(e) {
				console.log(e)
				this.address = e.label;
			},
			bindPickerChange(e){	//地区选择器
				this.addressVisible = true;
			},
			changedate(e){	//修改生日
				 this.birthday = e.target.value;
			},
			changeOne(type){
				let arr = [];
				switch(type){
					case 'sex':
						arr = sexList;
						break;
					case 'qg':
						arr = qgList;
						break;
					case 'job':
						arr = jobList;
						break;
					default: break;
					
				}
				uni.showActionSheet({
					itemList: arr,
					success: res => {
						console.log(res)
						switch(type){
							case 'sex':
								this.sex = arr[res.tapIndex]
								break;
							case 'qg':
								this.qg = arr[res.tapIndex]
								break;
							case 'job':
								this.job = arr[res.tapIndex]
								break;
							default: break;
							
						}
					}
				})
			},
			changeimg(){	//修改头像
				uni.chooseImage({
					count: 1,
					sizeType:['compressed'],
					success: (res) => {
						this.userpic = res.tempFilePaths[0];
					}
				})
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style>
	@import url("../../common/form.css");
.user-set-userinfo-list{
	border-bottom: 1upx solid #f4f4f4;
	padding: 20upx;
}
.user-set-userinfo-list>view:first-child{
	font-size: 34upx;
	color: #9b9b9b;
	font-weight: bold;
}
.user-set-userinfo-list>view:last-child{
	font-size: 34upx;
}
.user-set-userinfo-list>view:last-child>image{
	width: 80upx;
	height: 80upx;
	border-radius: 50%;
}
.user-set-userinfo-list>view:last-child>input{
	text-align: right;
}
.user-set-userinfo-list>view:last-child>view:last-of-type{
	margin-left: 20upx;
	color: #9b9b9b;
}
</style>
