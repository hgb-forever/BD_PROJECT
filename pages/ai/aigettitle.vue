<template>
    <view class="content ">

            
            <view style="margin: 100upx;display: flex;" class="animated flip">
            	<image src="../../static/pic/ai.png" mode="aspectFit" style="flex: 1;z-index: 9999;"></image>
            </view>
			<view class="">
				<input  type="text" class="input_control"  :value="keyword" v-model="keyword" placeholder="输入专业" />
				<button class="btn_make" @tap="getPaperTopics()">生成</button>
			</view>
		<!-- 	<view class="u-justify-contentb u-align-items my-tag">
				<uni-tag
				text="title.text" 
				size="small" 
				type="success"
				circle="true">
				 </uni-tag>
				 <uni-rate 
				 size="16"  
				 class="my-rate" 
				 v-model="rate_value"
				 allow-half 
				 :max="5"
				 @change="onChange"></uni-rate>
			</view> -->
			<view  class="title_list my-tag" v-show="title_list != undefined || title_list.length > 0">
			<view class="u-ajc my-tag-contro">
				<block  v-for="(title,index) in title_list" :key="index">
					<p>{{title}}</p>
					<view class="u-justify-contentb u-align-items my-tag">
						<uni-tag
						:text="title.text" 
						size="small" 
						type="success"
						circle="true">
						 </uni-tag>
						 <uni-rate 
						 size="16"  
						 class="my-rate" 
						 v-model="rate_value"
						 :value="rate_value"
						 :titleId="title.log_id"
						 allow-half 
						 :max="5"
						 @change="onChange">
						 </uni-rate>
					</view>
				</block>
			</view>
			</view>			
    </view>
</template>

<script>
	import uniTag from '../../components/uni-tag/uni-tag.vue';
	import uniRate from '../../components/uni-rate/uni-rate.vue';
    import {
        mapState
    } from 'vuex'
    export default {
		components:{
			uniTag,
			uniRate
		},
		data(){
			return{
				title_list : [],
				keyword : "",
				rate_value: 1
			}
		},
		methods:{
			getPaperTopics(){
				if(this.keyword != ""){
					uni.request({
						        url: 'http://localhost:8080/renren-fast/getpapertopic',
								method:"GET",
								data:{
									"keyword":this.keyword
								},
								sslVerify:false
						    })
						    .then(data=>{
								let [err,res] = data
								console.log(res)
								if(res != null){
									this.title_list = res.data
								}else{
									err= {
										"text":"请求超时，请重试"
									}
									this.title_list[0] = err
								}
							})
					}
					else{
						console.log("请输入专业名称")
					}
				},
		onChange(e){
			console.log('rate发生改变:' + JSON.stringify(e))
			this.rate_value = e.value
			console.log(this.rate_value);
			console.log(e.titleId);
			/* 
			 {
			     "score": 0,
			     "timeStamp": "2020-11-06T12:39:19.018Z",
			     "titleId": 0,
			     "userId": 0
			 }
			*/
			uni.request({
				url:'http://localhost:8080/renren-fast/rating/insertRating',
				method:"POST",
				data:{
					score: this.rate_value,
					titleId:e.titleId,
					userId: 20
				},
				success(data) {
					console.log(data);
				},
				fail(res) {
					console.log(res);
				}
			})
		}
		}
		
	}
</script>

<style>
	.content{
		width: 100%;
		height: 100%;
	}
	
	.input_control{
	  width:360px;
	  margin:20upx auto 0 auto;
	  
	  font-size:1em;
	  height:1.5em;
	  border-radius:4px;
	  border:1px solid #c8cccf;
	  color:#6a6f77;
	  
	  -webkit-appearance:none;
	    -moz-appearance: none;
	}
	
	.title_list{
		text-align: center;
	}
	.btn_make{
		margin:50upx auto;
		padding: auto;
		width: 200upx;
		height: auto;
	}
    .hello {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .title {
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul {
        font-size: 30upx;
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul>view {
        line-height: 50upx;
    }

	.my-tag-contro{
		flex-direction: column;
	}
	.my-tag{
		margin: 0 20upx;
		padding: 10upx;
	}
	
</style>
