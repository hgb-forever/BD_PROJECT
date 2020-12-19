<!-- <template>

	<view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
			</view>
		</view>
		
		
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
						<view class="uni-input">{{time}}</view>
					</picker>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	function getDate(type) {
		const date = new Date();
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
	
		return `${year}-${month}-${day}`;
	}
	export default {
		data() {
			return {
				index: 0,
				time: '12:01',
				multiIndex: [0, 0, 0],
				date: getDate({
					format: true
				}),
				startDate:getDate('start'),
				endDate:getDate('end'),
			}
		},
		methods: {
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindTimeChange: function(e) {
				this.time = e.target.value
			}
		}
		// methods: {
		// 	//监听原生标题点击事件
		// 	onNavigationBarButtonTap(e){
		// 		if(e.index == 0)
		// 		{
		// 				uni.navigateBack({
		// 				delta: 1
		// 			});
		// 		}
		// 	},
		// 	//监听原生搜索框输入内容变化事件
		// 	onNavigationBarSearchInputChanged(e){
		// 		console.log(e.text);
		// 	},
		// 	//监听原生标题栏搜索输入框点击事件
		// 	onNavigationBarSearchInputClicked(e){
		// 		console.log(e.text);
		// 	}
		// }
	}
</script>

<style>

</style>

 -->
 
 
 <template>
     <view >
         <view class="uni-padding-wrap">
 			<view class="uni-title">
 				日期：{{year}}年{{month}}月{{day}}日
 			</view>
 		</view>
		<view @tap="xianshi">触发</view>
		<view class="Navbom animated bounceInUp" v-show="show">
			<view class="NavBtn">
				<button  @tap="clickShow">取消</button>
				<button  @tap="clickShow">确定</button>
			</view>
			
			<picker-view  v-if="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange">
			    <picker-view-column>
			        <view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
			    </picker-view-column>
			    <picker-view-column>
			        <view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
			    </picker-view-column>
			    <picker-view-column>
			        <view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
			    </picker-view-column>
			</picker-view>
		</view>

     </view>
 </template>
 
 <script>
     export default {
         data () {
             const date = new Date()
             const years = []
             const year = date.getFullYear()
             const months = []
             const month = date.getMonth() + 1
             const days = []
             const day = date.getDate()
 
             for (let i = 1990; i <= date.getFullYear(); i++) {
                 years.push(i)
             }
 
             for (let i = 1; i <= 12; i++) {
                 months.push(i)
             }
 
             for (let i = 1; i <= 31; i++) {
                 days.push(i)
             }
             return {
				 show:false,
                 title: 'picker-view',
                 years,
                 year,
                 months,
                 month,
                 days,
                 day,
                 value: [9999, month - 1, day - 1],
 				/**
 				 * 解决动态设置indicator-style不生效的问题
 				 */
                 visible: true,
                 indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`
             }
         },
         methods: {
             bindChange (e) {
                 const val = e.detail.value
                 this.year = this.years[val[0]]
                 this.month = this.months[val[1]]
                 this.day = this.days[val[2]]
				 console.log(this.year);
				 console.log(this.month);
				 console.log(this.day);
				 console.log(e)
             },
			 clickShow(){
				 this.show = !this.show;
			 },
			 xianshi(){
				 this.show=true;
			 }
         }
     }
 </script>
 
 <style>
 	
     picker-view {
         width: 100%;
         height: 600upx;
         margin-top:20upx;
     }
 
     .item {
         line-height: 100upx;
         text-align: center;
     }
	 .NavBtn{
		 display: flex;
		 align-items: center;
		 justify-content: space-between;
		 border: 1upx solid;
	 }
	 .Navbom{
		 border: 1upx solid;
		 position: absolute;
		 bottom: 0;
		 left: 0;
		 right: 0;
	 }
	 button{
		 margin: 0;
		 color: #333333;
	 }
 </style>
 