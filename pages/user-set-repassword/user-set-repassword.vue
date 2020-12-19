<template>
	<view class="body">
		<input v-model="oldpassword" placeholder="输入旧密码" class="uni-input common-input" type="text" password>
		<input v-model="newpassword" placeholder="输入新密码" class="uni-input common-input" type="text" password>
		<input v-model="renewpassword" placeholder="输入确认密码" class="uni-input common-input" type="text" password>
		<button type="primary" :loading="loading" class="user-set-btn" :class="{'user-set-btn-disable':disabled}" :disabled="disabled" @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldpassword: "",
				newpassword: "",
				renewpassword: "",
				disabled: true,
				loading: false
			}
		},
		watch:{
			oldpassword(){
				this.change()
			},
			newpassword(){
				this.change()
			},
			renewpassword(){
				this.change()
			}
		},
		methods: {
			change(){	//监听输入框
				if(this.oldpassword && this.newpassword && this.renewpassword){
					this.disabled = false;
				}else{
					this.disabled = true;
				}
			},
			check(){	//验证
				if(this.oldpassword && this.newpassword && this.renewpassword && this.oldpassword!="" && this.newpassword !="" && this.renewpassword!="" && this.newpassword === this.renewpassword){
					return true;
				}				
				uni.showToast({
					title: "请将数据填写完整",
					icon: "none"
				})
				return false;
				
			},
			submit(){	//提交
				this.loading = true;
				this.disabled = true;
				if(!this.check()){
					this.loading = false;
					this.disabled = false;
					return;
				}
				uni.showToast({
					title: "验证通过",
					mask: false,
					duration: 1000
				})
				this.loading = false;
				this.disabled = false;
			}
		}
	}
</script>

<style>
@import url("../../common/form.css");
</style>
