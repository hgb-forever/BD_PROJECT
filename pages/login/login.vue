<template>
	<view>
		<uni-status-bar bgcolor="#FFE933"></uni-status-bar>
		<image src="../../static/pic/rap.png" mode="aspectFill" lazy-load="" class="loginhead"></image>
		<view class="icon iconfont icon-guanbi" @tap="back"></view>
		<template v-if="!isphone">
		<view class="body login-padding">
			<input v-model="username" placeholder="昵称/手机号/邮箱" class="uni-input common-input phone-input" type="text">
			<view class="login-input-box">
				<input v-model="password" placeholder="请输入密码" class="uni-input common-input forget-input" type="text" password>
				<view class="forget u-ajc">忘记密码?</view>
			</view>
			<button type="primary" :loading="loading" class="user-set-btn" :class="{'user-set-btn-disable':disabled}" :disabled="disabled" @tap="submit">登录</button>
		</view>
		<view class="u-ajc login-status login-padding" @tap="toggleLogin">
			验证码登录<view class="icon iconfont icon-jinru login-font-color"></view>
		</view>
		</template>
		<template v-else>
		<view class="body login-padding">
			<view class="login-input-box">
				<view class="phone u-ajc">+86</view>
			<input 
			v-model="phone" 
			placeholder="输入手机号码" 
			class="uni-input common-input phone-input" 
			type="number">
			</view>
			<view class="login-input-box u-ajc">
				<input v-model="checknum" placeholder="请输入密码" class="uni-input common-input forget-input" type="text" password>
				<view class="code u-ajc" @tap="getchecknum">{{!codetime?'获取验证码':codetime+'s'}}</view>
			</view>
			<button type="primary" :loading="loading" class="user-set-btn" :class="{'user-set-btn-disable':disabled}" :disabled="disabled" @tap="submit">登录/注册</button>
		</view>		
		<view class="u-ajc login-status login-padding" @tap="toggleLogin">
			账号密码登录<view class="icon iconfont icon-jinru login-font-color"></view>
		</view>
		</template>
		<view class="other-login-title u-ajc login-font-color">
			第三方登录
		</view>
		<other-login></other-login>
		<view class="login-rule u-ajc login-padding login-font-color">
			注册即代表您同意<view class="login-xieyi">《毕导用户协议》</view>
		</view>
	</view>
</template>

<script>
	import uniStatusBar from '../../components/uni-status-bar/uni-status-bar.vue'
	import otherLogin from '../../components/home/other-login.vue'
	export default {
		components:{
			uniStatusBar,
			otherLogin
		},
		data() {
			return {
				isphone: true,
				phone: '',
				username: '测试106',
				password: '',
				checknum: '',
				disabled: true,
				loading: false,
				codetime: 0
			}
		},
		watch:{
			phone(){
				this.onBtnChange()
			},
			username(){
				this.onBtnChange()
			},
			password(){
				this.onBtnChange()
			},
			checknum(){
				this.onBtnChange()
			},
		},
		methods: {
			getchecknum(){
				if(this.codetime!=0) return;
				this.codetime = 60;
				let timer = setInterval(()=>{
					this.codetime--;
					if(this.codetime<0){
						this.codetime = 0;
						clearInterval(timer)
					}
				},1000);
			},
			onBtnChange(){	//改变状态按钮
				if((this.username && this.password) || (this.phone && this.checknum)){
					this.disabled = false;
					return ;
				}
				this.disabled = true;
			},
			initInput(){	//重置输入框
				this.phone=''
				this.username= ''
				this.password= ''
				this.checknum= ''
			},
			back(){	//返回上一步
				uni.navigateBack({
					delta: 1
				})
			},
			submit(){//提交登录
			// http://localhost:8080/renren-fast/app/login
			uni.request({
				url:'http://localhost:8080/renren-fast/app/login',
				method:"POST",
				data:{
				  "mobile": this.username,
				  "password": this.password
				}
				// success: (res) => {
				// 	uni.showToast({
				// 		title:"登录成功!"
				// 	});
				// 	console.log(res)
				// 	uni.switchTab({
				// 	    url: '../home/home'
				// 	});
				// },
				// fail: (res) => {
				// 	uni.showToast({
				// 		title:res
				// 	});
				// }
			}).then(data => {//data为一个数组，数组第一项为错误信息，第二项为返回数据
					var [error, res]  = data;
					console.log(res.data);
					if(res.data.code == 0 && res.data.msg == "success"){
						uni.showLoading({
									title:"登录中...",
								});
						uni.setStorage({
						    key: 'user_key',
						    data: {
								"username":this.username,
								"mobile": this.phone,
								"password": this.password
							},
						    success: function () {
						        console.log('success');
						    }
						});
					}
					else{
						uni.showToast({
								title:error
							});
					}
				})
				setTimeout(()=>{
					uni.hideLoading()
					uni.switchTab({
						    url: '../home/home'
						});
				},2000)
			},
			toggleLogin(){
				this.isphone = !this.isphone;
				this.initInput();				
			}
		}
	}
</script>

<style>
@import url("../../common/form.css");
.login-font-color{
	color: #ccc;
}
.login-padding{
	padding: 20upx 0;
}
.loginhead{
	width: 100%;
}
.icon-guanbi{
	position: fixed;
	top: 60upx;
	left: 30upx;
	font-size: 40upx;
	font-weight: bold;
	color: #332F0A;	
}
.other-login-title{
	position: relative;
}
.other-login-title:before,.other-login-title:after{
	width: 100upx;
	position: absolute;
	height: 1upx;
	content: '';
	background-color: #CCC;
	top: 50%;
}
.other-login-title:before{
	left: 25%;
}
.other-login-title:after{
	right: 25%;
}
.login-input-box{
	position: relative;
}
.login-input-box>.forget,
.login-input-box>.phone,
.login-input-box>.code{
	position: absolute;
	height: 100%;
	z-index: 1000;
	top: 0;
}
.login-input-box>.forget{
	width: 150upx;
	right: 0;
	top: 0;
}
.login-input-box>.forget-input{
	padding-right: 150upx;
}
.login-xieyi{
	color: #2FB0FC;
}
.login-input-box>.phone-input{
	padding-left: 100upx;
}
.login-input-box>.phone{
	left: 0;
	width: 100upx;
	font-weight: bold;
}
.login-input-box>.code{
	right: 0;
	background: #EEE;
	border-radius: 10upx;
	font-size: 25upx;
	padding: 10upx 5upx;
	box-sizing: border-box;
	height: auto;
	width: 150upx;
	top: 50%;
	transform: translateY(-50%);
}

</style>
