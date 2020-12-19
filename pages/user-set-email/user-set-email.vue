<template>
	<view class="body">
		<input v-model="email" placeholder="输入你要绑定的邮箱" class="uni-input common-input" type="text">
		<input v-model="password" placeholder="请输入密码" class="uni-input common-input" type="text" password>
		<button type="primary" :loading="loading" class="user-set-btn" :class="{'user-set-btn-disable':disabled}" :disabled="disabled" @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email: "",
				password: "",
				disabled: true,
				loading: false
			}
		},
		watch:{
			email(val){
				this.change()
			},
			password(val){
				this.change()
			}
		},
		methods: {
			check(){//验证
				if(!this.email || this.email == ""){
					uni.showToast({
						title: "邮箱不能为空",
						icon: "none"
					})
					return false;
				}
				if(!this.password || this.password == ""){
					uni.showToast({
						title: "密码不能为空",
						icon: "none"
					})
					return false;
				}
				let ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				if(!ePattern.test(this.email)){
					uni.showToast({
						title: "请输入正确邮箱格式",
						icon: "none"
					})
					return false;
				}
				return true;
			},
			change(){//监听输入框
				if(this.email && this.password){
					this.disabled = false;
					return;
				}
				this.disabled = true;
			},
			submit(){
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
